## react-mobx-webpack-seed

### 技术栈
react + mobx + mobx-react + axios + webpack

### 目的
提供一个基础架子，克隆下来，安装依赖，即可开始开发业务。

### 使用
```bash
// clone code 
git clone https://github.com/silence717/react-mobx-webpack-seed.git
// 进入工程
cd react-mobx-webpack-seed
// 安装依赖
npm install
// 启动
npm start
```

### 项目结构
```
build-utils  // webpack相关配置
	config.js  // mock数据服务相关配置
	server.js   // mock数据服务
	webpack.dev.js  // webpack development mode config
	webpack.prod.js  // wbepack production mode config

demo  // app展示demo
dist  // 打包后的文件
mock  // mock数据目录
	index.js  // mock数据入库文件
	mock.js   // 需要mock的请求
src // 源码目录
	utils  // 工具集合
	index.js  // component主文件
	loader.js // 与后端api交互，处理数据为component直接可使用
	store.js  // 页面交互逻辑处理
	style.less // css
	user.js // 其他组件

.editorconfig // 编辑器配置
.eslintignore // 配置 eslint 忽略的文件
.eslintrc     // eslint校验规则配置
.gitignore    // 提交到git仓库需要忽略的文件
.prettierrc   // 格式化代码配置
README.MD
webpack.config.js // webpack基础配置
```

### TODO
1. router使用
2. 完善点的demo

## 参考文章

可视化页面编辑器的架构设计： https://juejin.im/post/6877372444613722119

如何实现H5可视化编辑器的实时预览和真机扫码预览功能：https://juejin.im/post/6876751431374929934


拖拽：https://github.com/react-dnd/react-dnd


nextjs + nest.js 构建页面可视化编辑器： https://github.com/fantasticit/ramiko

基于 React 的可视化编辑平台实践：https://juejin.im/post/6844904008855846926

json-schema ：https://json-schema.org/understanding-json-schema/index.html

css in js 方案 Glamor，渲染 HTML 的同时，也可以提取对应的 CSS

页面可视化搭建工具前生今世：https://zhuanlan.zhihu.com/p/37171897
