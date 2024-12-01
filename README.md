# Gverse client

An Electron application with Vue and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Project Setup

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
# 构建exe安装包
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

### Theme

主题样式变量定义全部都在src\renderer\src\assets\theme\theme.css中

### vue代码

代码都在src\renderer\src中，标准vue目录结构

### 已做内容

1、登录、注册(除生日选择外)的UI布局;
2、首页大体布局;

### 目前需要解决的问题

1、邮箱、手机注册需要填写生日，那部分UI需要补全(birth.vue组件);

2、首页live模块、topic模块需要补全;

3、antdv dropdown组件定位不准需要解决(怀疑和滚动条有关、可能也和布局方式有关);

4、所有页面、组件的逻辑都没写，包括登录注册等
