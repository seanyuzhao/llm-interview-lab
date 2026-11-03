#!/usr/bin/env python3
from pathlib import Path
import json,re
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text(encoding='utf-8')
paths=['assets/style.css','assets/app.js','data/questions.js','data/questions_extension.js','data/core_addenda.js','data/formulas.js']
for path in paths:
 assert (root/path).is_file(),path
 assert path in html,(path,'missing script/link')
def load(path,name,opening='[',closing=']'):
 s=(root/path).read_text(encoding='utf-8')
 m=re.search(r'window\.'+re.escape(name)+r'\s*=\s*('+re.escape(opening)+r'.*'+re.escape(closing)+r');',s,re.S)
 assert m,name
 return json.loads(m.group(1))
core=load('data/questions.js','LLM_QUESTIONS')
extra=load('data/questions_extension.js','LLM_QUESTION_ADDITIONS')
addenda=load('data/core_addenda.js','LLM_CORE_ADDENDA','{','}')
formulas=load('data/formulas.js','LLM_FORMULAS')
assert len(core)==519 and len(extra)==72 and len(addenda)==96 and len(formulas)==12
ids=[x['n'] for x in core]+list(range(520,520+len(extra)))
titles=[x['title'] for x in core]+[x[2] for x in extra]
assert len(set(ids))==591 and len(set(titles))==591
assert len({x['category'] for x in core})==28
assert all(x.get('html') and x.get('markdown') and x.get('text') for x in core)
assert all(len(x)==5 and len(x[3])>=100 for x in extra)
assert all(int(k) in range(1,520) for k in addenda)
app=(root/'assets/app.js').read_text(encoding='utf-8')
assert 'LLM_QUESTION_ADDITIONS' in app and 'localStorage' in app
assert '全部面试题 · 150 问' not in app
assert 'Agentic RL 与 Environment Scaling' not in app
notes=(root/'notes/面试题库_591问_完整答案.md').read_text(encoding='utf-8')
note_ids=[int(x) for x in re.findall(r'^### (\d+)\. ',notes,re.M)]
assert len(note_ids)==591 and len(set(note_ids))==591
assert sum(int(x) for x in re.findall(r'^- .+?：(\d+) 题$',notes,re.M))==591
assert notes.count('**进阶拆解：**')==96
assert 'v=20261103-591' in html
print('PASS: 591 questions (519 original + 72 new); 96 enriched; 28 modules; 12 formulas')
