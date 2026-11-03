<div align="center">

# LLM Interview Lab

### 从 Transformer 到 Agentic RL，一站式准备大模型算法面试

**591 道完整问答 · 28 个知识模块 · 12 张公式卡片**

**内容版本：591 道问答，96 道核心题附进阶拆解，所有题目均包含常见追问与独立解答。网站与 Markdown 按学习路径连续展示 Q001–Q591，原题内部 ID 不变，已有浏览器学习记录继续有效。**

面向大模型算法、后训练（Post-training）、多模态与 Agentic RL 方向的系统化面试知识库。

[**🚀 在线打开题库**](https://seanyuzhao.github.io/llm-interview-lab/) · [**📚 阅读 Markdown 全集**](./notes/面试题库_591问_完整答案.md) · [**🛠️ 查看自动部署**](./actions/workflows/deploy-pages.yml)

![GitHub Pages](https://github.com/seanyuzhao/llm-interview-lab/actions/workflows/deploy-pages.yml/badge.svg)
![Content verification](https://github.com/seanyuzhao/llm-interview-lab/actions/workflows/verify.yml/badge.svg)
![Questions](https://img.shields.io/badge/questions-591-226c90)
![Modules](https://img.shields.io/badge/modules-28-487a67)
![Hosting](https://img.shields.io/badge/hosting-GitHub%20Pages-222222)

</div>

---

## ✨ 项目简介

LLM Interview Lab 不只是题目清单，而是把**模型基础 → 预训练与架构 → 后训练算法 → 系统工程 → Agentic RL / 蒸馏 → 项目面试**组织成一条可复习、可自测的知识链。

每道题目均提供参考答案、常见追问及追问解答，部分核心题额外附有进阶拆解和数学/代码说明。既可以按模块系统学习，也可以在面试前通过随机自测检查薄弱环节。

**适合：** 大模型算法工程师、LLM Post-training / RLHF / RLVR、MLLM、多模态后训练、Agentic RL、训练与推理系统等岗位的面试准备，以及希望系统梳理相关知识的学习者。

> [!IMPORTANT]
> **直接使用在线版：** https://seanyuzhao.github.io/llm-interview-lab/  
> 网站是免费托管的静态页面，无需注册或部署后端。**学习进度保存在当前浏览器中，不会自动跨设备同步。**

## 🎯 核心功能

| 功能 | 说明 |
| --- | --- |
| 📚 **591 道完整问答** | 从深度学习基础逐步到后训练和 Agentic RL，连续编号 Q001–Q591 |
| 🧭 **28 个知识模块** | 按主题组织，支持模块筛选与掌握进度统计 |
| 🔎 **全文搜索** | 可根据题目、参考答案、知识模块及题号搜索 |
| 🏷️ **难度与状态筛选** | 基础 / 进阶 / 挑战；全部、待复习、仅收藏、尚未掌握 |
| 🧠 **随机模拟面试** | 先独立作答再展示参考答案，优先抽取未掌握题目；支持只抽待复习题 |
| 🧮 **12 张公式卡片** | 快速回顾核心公式，并跳转至相关题目 |
| ✅ **个人复习管理** | 标记已掌握、待复习、收藏；每道题可写个人备注 |
| 📊 **学习概览** | 统计已掌握、待复习、收藏数量及模块掌握比例 |
| 🌓 **深色 / 浅色主题** | 根据习惯切换阅读模式 |
| 💾 **本地保存与备份** | 自动存入浏览器；支持导出与导入学习进度 JSON |

## 🗺️ 知识体系

题库分为 **8 个学习方向、28 个模块**：

| 学习方向 | 覆盖模块 |
| --- | --- |
| **01 · 深度学习基础** | 深度学习数学基础；神经网络与经典视觉基础 |
| **02 · Transformer / LLM** | Transformer 原理；大模型基础与预训练；数据、Tokenizer 与预训练语料；LLM 架构深水区 |
| **03 · MLLM 多模态** | 多模态基础与视觉编码器；MLLM 训练与多模态后训练；视频、音频与交互式 MLLM |
| **04 · 基模技术报告** | 大模型技术报告精读；现代基模架构与报告前沿 |
| **05 · 训练与推理工程** | 微调与训练优化；推理部署与性能；分布式训练与性能工程；后训练故障诊断与实验复现 |
| **06 · RLHF / RLVR 算法** | 后训练数学基础；GRPO / DAPO / GSPO；强化学习数学与策略优化进阶；奖励建模与偏好对齐；后训练系统工程 |
| **07 · Agentic RL 与蒸馏** | Agentic RL；Agentic RL 进阶与实践；检索增强、工具调用与知识系统；同策略与多教师蒸馏 |
| **08 · 评测与项目实战** | 评测、安全与研究方法；项目深挖与手写代码；算法代码与系统设计；工程编程与架构设计面试 |

部分重点主题：

- **模型基础：** Attention、RoPE、GQA、MoE、MLA、Tokenizer、Scaling Law、预训练目标与数据治理。
- **后训练：** SFT、Reward Modeling、RLHF、RLVR、DPO、PPO、GRPO、DAPO、GSPO、KL、优势估计与采样策略。
- **蒸馏与 Agent：** On-Policy Distillation、多教师蒸馏、工具调用与轨迹、奖励设计、课程学习及 Agent 评测。
- **多模态：** Vision Encoder、视觉 Token、图文对齐、视频 / 音频、多模态训练与推理。
- **工程实践：** LoRA / QLoRA、ZeRO、混合精度、训练显存、KV Cache、FlashAttention、vLLM、吞吐与延迟。
- **模型报告：** 结合代表性基模论文与技术报告，理解架构选择及训练设计背后的动机。

## 🚀 三分钟开始学习

1. **打开网站：** [LLM Interview Lab](https://seanyuzhao.github.io/llm-interview-lab/)。
2. **选择模块：** 从左侧导航进入 Transformer、LLM、MLLM、后训练或 Agentic RL 专题。
3. **做题并标记状态：** 点击题目查看答案，按掌握程度标为「已掌握」或「待复习」，重要问题可以收藏并添加个人备注。
4. **进入随机自测：** 尝试先用 60–120 秒口述答案，再展开参考答案检查遗漏；也可仅从待复习题中抽题。
5. **定期备份：** 在「原论文与资料」页面，或右上角「⋯」菜单中导出学习进度 JSON。

### ⌨️ 快捷操作

| 操作 | 方式 |
| --- | --- |
| 聚焦搜索框 | `/` |
| 关闭弹窗 | `Esc` |
| 展开 / 收起参考答案 | 点击题目标题 |
| 收藏重点 | 点击题目右侧星标 |
| 备份 / 恢复记录 | 「⋯」→ 导出 / 导入进度 |

### 📆 一个可参考的 14 天冲刺顺序

| 时间 | 学习建议 |
| --- | --- |
| Day 01–02 | 深度学习数学、反向传播、优化器及经典网络 |
| Day 03–04 | Transformer、LLM 预训练、Tokenizer、架构设计 |
| Day 05–06 | 微调、分布式训练、推理服务与 KV Cache |
| Day 07–09 | PPO、GRPO、DAPO、DPO、奖励建模与实验诊断 |
| Day 10–11 | Agentic RL、OPD、多教师蒸馏与环境设计 |
| Day 12–14 | 手撕代码、工程排障、项目深挖与模拟面试 |

路线只是建议；如果已经具备基础知识，可以直接从后训练、Agentic RL 或项目模块开始。

## 🔐 学习进度与隐私

本项目**没有用户账号、云数据库或跨设备自动同步功能**。新增题目不会改变原有 Q1–Q519 的编号，已经保存的学习状态仍按原编号读取。

- 已掌握、待复习、收藏、个人备注及主题选择会写入当前浏览器的 `localStorage`（键名：`llmInterviewLab-v1`）。
- **关闭网页、退出浏览器或重启设备后**，通常仍能在同一浏览器及同一站点下继续学习。
- **不同设备、不同浏览器或不同浏览器配置文件之间不会自动同步。** 如需迁移，请在旧设备导出 JSON，然后在新设备导入。
- **清除站点数据、使用隐私 / 无痕模式或浏览器限制本地存储**，可能使记录无法保存或丢失。建议定期手动导出备份。
- 导入进度会用文件中的学习记录**替换当前浏览器的对应记录**；导入前建议先导出当前数据。
- **公开的是网站源代码及题库，不是你的个人学习记录。** 本站没有把个人复习状态自动上传到 GitHub。

> [!CAUTION]
> **不要把个人学习进度 JSON、私人笔记或密钥提交到公开仓库。** 导出的备份文件请自行妥善保存。

## 🧰 本地运行

这是一个基于 **HTML / CSS / JavaScript** 的静态网站，不需要数据库，也无需安装 npm 依赖。

~~~bash
git clone https://github.com/seanyuzhao/llm-interview-lab.git
cd llm-interview-lab
python3 -m http.server 8765 --bind 127.0.0.1
~~~

在浏览器打开 **http://127.0.0.1:8765/**。

本地环境和 GitHub Pages 域名属于不同的站点存储空间，二者的学习进度不会自动合并。

### 📁 目录结构

~~~text
llm-interview-lab/
├── index.html                  # 网站入口与页面布局
├── assets/
│   ├── app.js                  # 搜索、题库交互、复习记录与自测
│   └── style.css               # 页面样式与响应式布局
├── data/
│   ├── questions.js            # 原有 519 道题（题号保持不变）
│   ├── questions_extension.js  # 新增 72 道题
│   ├── core_addenda.js         # 96 道核心题进阶解析
│   └── formulas.js             # 12 张公式卡片
├── notes/
│   └── 面试题库_591问_完整答案.md  # Markdown 完整版
├── scripts/
│   └── verify_site.py          # 数据一致性检查
└── .github/workflows/
    ├── deploy-pages.yml        # GitHub Pages 自动部署
    └── verify.yml              # 静态网站校验
~~~

## ⚙️ 自动部署与校验

网站托管在 **GitHub Pages**。向 `main` 分支推送代码后，GitHub Actions 会自动执行校验并部署，无需自建服务器。

- **在线网站：** https://seanyuzhao.github.io/llm-interview-lab/
- **部署工作流：** [Deploy GitHub Pages](./.github/workflows/deploy-pages.yml)
- **内容校验工作流：** [Verify static site](./.github/workflows/verify.yml)
- **部署状态：** [GitHub Actions](./actions)

本地也可以执行同样的基础检查：

~~~bash
python3 scripts/verify_site.py
node --check assets/app.js
node --check data/questions.js
node --check data/formulas.js
~~~

校验脚本检查题目数量、题号与标题唯一性、模块数量、公式数量及必要的页面资源；它不等同于所有答案经过逐条学术审校。

## 🤝 反馈与贡献

欢迎通过 [Issues](./issues) 反馈错别字、数学推导错误、失效链接或提出值得补充的面试问题；也欢迎通过 [Pull Requests](./pulls) 贡献修订。

建议提交内容时写清楚：**题目编号 / 所在模块、问题描述、建议修订，以及能够验证结论的论文或官方文档链接**。涉及训练配方、算法变体及性能结论时，请尽量说明模型版本和具体实验前提。

## 📌 内容说明

- 题库用于**学习与面试准备**，是对公开知识、研究论文、技术报告和工程实践的整理，**不代表任何公司的官方题库或逐字面经**。
- 部分公式和解释采用教学简化形式。涉及梯度推导、loss 归一化、token 级与序列级策略优化、off-policy 修正、分布式实现等问题时，应以对应方法的原始论文、官方代码及具体版本为准。
- 网站的「原论文与资料」板块提供进一步阅读入口。发现内容问题，欢迎提出 Issue。

---

<div align="center">

**Learn the fundamentals. Understand the systems. Explain the trade-offs.**

[开始刷题](https://seanyuzhao.github.io/llm-interview-lab/) · [查看源码](https://github.com/seanyuzhao/llm-interview-lab)

<sub>LLM Interview Lab · 2026 Edition</sub>

</div>

