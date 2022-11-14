# 说明

一个 Chrome 扩展，用于关闭网站自动弹出的登陆窗口。未完善测试，自用尚可。

支持网站：
  - 知乎
  - csdn

## 备注

这个扩展目前执行脚本的方式叫[content_scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)，这种方式运行的脚本可通过 DOM 接口读取、修改页面内容，脚本的执行时机默认是 window 的 `load` 事件触发以后，即脚本会在整个页面及外部的样式表、图片都加载完成以后自动执行。

[content_scripts] 的选项在 `manifest.json` 中配置，可配哪些选项参考官方文档。

## 参考文档

- [谷歌浏览器扩展开发的概览](https://developer.chrome.com/docs/extensions/mv3/devguide/)

- 插件在本地使用的方式：[本地加载未打包的扩展](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)，目前采用这种方式自用。

- [将插件发布到 Chrome Store 的教程](https://developer.chrome.com/docs/webstore/publish/)