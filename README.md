# 香港麒麟科技有限公司官方博客

基于Hexo构建的企业博客，使用Bluelake主题，专注于抖音广告投放和海外企业进入中国市场的专业服务。

## 项目简介

**香港麒麟科技有限公司（HONG KONG KYLIN TECHNOLOGY LIMITED）** 成立于2024年3月1日（商业登记号：76259657），是一家注册于香港的私人股份有限公司。

我们专注于为 **海外企业** 提供进入中国大陆市场的 **抖音广告开户、投放及代运营** 服务。依托本地化经验与专业的广告团队，麒麟科技致力于帮助客户快速触达中国用户，打造强有力的品牌影响力。

## 技术栈

- **框架**: Hexo 7.0.0
- **主题**: Bluelake 主题
- **部署**: GitHub Pages + GitHub Actions
- **样式**: 响应式设计，支持亮色/暗色模式

## 快速开始

### 环境要求

- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
# 启动开发服务器
npm run server
# 或者
hexo server
```

访问 http://localhost:4000 查看博客

### 构建部署

```bash
# 清理缓存
npm run clean

# 生成静态文件
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 项目结构

```
.
├── .github/
│   └── workflows/       # GitHub Actions 配置
├── .gitignore           # Git 忽略文件
├── .gitmodules          # Git 子模块配置
├── _config.yml          # Hexo 主配置文件
├── package.json         # 项目依赖
├── README.md            # 项目说明
├── LICENSE              # 许可证
├── source/              # 源文件目录
│   ├── _posts/          # 博客文章
│   ├── about.md         # 关于我们
│   └── services.md      # 服务介绍
└── themes/              # 主题目录
    └── bluelake/        # Bluelake 主题
```

## 主要功能

### 🏠 单页式设计
- 响应式布局，适配各种设备
- 现代化的视觉设计
- 优化的用户体验

### 🎨 Bluelake 主题特色
- 现代化的蓝色主色调
- 支持亮色/暗色两种模式
- 内置丰富的组件和插件支持
- SEO 友好的结构设计

### 📝 博客系统
- 支持 Markdown 写作
- 文章分类和标签
- 代码高亮显示

### 🚀 自动部署
- GitHub Actions 自动构建
- 推送到 master 分支自动部署
- 支持 GitHub Pages

### 📱 联系方式
- Telegram 联系集成
- 符合用户偏好的联系方式

## 我们的服务

* **抖音广告开户** – 合规快捷的开户支持
* **广告投放与优化** – 精准定位，提升ROI
* **广告代运营** – 从创意到数据监控，全程托管

## 我们的优势

* 深入了解中国短视频与社交媒体生态
* 经验丰富的广告优化与运营团队
* 一站式跨境投放解决方案
* 服务专注于海外客户，解决本地化难题

## 联系我们

✈️ **Telegram**: [https://t.me/+85251400092](https://t.me/+85251400092)

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

*© 2024 香港麒麟科技有限公司 版权所有*

<!-- 更新: 修复GitHub Actions子模块配置 -->