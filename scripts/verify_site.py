#!/usr/bin/env python3
from pathlib import Path
import json,re
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text(encoding='utf-8')
for path in ['assets/style.css','assets/app.js','data/questions.js','data/formulas.js']:
 assert (root/path).is_file(),path
 assert path in html,(path,'not included in index')
def jsarray(path,var):
 s=(root/path).read_text(encoding='utf-8')
 m=re.search(r'window\.'+var+r'\s*=\s*(\[.*\]);',s,re.S)
 assert m,var
 return json.loads(m.group(1))
q=jsarray('data/questions.js','LLM_QUESTIONS')
f=jsarray('data/formulas.js','LLM_FORMULAS')
assert len(q)==519,len(q)
assert len({x['n'] for x in q})==519
assert len({x['title'] for x in q})==519
assert len({x['category'] for x in q})==28
assert all(x.get('html') and x.get('markdown') and x.get('text') for x in q)
assert len(f)==12,len(f)
assert 'localStorage' in (root/'assets/app.js').read_text(encoding='utf-8')
print('PASS:',len(q),'questions',len({x['category'] for x in q}),'modules',len(f),'formulas')
