/** PTNovelSearch-v4.1.2 LPPL License By http://www.ptcms.com/ */
 ;$(function(){var t=null;$(".btn-mark").on("click",function(){var e,n=this,a=0;"加入收藏"===$(n).find("span:first").text()?(e=__ADD_MARK,a=1):(e=__DEL_MARK,a=-1),$.ajax(e,{type:"post",dataType:"json",data:{type:"booklist",booklistid:__BOOKLIST_ID},beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){if(t.code)layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)});else{layer.msg("操作成功!");var e=$(".pt-bookdetail-btn .num-mark");e.text(parseInt(e.text())+a),"加入收藏"==$(n).find("span:first").text()?$(n).find("span:first").text("取消收藏"):$(n).find("span:first").text("加入收藏")}},error:function(){layer.alert("收藏失败，请刷新页面后重试！",{icon:2})}})}),$(".btn-vote").on("click",function(){var e,n=this,a=0;"推荐"===$(n).find("span:first").text()?(e=__ADD_VOTE,a=1):(e=__DEL_VOTE,a=-1),$.ajax(e,{type:"post",dataType:"json",data:{type:"booklist",booklistid:__BOOKLIST_ID},beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){if(t.code)layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)});else{layer.msg("操作成功!");var e=$(".pt-bookdetail-btn .num-vote");e.text(parseInt(e.text())+a),"推荐"==$(n).find("span:first").text()?$(n).find("span:first").text("取消推荐"):$(n).find("span:first").text("推荐")}},error:function(){layer.alert("推荐失败，请刷新页面后重试！",{icon:2})}})}),$(".comment-btn-up,.comment-btn-down").click(function(){var e=$(this);return e.hasClass("active")||e.parent().hasClass("disable")?(layer.msg("操作失败，您已经评价过了！"),!1):void $.ajax(__RATING_COMMENT,{type:"post",dataType:"json",data:{comment_id:e.parents("li").data("comment-id"),type:"booklist",type_id:__BOOKLIST_ID,action:e.hasClass("comment-btn-down")?"bad":"good"},beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){t.code?layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)}):(e.addClass("active"),e.parent().addClass("disable"),e.find(".number").text(parseInt(e.find(".number").text())+1),layer.msg("操作成功"))},error:function(){layer.alert("操作失败，请刷新页面后重试！",{icon:2})}})}),$(".addcomment button").click(function(){$.ajax(__ADD_COMMENT,{type:"post",dataType:"json",data:{type:"booklist",type_id:__BOOKLIST_ID,content:$(this).siblings("textarea").val()},beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){t.code?layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)}):layer.msg("评论成功",function(){window.location.reload()})},error:function(){layer.alert("评论失败，请刷新页面后重试！",{icon:2})}})}),$(".addcomment textarea").keyup(function(t){t.ctrlKey&&13==t.keyCode&&$(".addcomment button").click()})});