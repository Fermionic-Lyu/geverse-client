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

### 目前需要解决的问题

1、邮箱、手机注册需要填写生日，那部分功能需要补全(birth.vue组件);

2、首页live模块、topic模块需要补全;

3、antdv的dropdown因滚动条问题导致定位不准需要解决;
