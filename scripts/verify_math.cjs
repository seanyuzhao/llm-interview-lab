#!/usr/bin/env node
"use strict";
const fs=require("fs"), vm=require("vm"), assert=require("assert"), path=require("path");
const root=path.resolve(__dirname,"..");
const logs=[];
const context={window:{},console:{info(){},warn(...args){logs.push(args)}}};
context.window.katex={renderToString(tex){return "<span class=\"katex-test\">"+tex+"</span>";}};
context.window.renderMathInElement=()=>{};
context.document={querySelector(){return null}};
vm.createContext(context);
function exec(relative){vm.runInContext(fs.readFileSync(path.join(root,relative),"utf8"),context,{filename:relative,timeout:12000});}
exec("data/questions.js");
exec("data/questions_extension.js");
exec("data/math_patches.js");
const baseMeta=new Map(context.window.LLM_QUESTIONS.map(q=>[q.category,q]));
context.window.LLM_QUESTION_ADDITIONS.forEach(([category,level,title,answer,follow],i)=>{
  const template=baseMeta.get(category);
  context.window.LLM_QUESTIONS.push({
    n:520+i,title,category,level,html:"<p>"+answer+"</p>",
    markdown:answer,catName:template.catName
  });
});
for(const part of ["001_075","076_150","151_240","241_330","331_419","420_519","520_591"])
  exec("data/followups_"+part+".js");
for(const q of context.window.LLM_QUESTIONS){
  const entry=context.window.LLM_FOLLOWUP_BANK[q.n];
  const answer=typeof entry==="string"?entry:entry?.answer;
  assert(answer,"Missing follow-up for "+q.n);
  q.html+="<p>"+answer+"</p>";
  q.markdown+="\n"+answer;
}
const softmax=context.window.LLM_QUESTIONS.find(q=>q.n===155);
assert(context.window.LLM_FOLLOWUP_BANK["155"].includes("logsoftmax"),"Missing Q155 follow-up");
const total=context.window.LLM_MATH_PATCHES.length;
assert(total>=90,"Missing reviewed equations");
exec("assets/math.js");
const missing=logs.find(row=>row[0]==="Unmatched legacy equation annotations");
assert(!missing,JSON.stringify(missing&&missing[1]));
assert(softmax.html.includes("\\(\\operatorname{softmax}(z)_i="),"Q155 main softmax was not annotated");
assert(softmax.html.includes("\\(\\log\\operatorname{softmax}(z)_i="),"Q155 follow-up was not annotated");
assert(!softmax.html.includes("softmax(z)_i=exp("),"Old plain equation remained");
assert(!softmax.html.includes("logsoftmax(z_i)=z_i"),"Old plain follow-up equation remained");
const grad=context.window.LLM_QUESTIONS.find(q=>q.n===154);
assert(grad.html.includes("\\(\\frac{\\partial L}"),"Gradient equation was not annotated");
const kl=context.window.LLM_QUESTIONS.find(q=>q.n===156);
assert(kl.html.includes("\\(D_{\\mathrm{KL}}"),"KL equation was not annotated");
console.log("PASS: "+total+" curated LaTeX annotations, Q155 answer/follow-up, gradient/KL, and zero missing replacements");
