// ==UserScript==
// @name            Discuz checkin
// @license         GPL 3.0
// @namespace       https://www.zhiqiang.name
// @icon            https://www.zhiqiang.name/favicon.ico
// @author          Blood.Cold
// @version         0.3.0
// @description     在HOSTLOC等论坛顶部增加一个按钮、点击以后自动访问本站15位网友的空间实现刷分。。
// @include         http://www.hostloc.com/*
// @include         https://hostloc.com/*
// @include         https://www.hostloc.com/*
// @include         https://bbs.hkrscoc.com/*
// @include         http://www.gebi1.com/*
// @include         http://www.rosabc.com/*
// @include         http://bbs.nas66.com/*
// @include         none
// @run-at          document-end
// ==/UserScript==


var i=0;
var button;
function visit(){
    if(i>=20){
        return;
    }
    var xmlhttp=new XMLHttpRequest();
    var url="/space-uid-"+(i+28939)+".html";
    console.log('visit',url);
    i++;
    xmlhttp.open("GET",url,true); //第三个参数是同步异步,主线程只能异步
    xmlhttp.onreadystatechange=visit;
    xmlhttp.send();
}


//time delay
var interval=500;
function visit2() {
    if(i>=15){
        interval_id=window.clearInterval(interval_id);
        return;
    }
    var xmlhttp=new XMLHttpRequest();
    var url="/space-uid-"+i+".html";
    console.log('visit',url);
    i++;
    button.innerHTML=String((i*100./15).toFixed(0))+"%";
    xmlhttp.open("GET",url,true); //第三个参数是同步异步,主线程只能异步
    xmlhttp.send();
}
var interval_id;

(function() {
    'use strict';

    var target=document.getElementById("extcreditmenu");
    if(!target){
        return;
    }
    button=document.createElement('button');
    button.innerHTML='访问空间';
    button.onclick=(e)=>{
        //visit();
        interval_id= window.setInterval(visit2,interval);
    };
    target.parentElement.prepend(button);

})();