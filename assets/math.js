/* LaTeX rendering for LLM Interview Lab: KaTeX with SVG fallback. */
(() => {
  "use strict";
  const engine=window.katex, autoRender=window.renderMathInElement;
  if (!engine || !autoRender) {
    console.warn("KaTeX unavailable; keeping existing formula SVGs.");
    return;
  }
  const tokensPattern=/\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^$\n]+?\$|\\\([\s\S]*?\\\)/g;
  const svgPattern=/<mjx-container\b[\s\S]*?<\/mjx-container>/g;
  function unwrap(s) {
    if(s.startsWith("$$")||s.startsWith("\\["))
      return {latex:s.slice(2,-2),displayMode:true};
    if(s.startsWith("\\(")) return {latex:s.slice(2,-2),displayMode:false};
    return {latex:s.slice(1,-1),displayMode:false};
  }
  const render=(latex,displayMode)=>engine.renderToString(latex,{
    displayMode,output:"htmlAndMathml",throwOnError:true,strict:"ignore",trust:false
  });
  let converted=0;
  for(const q of window.LLM_QUESTIONS||[]){
    const n=(q.html.match(/<mjx-container\b/g)||[]).length;
    if(!n)continue;
    const tokens=(q.markdown.match(tokensPattern)||[]).slice(0,n);
    if(tokens.length!==n){console.warn("Skipping unmatched LaTeX for question",q.n);continue;}
    let i=0;
    q.html=q.html.replace(svgPattern,original=>{
      const formula=unwrap(tokens[i++]);
      try {const html=render(formula.latex,formula.displayMode);converted++;return html;}
      catch(err){console.warn("Keeping original SVG for Q"+q.n,err);return original;}
    });
  }
  for(const f of window.LLM_FORMULAS||[]){
    try {f.html=render(f.tex,true);}
    catch(err){console.warn("Keeping existing formula card",f.title,err);}
  }
  const delimiters=[
    {left:"$$",right:"$$",display:true},
    {left:"\\[",right:"\\]",display:true},
    {left:"\\(",right:"\\)",display:false},
    {left:"$",right:"$",display:false}
  ];
  window.renderInterviewMath=root=>{
    if(!root)return;
    try{
      autoRender(root,{
        delimiters,throwOnError:false,strict:"ignore",trust:false,
        ignoredTags:["script","noscript","style","textarea","pre","code","option"],
        ignoredClasses:["katex","katex-display"]
      });
    }catch(err){console.warn("LaTeX rendering failed for a view",err);}
  };
  window.renderInterviewMath(document.querySelector(".content"));
  console.info("KaTeX ready; converted",converted,"legacy formula SVGs.");
})();