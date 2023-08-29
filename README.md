# t

## 环境
```
node 14.15.0
```

## 第三方库版本介绍
[pdf.js](https://mozilla.github.io/pdf.js/) 版本: Stable (v2.14.305) 存放位置：src/libs/pdfjs

## Project setup
```
npm install
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 目录介绍
```
├── README.md
├── babel.config.js
├── jsconfig.json
├── mock // 接口数据 mock
│   ├── index.js
│   └── system.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public // 不经过 webpack 编译的静态文件
│   ├── favicon.ico
│   └── index.html
├── src // 源码
│   ├── App.vue
│   ├── api // 接口
│   │   └── ucenter
│   ├── assets // 经过 webpack 编译的静态文件
│   │   ├── images
│   │   ├── logo.png
│   │   └── styles
│   ├── components // 公用组件
│   ├── directive // vue 指令
│   │   └── index.js
│   ├── filter // vue 过滤器
│   │   └── index.js
│   ├── layout // 页面通用布局
│   ├── libs // 第三方库
│   │   └── pdfjs
│   ├── main.js
│   ├── router // 路由
│   │   └── index.js
│   ├── store // 数据状态管理
│   │   ├── getters.js
│   │   ├── index.js
│   │   └── modules
│   ├── utils // 通用函数方法
│   │   ├── echarts.js
│   │   ├── elementUi.js
│   │   ├── moment.js
│   │   ├── ol.js
│   │   ├── rem.js
│   │   ├── requestAdmin.js
│   │   └── validate
│   └── view // 页面组件
└── vue.config.js
```