## trao-designer

基于 React 开发可视化拖拽，页面搭建，使用 tarojs 自带组件库，生成源码生成。主要取 tarojs 组件库支持的 H5 和微信小程序的交集进行属性编辑。

### 访问地址

[taro-designer](https://silence717.github.io/taro-designer)

### 技术栈

react + mobx + cloud-react + tarojs

### 目的

提高互动多端开发的效率，降低开发门槛，通过拖拉拽就可生成基本的页面 UI

### 使用

```bash
// clone code
http://gitlab.platdep.shuyun.com/fe/public/taro-designer.git
// 进入工程
cd taro-designer
// 安装依赖
yarn install
// 启动
yarn start
```

### 项目结构

```
build-utils  // webpack相关配置
    webpack.dev.js  // webpack development mode config
    webpack.prod.js  // wbepack production mode config

output // 生成源码目录
    index.less // 生成的css文件
    taro.jsx   // 生成的jsx文件
public  // 静态资源目录
    favicon.ico  // 网页图标
    index.html   // 静态页面
    index.js      // 展示网页入口js
scripts  // 项目脚本文件
    tpl  // 通过脚本生成新组件目录
    generate.js // 执行当前脚本生成　src/components/index.js 文件
    new.js // 执行当前脚本，在src/components 下新增加一个组件，模版为tpl下的文件
   
src // 源码目录
    components  // 可供拖拽的组件目录
    container // 页面容器
    utils  // 工具类
    style.less // css
    index.js // 项目主入口文件

.babelrc      // babel配置问考吗
.editorconfig // 编辑器配置
.eslintignore // 配置 eslint 忽略的文件
.eslintrc     // eslint校验规则配置
.gitignore    // 提交到git仓库需要忽略的文件
.prettierrc   // 格式化代码配置
.jsconfig     // 使得编辑器认识项目中配置的别名，可链接查找
README.MD     // 项目说明
server-config.js // node服务相关配置
taro-designer-server.js     // node服务
webpack.config.js // webpack基础配置
```

## 一些说明

#### 可进行拖拉拽的组件

##### 视图容器

视图容器 View，可滚动的视图容器 ScrollView，滑块视图容器 Swiper，滑块 SwiperItem

##### 基础内容

图标 Icon，文本 Text，进度条 Progress

##### 表单组件

按钮 Button，多选 Checkbox，表单 Form，输入框 Input，标签 Label，选择器 Picker，单选 Radio，滑动选择器 Slider，开关选择器 Switch，多行输入框 Textarea

##### 媒体组件

图片 Image

#### 组件可配置的属性说明

因为需要兼容多端，而 taro 每个组件 api 对平台的支持程度不一致，在当前项目中我们选取了兼容**微信小程序**和**h5**两个版本的属性可进行配置。

### 项目部署说明
node 服务，在项目下使用 pm2 启动 server.js，如果 node 端代码有改动，需要登录服务器重启。  
