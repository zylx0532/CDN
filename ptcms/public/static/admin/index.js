/** PTNovelSearch-v4.1.2 LPPL License By http://www.ptcms.com/ */
 ;layui.extend({setter:"config",admin:"lib/admin",view:"lib/view",editor:"../lib/editor",select2:"../lib/select2"}).define(["setter","admin"],function(e){var a=layui.setter,t=layui.element,n=layui.admin,i=n.tabsPage,l=layui.view,r=function(){var e=layui.router(),o=e.path,y=n.correctRouter(e.path.join("/"));o.length||(o=[""]),""===o[o.length-1]&&(o[o.length-1]=a.entry);var h=function(e){r.haveInit&&d(".layui-layer").each(function(){var e=d(this),a=e.attr("times");e.hasClass("layui-layim")||layer.close(a)}),r.haveInit=!0,d(s).scrollTop(0),delete i.type};return"tab"===i.type&&("/"!==y||"/"===y&&n.tabsBody().html())?(n.tabsBodyChange(i.index),h(i.type)):(l().render(o.join("/")).then(function(l){var r,o=d("#LAY_app_tabsheader>li");o.each(function(e){var a=d(this),t=a.attr("lay-id");t===y&&(r=!0,i.index=e)}),a.pageTabs&&"/"!==y&&(r||(d(s).append('<div class="layadmin-tabsbody-item layui-show"></div>'),i.index=o.length,t.tabAdd(c,{title:"<span>"+(l.title||"新标签页")+"</span>",id:y,attr:e.href}))),this.container=n.tabsBody(i.index),a.pageTabs||this.container.scrollTop(0),t.tabChange(c,y),n.tabsBodyChange(i.index)}).done(function(){layui.use("common",layui.cache.callback.common),u.on("resize",layui.data.resize),t.render("breadcrumb","breadcrumb"),n.tabsBody(i.index).on("scroll",function(){var e=d(this),a=d(".layui-laydate"),t=d(".layui-layer")[0];a[0]&&(a.each(function(){var e=d(this);e.hasClass("layui-laydate-static")||e.remove()}),e.find("input").blur()),t&&layer.closeAll("tips")})}),void h())},o=function(e){var t,i=layui.router(),o=l(a.container),s=n.correctRouter(i.path.join("/"));if(layui.each(a.indPage,function(e,a){if(s===a)return t=!0}),layui.config({base:a.base+"controller/"}),t||"/user/login"===s)o.render(i.path.join("/")).done(function(){n.pageType="alone"});else{if(a.interceptor){var c=layui.data(a.tableName);if(!c[a.request.tokenName])return location.hash="/user/login/redirect="+encodeURIComponent(s)}"console"===n.pageType?r():o.render("layout").done(function(){r(),layui.element.render(),n.screen()<2&&n.sideFlexible(),n.pageType="console"})}},s="#LAY_app_body",c="layadmin-layout-tabs",d=layui.$,u=d(window);layui.link(a.base+"style/admin.css?v="+(n.v+"-1"),function(){o()},"layuiAdmin"),window.onhashchange=function(){o(),layui.event.call(this,a.MOD_NAME,"hash({*})",layui.router())},layui.each(a.extend,function(e,t){var n={};n[t]="{/}"+a.base+"lib/extend/"+t,layui.extend(n)}),e("index",{render:r})});var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?c635fc046dd6da64e3e033b32991b5ce";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}();