/** PTNovelSearch-v4.1.2 LPPL License By http://www.ptcms.com/ */
 ;var loading=null;$(".comment-btn-up,.comment-btn-down").click(function(){var e=$(this);return e.hasClass("active")||e.parent().hasClass("disable")?(layer.msg("操作失败，您已经评价过了！"),!1):void $.ajax(__RATING_COMMENT,{type:"post",dataType:"json",data:{comment_id:e.parents("li").data("comment-id"),type:__TYPE,type_id:__TYPE_ID,action:e.hasClass("comment-btn-down")?"bad":"good"},beforeSend:function(){null==loading&&(loading=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(a){a.code?layer.alert(a.msg,{icon:2},function(e){a.data.redirect?window.location.href=a.data.redirect:layer.close(e)}):(e.addClass("active"),e.parent().addClass("disable"),e.find(".number").text(parseInt(e.find(".number").text())+1),layer.msg("操作成功"))},error:function(){layer.alert("操作失败，请刷新页面后重试！",{icon:2})}})}),$(".addcomment button").click(function(){$.ajax(__ADD_COMMENT,{type:"post",dataType:"json",data:{type:__TYPE,type_id:__TYPE_ID,content:$(this).siblings("textarea").val()},beforeSend:function(){null==loading&&(loading=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(e){e.code?layer.alert(e.msg,{icon:2},function(a){e.data.redirect?window.location.href=e.data.redirect:layer.close(a)}):(layer.msg("评论成功"),window.location.reload())},error:function(){layer.alert("评论失败，请刷新页面后重试！",{icon:2})}})}),$(".addreply button").click(function(){$.ajax(__REPLY_COMMENT,{type:"post",dataType:"json",data:{type:__TYPE,type_id:__TYPE_ID,comment_id:__COMMENT_ID,content:$(this).siblings("textarea").val()},beforeSend:function(){null==loading&&(loading=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(e){e.code?layer.alert(e.msg,{icon:2},function(a){e.data.redirect?window.location.href=e.data.redirect:layer.close(a)}):layer.msg("回复成功",{},function(){window.location.reload()})},error:function(){layer.alert("评论失败，请刷新页面后重试！",{icon:2})}})}),$(".addcomment textarea").keyup(function(e){e.ctrlKey&&13==e.keyCode&&$(".addcomment button").click()}),$(".addreply textarea").keyup(function(e){e.ctrlKey&&13==e.keyCode&&$(".addreply button").click()});