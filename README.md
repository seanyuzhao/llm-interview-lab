# LLM Interview Lab · 大模型后训练面试知识库（公开版）

**519 道面试题 + 完整答案 + 常见追问 + 12 张公式卡片**。覆盖深度学习数学、经典视觉、Transformer、LLM 预训练与 Tokenizer、MLLM（图像/视频/音频）、视觉后训练、RLHF/DPO/GRPO/DAPO/GSPO、Agentic RL、OPD、多教师蒸馏、分布式训练、评测与基模技术报告。

## 访问地址

本仓库公开、完成 Pages 配置并首次部署后，网页地址为：

**https://seanyuzhao.github.io/llm-interview-lab/**

> 注意：这是预期网址；只有部署成功才可访问。未配置时不会自动上线。

## 一分钟开启 GitHub Pages（免费）

1. 在 `seanyuzhao` 账号下创建 **Public** 仓库 `llm-interview-lab`，上传此项目的全部文件，包含 `index.html`、`assets/`、`data/` 和 `.github/workflows/`。
2. 进入 **Settings → Pages → Build and deployment**，把 Source 选为 **GitHub Actions**。
3. Push 到 `main` 会触发 `.github/workflows/deploy-pages.yml`。在 **Actions** 查看执行结果，在 **Settings → Pages** 查看正式网址。
4. 如需使用 GitHub Pages 的 Deploy from a branch 模式，也可设置 `main` / `/(root)`；本项目本身无需编译。

## 开发者本地启动

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

打开 http://127.0.0.1:8765/。

## 数据与隐私

- **代码和题库公开**；任何人都可阅读、Fork 和下载。
- **学习记录不会自动公开**：已掌握、收藏、待复习、个人备注保存在当前浏览器 `localStorage`，不在 GitHub 仓库内。
- 目前**不支持自动跨设备同步**。换设备前先在网页中导出学习进度 JSON，然后在新设备导入。
- 浏览器清除站点数据可能丢失记录。请定期备份，尤其不要把进度 JSON 上传到公开仓库。

## 维护与验收

```bash
python3 scripts/verify_site.py
node --check assets/app.js
node --check data/questions.js
node --check data/formulas.js
```

- `data/questions.js`：519 道题的结构化源数据（含原有 150 题）
- `notes/面试题库_519问_完整答案.md`：适合 Obsidian / Typora / GitHub 阅读
- `assets/app.js`、`assets/style.css`：离线站点功能和设计
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自动部署
- `.github/workflows/verify.yml`：数据与 JavaScript 检查

## 准确性说明

这是面试备考资料，不等于所有官方训练配方。涉及算法变体、模型版本、采样/损失归一化、性能指标的题目，请以对应原始论文、官方技术报告和具体代码版本为准。2026 年 11 月整理。
