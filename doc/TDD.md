# HairMatch AI 技术设计文档（TDD）

## 项目名称

HairMatch AI

AI实时发型试戴平台

---

# 技术栈

## 前端框架

Next.js 15

React 19

TypeScript

---

## UI

TailwindCSS

shadcn/ui

Lucide Icons

---

## 状态管理

Zustand

---

## 人脸识别

MediaPipe Face Mesh

用途：

* 人脸检测
* 头部姿态检测
* 面部关键点追踪

---

## 图形渲染

React Three Fiber

Three.js

用途：

* 发型渲染
* 实时位置同步

---

## 部署

Vercel

---

# 产品语言

默认语言：

简体中文

所有界面文本均使用简体中文。

禁止出现英文UI。

示例：

正确：

"选择发型"

错误：

"Select Hairstyle"

---

# 页面结构

## 首页

路由：

/

---

页面布局：

```text
┌─────────────────────────────┐
│ HairMatch AI Logo           │
├─────────────────────────────┤
│                             │
│       摄像头预览区          │
│                             │
├─────────────────────────────┤
│      发型选择面板           │
└─────────────────────────────┘
```

---

# 页面模块

## Header

内容：

HairMatch AI

副标题：

实时发型预览

---

# 摄像头区域

组件：

CameraPreview

功能：

* 打开摄像头
* 显示实时视频
* 显示发型覆盖层

尺寸：

桌面：

80vh

移动端：

60vh

---

# 男士发型面板

位置：

左侧

标题：

男士发型

默认显示：

* 寸头
* 美式渐变
* 碎盖
* 韩式中分
* 狼尾

布局：

垂直滚动

---

# 女士发型面板

位置：

右侧

标题：

女士发型

默认显示：

* 长直发
* 波浪卷
* 鲍伯头
* 空气刘海
* 锁骨发

布局：

垂直滚动

---

# 发色控制面板

位置：

底部

标题：

发色调整

内容：

预设颜色按钮：

* 黑色
* 深棕
* 浅棕
* 金色
* 银灰
* 蓝色
* 粉色

以及：

颜色选择器

---

# 截图按钮

按钮文字：

保存效果图

点击后：

下载PNG

---

# React组件结构

```text
App

├── Header

├── CameraPreview

│   ├── WebcamVideo
│   ├── FaceTracker
│   └── HairstyleOverlay

├── MaleHairPanel

├── FemaleHairPanel

├── ColorControlPanel

└── CaptureButton
```

---

# Zustand状态结构

```typescript
interface AppState {
  selectedHairStyle: string

  selectedColor: string

  cameraReady: boolean

  faceDetected: boolean

  setHairStyle: (id: string) => void

  setColor: (color: string) => void

  setCameraReady: (
    ready: boolean
  ) => void

  setFaceDetected: (
    detected: boolean
  ) => void
}
```

---

# 发型数据结构

```typescript
interface HairStyle {
  id: string

  name: string

  gender: "male" | "female"

  imageUrl: string

  scaleFactor: number

  offsetX: number

  offsetY: number
}
```

---

# 初始发型库

```typescript
const hairstyles = [
{
id:"buzz",
name:"寸头",
gender:"male"
},

{
id:"fade",
name:"美式渐变",
gender:"male"
},

{
id:"crop",
name:"碎盖",
gender:"male"
},

{
id:"middle",
name:"韩式中分",
gender:"male"
},

{
id:"wolf",
name:"狼尾",
gender:"male"
},

{
id:"long",
name:"长直发",
gender:"female"
},

{
id:"wave",
name:"波浪卷",
gender:"female"
},

{
id:"bob",
name:"鲍伯头",
gender:"female"
},

{
id:"bangs",
name:"空气刘海",
gender:"female"
},

{
id:"shoulder",
name:"锁骨发",
gender:"female"
}
]
```

---

# Face Mesh使用要求

必须使用：

MediaPipe Face Landmarker

检测：

* 面部中心点
* 左右脸宽
* 额头位置
* 头部旋转角度

输出：

```typescript
{
x:number
y:number
width:number
height:number
rotation:number
}
```

---

# 发型覆盖逻辑

发型位置：

```typescript
hairX = faceCenterX

hairY = foreheadY
```

发型缩放：

```typescript
hairScale =
faceWidth *
hairstyle.scaleFactor
```

发型旋转：

```typescript
hairRotation =
headRotation
```

---

# 截图逻辑

使用：

html2canvas

截图内容：

* 摄像头画面
* 发型图层

生成：

PNG

自动下载

文件名：

hairmatch-yyyy-mm-dd.png

---

# 项目目录结构

```text
src

├── app

│   ├── page.tsx

│   └── layout.tsx

├── components

│   ├── Header.tsx

│   ├── CameraPreview.tsx

│   ├── HairstyleOverlay.tsx

│   ├── MaleHairPanel.tsx

│   ├── FemaleHairPanel.tsx

│   ├── ColorControlPanel.tsx

│   └── CaptureButton.tsx

├── store

│   └── useStore.ts

├── hooks

│   ├── useCamera.ts

│   └── useFaceTracking.ts

├── data

│   └── hairstyles.ts

├── types

│   └── hairstyle.ts

└── utils

    └── screenshot.ts
```

---

# V1完成标准

满足以下条件即可发布：

□ 摄像头正常打开

□ 人脸识别成功

□ 发型能够自动跟随头部

□ 发型切换正常

□ 发色修改正常

□ 截图导出正常

□ 桌面端可用

□ 移动端可用

□ 全部界面为简体中文

达到以上标准即视为V1完成。
