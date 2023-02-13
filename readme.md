一、项目介绍

## 1.1 概述

土拨鼠是一款轻量级的 PaaS 巡检应用，这是前端代码仓库，使用 acro design(vue3版) 开发。
项目更多详细介绍：https://github.com/lusson-luo/marmot-back

## 1.2 架构设计

略

## 1.3 配置说明

### 1.3.1 系统配置

> 系统配置定义了代理后端服务地址，eslint；
> 代码配置文件位于: config/vite.config.*.ts

### 1.3.2 框架配置

> 框架配置定义了主题，颜色，展示风格等；
> 代码配置文件位于: src/config/settings.json

### 1.3.3 环境配置

> 环境配置定义了前端启动端口
> 代码配置文件位于: .env.*

### 1.4 部署启动说明

1. 前端启动
```
yarn run dev
```

2. 访问
http://localhost:5173/
账户: admin
密码: admin

> 单独启动前端项目，可以打开mock开关模拟后端接口
> mock开关地址，src/views/inspection/all/mock.ts(巡检接口),src/mock/user.ts(登录接口)

# 二、 代码结构

## 2.1 项目框架

### 2.1.1 总体项目结构

> 采用 acro design pro 标准项目结构

项目目录
```
├── README.md
├── package.json
├── index.html
├── src
│   ├── api  # 请求接口
│   ├── assets  # 静态资源
│          └── style 全局样式
│   ├── components  # 通用业务组件
│   ├── config  # 全局配置(包含echarts主题)
│          └── settings.json  # 配置文件
│   ├── directives # 指令集（如需，可自行补充）
│   ├── filters # 过滤器（如需，可自行补充）
│   ├── hooks # 全局hooks
│   ├── layout  # 布局
│   ├── locale  # 国际化语言包
│   ├── mock  # 模拟数据
│   ├── views  # 页面模板
│   ├── router # 路由配置
│   ├── store  # 状态管理中心
│   ├── types  # Typescript 类型
│   └── utils  # 工具库
│   └── App.vue  # 视图入口
│   └── main.ts  # 入口文件
└── tsconfig.json
```

## 2.2 业务封装

### 2.2.1 登录、鉴权

- src/views/login/: 提供登录页面和逻辑
- src/api/interceptor.ts: 提供拦截器鉴权逻辑

### 2.2.2 巡检

- src/views/inspection/*: 提供巡检页面和逻辑