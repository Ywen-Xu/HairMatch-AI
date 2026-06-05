# HairMatch AI

AI 实时发型试戴平台

## 项目简介

HairMatch AI 是一个网络应用程序，允许用户使用网络摄像头实时预览不同的发型。该产品帮助用户在访问理发店或美发沙龙之前决定哪种发型适合他们。

## 技术栈

- **前端框架**: Next.js 15 + React 19
- **编程语言**: TypeScript
- **样式**: TailwindCSS
- **状态管理**: Zustand
- **部署**: Vercel

## 项目进度

### V1.0 功能清单

- [x] 项目初始化
- [x] 首页 UI 结构
- [ ] 摄像头集成
- [ ] 人脸识别
- [ ] 发型试戴
- [ ] 发色调整
- [ ] 截图导出

## 安���和运行

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

访问 http://localhost:3000

### 生产构建

```bash
npm run build
npm start
```

## 项目结构

```
src/
├── app/
│   ├── page.tsx           # 首页
│   └── layout.tsx         # 根布局
├── components/
│   ├── Header.tsx         # 顶部头部
│   ├── MaleHairPanel.tsx  # 男士发型面板
│   ├── CameraPreview.tsx  # 摄像头预览区
│   ├── FemaleHairPanel.tsx # 女士发型面板
│   └── ColorControlPanel.tsx # 发色控制面板
├── data/
│   └── hairstyles.ts      # 发型数据
├── store/
│   └── useStore.ts        # Zustand 状态管理
├── styles/
│   └── globals.css        # 全局样式
└── types/
    └── hairstyle.ts       # 发型类型定义
```

## 功能说明

### UI 布局

页面分为四个主要区域：

1. **顶部 Header**: 展示应用标题和副标题
2. **左侧面板**: 男士发型列表（可选择）
3. **中间区域**: 摄像头预览占位符
4. **右侧面板**: 女士发型列表（可选择）
5. **底部面板**: 发色控制栏，包含预设颜色按钮和自定义颜色选择器

### 状态管理

使用 Zustand 管理以下全局状态：

- `selectedHairStyle`: 当前选择的发型 ID
- `selectedColor`: 当前选择的发型颜色
- `cameraReady`: 摄像头是否就绪
- `faceDetected`: 是否检测到面部

## 发型列表

### 男士发型

- 寸头
- 美式渐变
- 碎盖
- 韩式中分
- 狼尾

### 女士发型

- 长直发
- 波浪卷
- 鲍伯头
- 空气刘海
- 锁骨发

## 预设发色

- 黑色
- 深棕
- 浅棕
- 金色
- 银灰
- 蓝色
- 粉色

## 下一步计划

第二步将实现：

- [ ] 摄像头访问权限请求
- [ ] 实时视频流显示
- [ ] MediaPipe 人脸识别集成
- [ ] 发型覆盖层实现
- [ ] 截图导出功能

## 许可证

MIT