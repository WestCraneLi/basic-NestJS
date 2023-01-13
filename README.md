## 介绍

Nest基础学习

## 安装

```bash
$ npm install
```

## 运行

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# hmr mode
$ npm run start:dev-hmr
```

## 注意
项目运行需要数据库的链接


## 详情
* api请求工具可以使用postman或者apifox，用来查看Post返回结果
* 数据库采用mysql，字符集```utf-8```,排序集```utf-general-ci```
  * ```vscode```配置```Database Client```可用来查看数据库情况；也可以使用```navicat```
* ```service```用来处理逻辑，可以把他看成处理数据库，控制层传递数据
* ```controller```用来获取页面传来的数据（get|post)，然后通过```body```或```query```或```param```处理数据，将参数传递给```service```
* ```entities```，实体可以一个数据表的类
* ```module```层，加载模块

## 参考
* [NestJS 快速入门教程](https://jspang.com/article/87)
* [NestJS中文文档](https://www.nestjs.com.cn/)


未完待续...