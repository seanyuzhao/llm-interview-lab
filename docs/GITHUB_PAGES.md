# GitHub Pages 免费公开部署

1. 使用 **seanyuzhao** GitHub 账号创建 `llm-interview-lab` **Public** 仓库。
2. 上传全部网站文件，确保 `index.html` 位于仓库根目录。
3. Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
4. Workflow `Deploy GitHub Pages` 会在推送 `main` 后运行；如果配置后没触发，可到 Actions 手动 Run workflow。
5. 地址预期为 https://seanyuzhao.github.io/llm-interview-lab/ 。

## 安全与记录

Pages 是公开的；源码和题库也公开。只有浏览器自己的学习标记、备注存放在 localStorage，网站没有服务器存储或登录。换设备请导出/导入进度 JSON，公开仓库不能用于上传私人进度。
