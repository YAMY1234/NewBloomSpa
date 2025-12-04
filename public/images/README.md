# 图片文件夹使用说明

## 📂 文件夹结构建议

```
public/images/
├── hero/              # 首页大图
│   ├── home-hero.jpg
│   ├── services-hero.jpg
│   ├── about-hero.jpg
│   ├── booking-hero.jpg
│   └── contact-hero.jpg
├── services/          # 服务图片
│   ├── massage.jpg
│   ├── facial.jpg
│   └── body-treatment.jpg
└── team/              # 团队成员照片
    ├── member-1.jpg
    ├── member-2.jpg
    └── member-3.jpg
```

## 🎨 推荐图片规格

### Hero 背景图
- **尺寸**: 1920x1080px 或更大
- **格式**: JPG (更小的文件大小)
- **主题**: Spa 环境、按摩场景、舒缓的自然场景

### 服务卡片图
- **尺寸**: 800x600px
- **格式**: JPG 或 WebP
- **主题**: 相应的服务场景

### 团队照片
- **尺寸**: 600x600px (正方形)
- **格式**: JPG
- **主题**: 专业的人物肖像

## 🔧 如何在代码中使用

将图片放入此文件夹后，在代码中这样引用：

```tsx
// 方式 1: 直接使用路径
<div className="bg-[url('/images/hero/home-hero.jpg')]" />

// 方式 2: 使用 Next.js Image 组件（推荐）
import Image from 'next/image'
<Image src="/images/hero/home-hero.jpg" alt="描述" width={1920} height={1080} />
```

## 📍 当前使用背景图的位置

1. **首页** (`app/page.tsx`): Hero section 背景
2. **服务页面** (`app/services/page.tsx`): Hero section 背景
3. **关于我们** (`app/about/page.tsx`): Hero section 背景
4. **预约页面** (`app/booking/page.tsx`): Hero section 背景
5. **联系我们** (`app/contact/page.tsx`): Hero section 背景

## 💡 提示

- 优化图片大小以提高加载速度
- 使用 WebP 格式可以减小文件大小
- 使用在线工具如 TinyPNG 压缩图片

