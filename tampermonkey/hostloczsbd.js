// ==UserScript==
// @name         hostloc zsbd
// @namespace    https://www.zhiqiang.name
// @version      0.4.2
// @description  HostLoc 字数补丁，防折叠!
// @author       webmaster@zhiqiang.name
// @match        https://www.hostloc.com/thread-*
// @match        https://www.hostloc.com/forum.php?mod=viewthread*
// @match        https://hostloc.com/forum.php?mod=viewthread*
// @match        https://hostloc.com/thread-*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var idioms = ["错的不是我， 错的是世界。 -- [School day]",
        "生活原本沉闷，但跑起来就会有风。 --[北省]",
        "一只飞鸟以零点三倍马赫的速度划过天空，留下两道白色的翼痕。",
        "真正让我难受的，大概是因为让你看到如此狼狈的自己。",
        "那双紧握不放的手……抓住的是希望……亦或是绝望……",
        "和平视窗计划只是个美丽的童话，竞赛代替不了战争，就像葡萄酒代替不了鲜血。",
        "明明只是活着，哀伤却无处不在…",
        "不忘初心，努力前行",
        "如果我是那雨滴的话，那么，我能够像把不曾交汇的天空与大地连接起来那样，把某人的心串联起来吗？",
        "不是别人，是我，承认了你的价值。",
        "我一直都在你身边 ，一直都在。",
        "故事开始便不承认普通",
        "mjj专用紫薯布丁",
        "那挺骚的，紫薯布丁",
        "这个世上有很多事是解释不通的，比如突然的失落，莫名其妙的孤独，没有由来的落寞，以及突然离开的你。",
        "我哪知道啊，紫薯布丁",
        "我怎么知道啊，你问楼下吧",
        "你才知道啊，紫薯布丁",
        "不好意思，没有 哈哈",
        "我觉得可以，你觉得呢?",
        "那确实太难受了哦",
        "那就有点神奇了 哈哈",
        "你消失了我都不会消失",
        "应该是可以的，你觉得呢?",
        "不错，楼下收了吧",
        "我觉得还行，各位觉得呢?"];

    function addIdioms() {
        var text=document.getElementById("fastpostmessage");
        if (text.value.length<16) {
            text.value += "\n\n/**\n * "+idioms[Math.floor(Math.random()*idioms.length)] + "\n *\n *Link https://greasyfork.org/zh-CN/scripts/396933-hostloc-zsbd\n */";
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