/** PTNovelSearch-v4.1.2 LPPL License By http://www.ptcms.com/ */
 ;function subscribeChapter(){$(".pt-chapter:first").show(),$(".pt-chapter:not(:first)").hide(),$(".pt-chapter-subscribe input[type=checkbox]").change()}$(function(){$(".pt-chapter-subscribe-order .switch").click(function(){$(this).hasClass("on")?$(this).removeClass("on"):$(this).addClass("on")});var t=null,e=$(".pt-chapter-cont-detail.full a").length;if(e>30){var n=Math.ceil(e/3);$(".pt-chapter-cont-detail.full a:lt(15)").removeClass("none"),$(".pt-chapter-cont-detail.full a:gt("+(3*(n-5)-1)+")").removeClass("none"),$(".pt-chapter-cont-detail.full a").eq(14).after('<a class="fulltip">································ 查看全部'+e+"章节 ································</a>")}else $(".pt-chapter-cont-detail.full a").removeClass("none");var a=$(".pt-chapter-cont-detail img.toll").length;a&&(__IS_FREE_FOR_VIP&&__IS_VIP?$(".pt-chapter-cont-detail img.toll:first").parent().before('<div class="clear"><div class="toll-label"><span class="ml20 size18 color32 bold inline-block" style="line-height: 55px;">收费章节</span><span class="label mt10 ml25">付费</span><span class="pl5">共计<span class="num">'+a+'</span>章</span><button type="button">VIP免费畅阅</button></div></div>'):$(".pt-chapter-cont-detail img.toll:first").parent().before('<div class="clear"><div class="toll-label"><span class="ml20 size18 color32 bold inline-block" style="line-height: 55px;">收费章节</span><span class="label mt10 ml25">付费</span><span class="pl5">共计<span class="num">'+a+'</span>章</span><button onclick="subscribeChapter()">订阅本卷</button></div></div>')),$(".fulltip").on("click",function(){$(this).remove(),$(".pt-chapter-cont-detail.full a").removeClass("none")});var i=0;if($(".pt-photo span").on("mouseenter",function(){$(this).index()+1,$(this).prevAll().find(".high").css("z-index",1),$(this).find(".high").css("z-index",1),$(this).nextAll().find(".high").css("z-index",0)}),$(".pt-photo").on("mouseleave",function(){$(this).find(".high").css("z-index",0);var t=i/2;5==t?$(".pt-photo span").find(".high").css("z-index",1):$(".pt-photo span").eq(t).prevAll().find(".high").css("z-index",1)}),$(".pt-photo span").on("click",function(){var e=$(this).index()+1;$(this).find(".high").css("z-index",1),layer.confirm("您对《"+__NOVEL_NAME+"》评分"+e+"分,请确认操作!",function(){$.ajax(__ADD_STAR,{type:"post",dataType:"json",data:{novelid:__NOVEL_ID,star:e},beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){if(t.code)layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)});else{layer.msg("操作成功!");var n=$(".pt-bookdetail-num .num-star-people");n.text(parseInt(n.text())+1);var a=$(".num-avg-star");a.text((parseInt(a.data("star-score"))+e)/(parseInt(a.data("star-num"))+1))}},error:function(){layer.alert("评分失败，请刷新页面后重试！",{icon:2})}})})}),$("#btn-mark").on("click",function(){var e,n=this,a=0;"加入收藏"===$(n).text().trim()?(e=__ADD_MARK,a=1):(e=__DEL_MARK,a=-1),$.ajax(e,{type:"post",dataType:"json",data:{novelid:__NOVEL_ID},beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){if(t.code)layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)});else{layer.msg("操作成功!");var e=$(".pt-bookdetail-num .num-mark");e.text(parseInt(e.text())+a),"加入收藏"===$(n).text().trim()?$(n).text("取消收藏"):$(n).text("加入收藏")}},error:function(){layer.alert("收藏失败，请刷新页面后重试！",{icon:2})}})}),$("#btn-vote").on("click",function(){$.ajax(__ADD_VOTE,{type:"post",dataType:"json",data:{novelid:__NOVEL_ID},beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){if(t.code)layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)});else{layer.msg("操作成功!");var e=$(".pt-bookdetail-num .num-vote");e.text(parseInt(e.text())+1)}},error:function(){layer.alert("推荐失败，请刷新页面后重试！",{icon:2})}})}),$(".comment-btn-up,.comment-btn-down").click(function(){var e=$(this);return e.hasClass("active")||e.parent().hasClass("disable")?(layer.msg("操作失败，您已经评价过了！"),!1):void $.ajax(__RATING_COMMENT,{type:"post",dataType:"json",data:{comment_id:e.parents("li").data("comment-id"),type:"novel",type_id:__NOVEL_ID,action:e.hasClass("comment-btn-down")?"bad":"good"},beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){t.code?layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)}):(e.addClass("active"),e.parent().addClass("disable"),e.find(".number").text(parseInt(e.find(".number").text())+1),layer.msg("操作成功"))},error:function(){layer.alert("操作失败，请刷新页面后重试！",{icon:2})}})}),$(".addcomment button").click(function(){$.ajax(__ADD_COMMENT,{type:"post",dataType:"json",data:{type:"novel",type_id:__NOVEL_ID,content:$(this).siblings("textarea").val()},beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){t.code?layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)}):layer.msg("评论成功",{},function(){window.location.reload()})},error:function(){layer.alert("评论失败，请刷新页面后重试！",{icon:2})}})}),$(".addcomment textarea").keyup(function(t){t.ctrlKey&&13==t.keyCode&&$(".addcomment button").click()}),$(".tags div").height()>72){var s=[];$(".tags").append('<a class="pt-bookdetail-label bg-white more" style="border-color: #FF5555;color: #FF5555;position: absolute;right: 10px;bottom: 0;">更多</a>'),$(".tags div a").each(function(t,e){(e.offsetTop>72||46===e.offsetTop&&e.offsetLeft+e.offsetWidth>=$(".tags .more")[0].offsetLeft-10)&&(s.push($(e).prop("outerHTML")),$(e).remove())}),$(".tags .more").mouseover(function(){layer.tips(s.join(""),this,{tips:[3,"#fff"],area:"620px"})})}$("#btn-add-booklist").click(function(){var e=$(".box-booklist");e.hide(),$.ajax(__USER_BOOKLIST,{type:"get",dataType:"json",beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){if(t.code)layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)});else{t.data.length||layer.open({title:!1,area:["455px","256px"],btn:!1,content:'<div class="text-center"><h1 class="color62 size24 mt40">创建书单</h1><h3 class="color92 mtb30">您还没有创建书单，是否前往创建</h3><a href="'+__USER_ADD_BOOKLIST+'" class="bg-red color1 plr20 ptb10">立即前往</a></div>'});var n=e.find("ul");n.html(""),$.each(t.data,function(t,e){n.append('<li data-booklistid="'+e.id+'" title="'+e.title+'">'+e.title+"</li>")}),e.show(),e.focus()}},error:function(){layer.alert("评论失败，请刷新页面后重试！",{icon:2})}})}),$(".box-booklist").on("click","li",function(){var t=$(this).data("booklistid");layer.open({title:!1,area:["563px","364px"],btn:!1,content:"",success:function(e,n){e.find(".layui-layer-content").append(tpl_booklist_add_novel.innerHTML),e.resize(),e.find("input[name=booklistid]").val(t),e.on("mouseleave",".pt-photo",function(){$(this).find(".high").css("z-index",0);var t=parseInt($(this).data("star"));5===t?$(this).children("span").children(".high").css("z-index",1):$(this).find("span").eq(t).prevAll().find(".high").css("z-index",1)}).on("mouseenter",".pt-photo span",function(){$(this).prevAll().find(".high").css("z-index",1),$(this).find(".high").css("z-index",1),$(this).nextAll().find(".high").css("z-index",0)}).on("click",".pt-photo span",function(){var t=$(this).index()+1;$(this).parents(".pt-photo").data("star",t).siblings("input[name=star]").val(t)}).find(".pt-photo").mouseleave()}})}).on("focus",function(){console.log(1)}).on("focusout",function(){$(this).hide()}),$(".btn-interactive-reward,.btn-interactive-vote").click(function(){var t=$(this);layer.open({type:1,title:!1,closeBtn:0,shadeClose:!0,skin:"yourclass",area:["640px","400px"],content:$(".pt-interactive-model"),success:function(e,n){e.find(".label li").removeClass("pt-active"),t.hasClass("btn-interactive-reward")?e.find(".label li[data-type=reward]").addClass("pt-active"):t.hasClass("btn-interactive-vote")&&e.find(".label li[data-type=vote]").addClass("pt-active"),__IS_LOGIN&&(t.hasClass("btn-interactive-reward")?e.find(".container li").removeClass("pt-active").siblings(".reward").addClass("pt-active"):t.hasClass("btn-interactive-vote")&&e.find(".container li").removeClass("pt-active").siblings(".vote").addClass("pt-active"))}})}),$("body").on("click",".pt-interactive-model .label li",function(){return $(this).addClass("pt-active").siblings().removeClass("pt-active"),!!__IS_LOGIN&&void $(".pt-interactive-model .container ."+$(this).data("type")).addClass("pt-active").siblings().removeClass("pt-active")}).on("click",".pt-interactive-model .container .vote .ticket_select button",function(){var t=parseInt($(this).siblings("span").text());$(this).hasClass("plus")&&t<parseInt($(this).parent().siblings("h1").find(".total").text())?t+=1:$(this).hasClass("minus")&&t>1&&(t-=1),$(this).siblings("span").text(t)}).on("click",".pt-interactive-model .container .reward .moneylist span",function(){$(this).addClass("pt-active").siblings().removeClass("pt-active").parent().siblings("h1").find(".money").text($(this).data("money"))}).on("click",".pt-interactive-model .container .btn-submit",function(){var t=$(this).parent(),e=parseInt(t.find("h1 .total").text()),n=0;if(t.hasClass("reward")){if(e<(n=parseInt(t.find(".moneylist .pt-active").data("money"))))return layer.open({type:1,title:!1,closeBtn:0,shadeClose:!0,area:["500px","300px"],content:$(".pt-insufficient-balance-model"),success:function(t,a){t.find(".title").text("订阅"),t.find(".total").text(n),t.find(".missing").text(n-e)}});if(isNaN(n))return layer.msg("请先选择要打赏的数量。");window.location.href=__ADD_REWARD+"?novelid="+__NOVEL_ID+"&num="+n}else if(t.hasClass("vote")){if(e<(n=parseInt(t.find(".ticket_select span").text())))return layer.msg("票数不足");window.location.href=__ADD_VOTE_TICKET+"?novelid="+__NOVEL_ID+"&num="+n}}),$("#select_all_chapters").click(function(){$(this).prop("checked")?$(".pt-chapter-subscribe input[type=checkbox]:not(:checked)").click():$(".pt-chapter-subscribe input[type=checkbox]:checked").click()}),$(".pt-chapter-subscribe input[type=checkbox]").change(function(){var t=$(".pt-chapter-subscribe input[type=checkbox]:checked"),e=0;$(".pt-chapter .selected_num").text(t.length),t.each(function(t,n){e+=parseInt($(n).data("price"))?parseInt($(n).data("price")):0}),$(".pt-chapter .selected_money").text(e),$(".pt-chapter-subscribe input[type=checkbox]:not(:checked)").length?$("#select_all_chapters").prop("checked",!1):$("#select_all_chapters").prop("checked",!0)}),$(".btn-subscribe").click(function(){var t=null,e=parseInt($(this).siblings("span").find(".total").text()),n=parseInt($(this).siblings("span").find(".selected_money").text()),a=$(this).siblings(".switch").hasClass("on"),i=[];return n?e<n?layer.open({type:1,title:!1,closeBtn:0,shadeClose:!0,area:["500px","300px"],content:$(".pt-insufficient-balance-model"),success:function(t,a){t.find(".title").text("订阅"),t.find(".total").text(n),t.find(".missing").text(n-e)}}):($(".pt-chapter-subscribe input[type=checkbox]:checked").each(function(t,e){i.push(e.value)}),void $.ajax(__SUBSCRIBE,{data:{novelid:__NOVEL_ID,chapters:i,autosubscribe:a?1:0},type:"post",dataType:"json",beforeSend:function(){null==t&&(t=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=t&&(layer.close(t),t=null)},success:function(t){t.code?layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)}):window.location.reload()},error:function(){layer.alert("订阅失败，请刷新页面后重试！",{icon:2})}})):layer.msg("请先选择章节。")})});