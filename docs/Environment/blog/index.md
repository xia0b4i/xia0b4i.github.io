# 博客搭建过程

我这边是直接用的橘墨大佬的模板来搭建的，然后替换掉内容来写我自己的东西，[项目地址](https://github.com/Randark-JMT/Treasure-House)

直接clone下来以后本地启动下就可以了，具体的操作可以看[官方的手册](https://docusaurus.io/zh-CN/docs)

可以通过修改`sidebar_position: `来更改文件的顺序 01234依次排列

## 本地开发

本地直接在文件夹内命令行运行`yarn start`就可以在本地的localhost:3000端口看到本地的页面了

想要部署到github的话，首先要下载git  （自行百度）

然后按照以下步骤

1. 配置git 填写下自己的用户名，邮箱
2. 本地使用git生成ssh密钥对，并将公钥填写至github上
3. 本地使用`yarn build`构建网页
4. 使用vscode直接推送项目到`用户名.github.io`库内本地使用`yarn build`构建网页
5. git使用`GIT_USER='github用户名' yarn deploy`构建
6. 就可以在 用户名.github.io看到你的网页啦
