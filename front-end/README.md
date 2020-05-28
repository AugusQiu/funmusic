## 前端技术要点
* Vue-cli构建项目的时候，集成了typescript作为类型检查
* 使用normalize.css消除浏览器之间的样式差异
* element-ui的图标太少，使用阿里的iconfont库，并生成连接 cdn导入
## 项目优化
* 借助babel插件实现element-ui组件的按需引入，路由懒加载

## Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn electron:serve
```
### Compiles and minifies for production
```
yarn electron:build
```
