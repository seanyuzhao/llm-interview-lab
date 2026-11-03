#!/usr/bin/env node
"use strict";
const fs=require("fs"),vm=require("vm"),assert=require("assert"),path=require("path");
const root=path.resolve(__dirname,".."),warnings=[],info=[];
const w={};
const sandbox={window:w,console:{info(...args){info.push(args);},warn(...args){warnings.push(args);}},document:{querySelector(){return null;}}};
w.katex={renderToString(tex){return '<span class="katex-test">'+tex+'</span>'}};
w.renderMathInElement=()=>{};
vm.createContext(sandbox);
function run(rel){vm.runInContext(fs.readFileSync(path.join(root,rel),"utf8"),sandbox,{filename:rel,timeout:20000});}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function format(s){return escapeHtml(s).replace(/\x60([^\x60]+)\x60/g,"<code>$1</code>").replace(/\n/g,"<br>");}
run("data/questions.js");
run("data/questions_extension.js");
run("data/core_addenda.js");
run("data/math_patches.js");
run("data/math_patches_extra.js");
const questions=w.LLM_QUESTIONS;
const byCat=new Map(questions.map(q=>[q.category,q]));
w.LLM_QUESTION_ADDITIONS.forEach(([category,level,title,answer],i)=>{
  assert(byCat.has(category),"Unknown category in extension");
  questions.push({n:520+i,title,category,level,html:"<p><strong>参考答案：</strong>"+format(answer)+"</p>",markdown:"**参考答案：**"+answer});
});
for(const part of ["001_075","076_150","151_240","241_330","331_419","420_519","520_591"])run("data/followups_"+part+".js");
for(const q of questions){
  const extra=w.LLM_CORE_ADDENDA[q.n];
  if(extra){q.html+="<p><strong>进阶拆解：</strong>"+format(extra)+"</p>";q.markdown+="\n\n**进阶拆解：**"+extra;}
  const entry=w.LLM_FOLLOWUP_BANK[q.n];assert(entry,"Missing follow-up Q"+q.n);
  const old=q.markdown.match(/\*\*常见追问：\*\*\s*([^\n]*)/);
  const follow=typeof entry==="string"?(old?old[1].trim():""):entry.question;
  const answer=typeof entry==="string"?entry:entry.answer;
  assert(follow&&answer,"Missing follow-up Q/A "+q.n);
  q.html=q.html.replace(/<p>\s*<strong>常见追问：<\/strong>[\s\S]*?<\/p>\s*/g,"");
  q.markdown=q.markdown.replace(/\n*\*\*常见追问：\*\*[^\n]*\n?/g,"\n").trim();
  q.html+='<div class="followup-block"><p>'+format(follow)+'</p><p>'+format(answer)+'</p></div>';
  q.markdown+="\n\n**常见追问：**"+follow+"\n\n**追问解答：**"+answer;
}
assert(questions.length===591,"Question count changed");
const total=w.LLM_MATH_PATCHES.length+w.LLM_MATH_PATCHES_EXTRA.length;
assert(total>=190,"Insufficient math annotations");
run("assets/math.js");
const missing=warnings.find(row=>row[0]==="Unmatched legacy equation annotations");
assert(!missing,JSON.stringify(missing?.[1]));
const get=id=>questions.find(q=>q.n===id);
assert(get(155).html.includes("\\(\\operatorname{softmax}(z)_i="),"Softmax equation not converted");
assert(get(155).html.includes("\\(\\log\\operatorname{softmax}(z)_i="),"Softmax follow-up missing");
assert(get(154).html.includes("\\(\\frac{\\partial L}"),"Cross-entropy gradient missing");
assert(get(156).html.includes("\\(D_{\\mathrm{KL}}"),"KL relation missing");
assert(get(534).html.includes("\\(A_t=\\sum_{l\\ge0}"),"GAE equation missing");
assert(get(535).html.includes("\\(\\frac{\\mathrm dH}"),"Entropy derivative missing");
assert(get(549).html.includes("\\(q_{\\rm mix}"),"Teacher mixture equation missing");
assert(get(576).html.includes("\\(p(x)=\\prod_t"),"Diffusion LLM comparison missing");
assert(get(337).title.includes("\\(\\lambda\\)"),"GAE title not typeset");
assert(get(539).title.includes("\\(\\beta\\)"),"DPO title not typeset");
assert(get(140).html.includes("<pre><code"),"Code block damaged");
const converted=info.find(row=>row[0]==="KaTeX ready; converted");
assert(converted&&converted[1]===224,"Legacy MathJax conversion changed");
console.log("PASS: 591 questions, "+total+" annotations, 224 converted SVG formulas, complete Q&A, math headings, zero unmatched patches");
