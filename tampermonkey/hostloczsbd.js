// ==UserScript==
// @name         hostloc zsbd
// @namespace    https://www.zhiqiang.name
// @version      0.6.0
// @description  HostLoc 隔壁等DZ论坛自动签名档 字数补丁，防折叠!PS:默认签名档，可自行修改变量L为20切换为仅防折叠
// @author       webmaster@zhiqiang.name
// @match        https://www.hostloc.com/thread-*
// @match        https://www.hostloc.com/forum.php?mod=viewthread*
// @match        https://hostloc.com/forum.php?mod=viewthread*
// @match        https://hostloc.com/thread-*
// @match        http://www.gebi1.com/forum.php?mod=viewthread*
// @match        http://www.gebi1.com/thread-*
// @match        http://www.rosabc.com/forum.php?mod=viewthread*
// @match        http://www.rosabc.com/thread-*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var l = 200;//原始内容低于该长度就自动签名
    var idioms = ["∮⊱⊱⊱      那双紧握不放的手……抓住的是希望……亦或是绝望……    ⊰⊰⊰∮",
        "错的不是我， 错的是世界。 -- [School day]",
        "抛去所谓的敬畏之心，你会重新认知这个世界。",
        "生活原本沉闷，但跑起来就会有风。 --[北省]",
        "一只飞鸟以零点三马赫的速度划过天空，留下两道白色的翼痕。",
        "真正让我难受的，大概是因为让你看到如此狼狈的自己",
        "那双紧握不放的手……抓住的是希望……亦或是绝望",
        "和平视窗计划只是个美丽的童话，竞赛代替不了战争，就像葡萄酒代替不了鲜血",
        "明明只是活着，哀伤却无处不在",
        "不忘初心，努力前行",
        "如果我是那雨滴的话，那么\n * 我能够像把不曾交汇的天空与大地连接起来那样\n * 把某人的心串联起来吗",
        "不是别人，是我，承认了你的价值",
        "我一直都在你身边 ，一直都在",
        "故事开始便不承认普通",
        "我坚信，人应该有力量，揪着自己的头发把自己从泥地里拔起来。",
        "地狱太冷，我来殉你。  —— 二哈和他的白猫师尊",
        "谎言不一定是谎言，被发现的谎言，才算是谎言。——《秋之回忆》",
        "这个世上有很多事是解释不通的\n * 比如突然的失落\n * 莫名其妙的孤独\n * 没有由来的落寞\n * 以及突然离开的你",
        "他突然开始有点喜欢这个看似严苛无趣、却偶尔能给人惊喜的世界了\n * 因为面前这个他特别喜欢的人\n * 这大概是他有生以来最大程度的爱屋及乌。——《黑天》",
        "有些坚持，经不起一点点希望\n * 哪怕是一点光亮，也会让人陷入痛苦。——《撒野》",
        "人死后会成为什么?夜空中的一座孤岛。——《一封孤岛的信》"];

    function addIdioms() {
        var text=document.getElementById("fastpostmessage");
        if (text.value.length<l) {
            text.value += "\n\n\n\n/**\n * "+idioms[Math.floor(Math.random()*idioms.length)] + "\n *\n * Link https://greasyfork.org/zh-CN/scripts/396933-hostloc-zsbd\n */";
        }
    }
    document.getElementById("fastpostmessage").onkeydown=function(event) {
        if (event.ctrlKey && event.keyCode == 13 || event.altKey && event.keyCode == 83) {
            addIdioms();
            seditor_ctlent(event, 'fastpostvalidate($(\'fastpostform\'))');
        }
    };
    document.getElementById("fastpostsubmit").addEventListener("click", addIdioms);
})();