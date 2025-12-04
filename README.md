# NewBloom Spa 官方网站

一个现代化、优雅的美容按摩 Spa 网站，使用 Next.js 14、Tailwind CSS 和 Framer Motion 构建。

## ✨ 特性

- 🎨 **现代化设计**：优雅的 UI/UX 设计，完美展现 Spa 品牌形象
- 📱 **响应式布局**：完美支持桌面、平板和移动设备
- ⚡ **性能优化**：基于 Next.js 14 的静态导出，加载速度极快
- 🎭 **流畅动画**：使用 Framer Motion 打造丝滑的用户体验
- 🌐 **多语言支持**：完整的中英文切换功能，语言偏好自动保存
- 🔍 **SEO 友好**：优化的元数据和语义化 HTML
- 📅 **在线预约**：集成 Square Appointments 预约系统
- 🎯 **零成本部署**：可部署到 Vercel、Netlify 等免费平台

## 📋 页面结构

- **首页** (`/`)：精美的 Hero Banner、服务亮点、特色服务展示
- **服务页面** (`/services`)：详细的服务项目分类和介绍
- **关于我们** (`/about`)：品牌故事、团队介绍、价值观
- **在线预约** (`/booking`)：集成 Square Appointments 预约系统
- **联系我们** (`/contact`)：联系方式、地图、留言表单

## 🚀 快速开始

### 前置要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

\`\`\`bash
npm install
# 或
yarn install
\`\`\`

### 本地开发

\`\`\`bash
npm run dev
# 或
yarn dev
\`\`\`

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

\`\`\`bash
npm run build
# 或
yarn build
\`\`\`

构建完成后，静态文件会输出到 `out` 目录。

### 本地预览生产版本

\`\`\`bash
npm start
# 或
yarn start
\`\`\`

## 🎨 自定义配置

### 1. 语言切换

网站默认显示英文。用户可以通过导航栏右上角的语言切换按钮在中英文之间切换。语言偏好会自动保存在浏览器中。

#### 添加新语言

编辑 `data/translations.ts` 文件，按照现有格式添加新语言的翻译：

\`\`\`typescript
export const translations = {
  en: { /* 英文翻译 */ },
  zh: { /* 中文翻译 */ },
  // 添加新语言
  es: { /* 西班牙语翻译 */ },
}
\`\`\`

然后在 `contexts/LanguageContext.tsx` 中更新语言类型：

\`\`\`typescript
type Language = "en" | "zh" | "es";
\`\`\`

### 2. 修改颜色主题

编辑 `tailwind.config.ts` 文件中的颜色配置：

\`\`\`typescript
colors: {
  primary: {
    // 修改主色调
  },
  sage: {
    // 修改辅助色
  },
}
\`\`\`

### 3. 配置 Square Appointments

在 `app/booking/page.tsx` 中修改预约链接：

\`\`\`typescript
const SQUARE_APPOINTMENTS_URL = "您的 Square Appointments 链接";
\`\`\`

### 4. 更新联系信息

在以下文件中更新您的实际联系信息：

- `components/Footer.tsx`
- `app/contact/page.tsx`

### 5. 修改服务内容

在 `data/translations.ts` 中修改服务项目、价格和描述（同时支持中英文）。

### 6. 更新 SEO 信息

在 `app/layout.tsx` 中修改网站元数据：

\`\`\`typescript
export const metadata: Metadata = {
  title: "您的网站标题",
  description: "您的网站描述",
  // ...
};
\`\`\`

### 7. 添加 Google Maps

在 `app/contact/page.tsx` 中替换 Google Maps 嵌入代码为您的实际地址。

## 🌐 部署到 Vercel（推荐）

### 方式一：通过 Vercel CLI

1. 安装 Vercel CLI：
\`\`\`bash
npm install -g vercel
\`\`\`

2. 登录并部署：
\`\`\`bash
vercel login
vercel
\`\`\`

### 方式二：通过 GitHub

1. 将代码推送到 GitHub 仓库
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "Import Project"
4. 选择您的 GitHub 仓库
5. Vercel 会自动检测 Next.js 项目并部署

### 自定义域名

在 Vercel 项目设置中添加您的自定义域名。

## 📦 部署到其他平台

### Netlify

1. 将代码推送到 GitHub
2. 在 Netlify 中导入项目
3. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `out`

### GitHub Pages

1. 修改 `next.config.js`，添加 `basePath`：
\`\`\`javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  // ...
}
\`\`\`

2. 构建并部署：
\`\`\`bash
npm run build
# 将 out 目录推送到 gh-pages 分支
\`\`\`

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **语言**: TypeScript
- **字体**: Google Fonts (Inter, Playfair Display)

## 📂 项目结构

\`\`\`
NewBloomSpa/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 首页
│   ├── services/          # 服务页面
│   ├── about/             # 关于我们
│   ├── booking/           # 预约页面
│   ├── contact/           # 联系我们
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/            # 可复用组件
│   ├── Navbar.tsx        # 导航栏（含语言切换）
│   └── Footer.tsx        # 页脚
├── contexts/              # React Context
│   └── LanguageContext.tsx # 语言管理
├── data/                  # 数据文件
│   └── translations.ts    # 多语言翻译
├── public/               # 静态资源
├── tailwind.config.ts    # Tailwind 配置
├── next.config.js        # Next.js 配置
└── package.json          # 项目依赖
\`\`\`

## 🎯 性能优化

- ✅ 静态导出，无需服务器
- ✅ 图片懒加载
- ✅ 代码分割
- ✅ CSS 按需加载
- ✅ 字体优化
- ✅ SEO 优化

## 📝 TODO 清单

### 上线前必做

- [ ] 替换 Square Appointments 链接为实际链接
- [ ] 更新所有联系信息（地址、电话、邮箱）
- [ ] 添加实际的 Google Maps 地址
- [ ] 替换示例图片为实际照片
- [ ] 更新服务项目和价格
- [ ] 测试所有链接和表单
- [ ] 设置 Google Analytics（可选）
- [ ] 配置自定义域名

### 可选增强功能

- [x] 实现多语言支持（中英文切换）
- [ ] 添加更多语言（西班牙语、法语等）
- [ ] 添加会员系统
- [ ] 集成在线支付
- [ ] 添加博客功能
- [ ] 添加客户评价系统
- [ ] 集成社交媒体分享

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 💬 支持

如有问题，请联系：
- Email: info@newbloomspa.com
- 网站: [您的网站地址]

---

**祝您使用愉快！✨**

