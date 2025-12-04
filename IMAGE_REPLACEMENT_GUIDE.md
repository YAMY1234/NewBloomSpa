# 🖼️ 图片替换指南

## 当前使用背景图的位置

### 1. 首页 (`app/page.tsx`)
**第 77 行**
```tsx
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920')] bg-cover bg-center opacity-20" />
```
**替换为：**
```tsx
<div className="absolute inset-0 bg-[url('/images/hero/home-hero.jpg')] bg-cover bg-center opacity-20" />
```

---

### 2. 服务页面 (`app/services/page.tsx`)
**第 241 行**
```tsx
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920')] bg-cover bg-center opacity-20" />
```
**替换为：**
```tsx
<div className="absolute inset-0 bg-[url('/images/hero/services-hero.jpg')] bg-cover bg-center opacity-20" />
```

---

### 3. 关于我们页面 (`app/about/page.tsx`)
**第 58 行**
```tsx
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920')] bg-cover bg-center opacity-20" />
```
**替换为：**
```tsx
<div className="absolute inset-0 bg-[url('/images/hero/about-hero.jpg')] bg-cover bg-center opacity-20" />
```

---

### 4. 预约页面 (`app/booking/page.tsx`)
**第 20 行**
```tsx
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920')] bg-cover bg-center opacity-20" />
```
**替换为：**
```tsx
<div className="absolute inset-0 bg-[url('/images/hero/booking-hero.jpg')] bg-cover bg-center opacity-20" />
```

---

### 5. 联系我们页面 (`app/contact/page.tsx`)
**第 23 行**
```tsx
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920')] bg-cover bg-center opacity-20" />
```
**替换为：**
```tsx
<div className="absolute inset-0 bg-[url('/images/hero/contact-hero.jpg')] bg-cover bg-center opacity-20" />
```

---

## 📋 操作步骤

### 1. 准备图片
将您的图片放入 `public/images/` 文件夹：
```
public/images/hero/
├── home-hero.jpg       (首页背景)
├── services-hero.jpg   (服务页面背景)
├── about-hero.jpg      (关于我们背景)
├── booking-hero.jpg    (预约页面背景)
└── contact-hero.jpg    (联系页面背景)
```

### 2. 图片规格建议
- **尺寸**: 1920x1080px 或更大
- **格式**: JPG（文件更小）或 WebP（质量更好）
- **文件大小**: 建议压缩到 200KB 以下
- **主题**: Spa 环境、按摩场景、自然舒缓场景

### 3. 替换代码
按照上面的指南，在相应文件中搜索 Unsplash 链接并替换为本地路径。

### 4. 测试效果
```bash
npm run dev
```
访问各个页面查看效果。

---

## 💡 推荐的 Spa 图片主题

1. **首页**: 宁静的 Spa 环境、竹子、禅意石头
2. **服务页面**: 按摩场景、护理产品、舒适环境
3. **关于我们**: 温馨的团队照片、专业环境
4. **预约页面**: 日历、预约本、放松场景
5. **联系页面**: Spa 前台、欢迎区域

---

## 🔧 快速替换命令

如果您想要我帮您批量替换，只需告诉我您已经准备好了哪些图片！

