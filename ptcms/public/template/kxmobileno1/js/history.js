/** PTNovelSearch-v4.1.2 LPPL License By http://www.ptcms.com/ */
 ;var loading=null;$(".pt-ellipsis-white").click(function(){var t,a=$(this).parents(".pt-stick-item").data("is-mark");t=a?"移除书架":"加入书架",$(".pt-mask-mark-bottom .pt-mark").text(t),$(".pt-mask-mark").show().data("novel-id",$(this).parents(".pt-stick-item").data("novel-id")).data("chapter-id",$(this).parents(".pt-stick-item").data("chapter-id")).data("is-mark",a),$(".pt-tabbar").hide()}),$(".pt-mask-mark-shade").click(function(){$(".pt-mask-mark").hide(),$(".pt-tabbar").show()}),$(".pt-mark").click(function(){var t=$(this),a=t.parents(".pt-mask-mark").data("novel-id"),e=t.parents(".pt-mask-mark").data("chapter-id"),n=t.parents(".pt-mask-mark").data("is-mark");$.ajax(n?__DEL_MARK:__ADD_MARK,{type:"post",dataType:"json",data:{novelid:a,chapterid:e},beforeSend:function(){null==loading&&(loading=layer.open({type:2}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){t.code?layer.open({content:t.msg,skin:"msg",time:2,end:function(){t.data.redirect&&(window.location.href=t.data.redirect)}}):(n?$(".pt-stick-item[data-novel-id="+a+"]").prependTo(".pt-read .pt-stick-cont").data("is-mark",0):$(".pt-read .pt-stick-item[data-novel-id="+a+"]").prependTo(".pt-stick-cont").data("is-mark",1),$(".pt-mask-mark").hide(),$(".pt-tabbar").show(),layer.open({content:"操作成功！",skin:"msg",time:2}))},error:function(){layer.open({content:"操作失败，请刷新页面后重试！",skin:"msg",time:2})}})}),$(".pt-history-remove").click(function(){var t=$(this),a=t.parents(".pt-mask-mark").data("novel-id");$.ajax(__REMOVE_HISTORY,{type:"post",dataType:"json",data:{novelid:a},beforeSend:function(){null==loading&&(loading=layer.open({type:2}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){t.code?layer.open({content:t.msg,skin:"msg",time:2,end:function(){t.data.redirect&&(window.location.href=t.data.redirect)}}):($(".pt-stick-item[data-novel-id="+a+"]").remove(),$(".pt-mask-mark").hide(),$(".pt-tabbar").show(),layer.open({content:"操作成功！",skin:"msg",time:2}))},error:function(){layer.open({content:"操作失败，请刷新页面后重试！",skin:"msg",time:2})}})}),$(".pt-history-clear").click(function(){layer.open({content:"您确定要清除阅读历史吗？",btn:["确定","取消"],yes:function(t){$.ajax(__CLEAR_HISTORY,{type:"post",dataType:"json",beforeSend:function(){null==loading&&(loading=layer.open({type:2}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){t.code?layer.open({content:t.msg,skin:"msg",time:2,end:function(){t.data.redirect&&(window.location.href=t.data.redirect)}}):($(".pt-stick-item").remove(),$(".pt-mask-mark").hide(),$(".pt-tabbar").show(),layer.open({content:"操作成功！",skin:"msg",time:2}))},error:function(){layer.open({content:"操作失败，请刷新页面后重试！",skin:"msg",time:2})}}),layer.close(t)}})}),$(".pt-stick-item img").click(function(){$(this).data("url")&&(location.href=$(this).data("url"))});