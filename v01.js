// ==UserScript==
// @name         Floating control
// @namespace    https://jingfelix.github.io/
// @version      0.1
// @description  try to take over the world!
// @author       Felix Jing
// @include        *
// @icon         none
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    // Your code here...
    // 增加悬浮控件?
    var body = document.querySelector("body");
    var controlButton = document.createElement("div");
    controlButton.id = 'drag';
    controlButton.style = "position: fixed;right:30px;bottom:60px;height: 30px;border-radius: 15px;background-color: #0f659e;display:flex;flex-direction:row; width:fit-content;";
    // 添加几个不同的按钮
    // 分屏 全屏 查词？
    // 实现自由拖动和吸附
    var funcButton = {
        init: function () {
            let object = document.createElement("div");
            object.style = "width:22px; height:22px;background-color:#87CEFA;border-radius:11px;margin:4px 2px 4px 2px;";
            return object;
        }
    }
    var splitButton = funcButton.init();
    var fullscrButton = funcButton.init();
    var showButton = funcButton.init();
    splitButton.onclick = function () {
        let openUrl = prompt('THE URL YOU WANT(INCLUDING HTTP/HTTPS)');
        document.write(
            "<html><head></head><frameset cols='50%25,*'><frame src=" +
            openUrl +
            "><frame src=" +
            location.href +
            "></frameset ></html>"
        );
    };

    controlButton.appendChild(splitButton);
    controlButton.appendChild(fullscrButton);
    controlButton.appendChild(showButton);

    body.appendChild(controlButton);

})();
