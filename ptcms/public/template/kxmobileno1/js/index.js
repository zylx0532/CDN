/** PTNovelSearch-v4.1.2 LPPL License By https://www.zhiqiang.name/ */
 ;window.onload=function(){function e(){var e=l;l=++l%d,t(e,l)}function t(e,t){$(".pt-slider-panel").eq(e).fadeOut(500).parent().children().eq(t).fadeIn(1e3),$(".pt-slider-item").removeClass("pt-slider-item-selected"),$(".pt-slider-item").eq(t).addClass("pt-slider-item-selected")}function s(){a||(a=!0,n=setInterval(e,r))}function i(){clearInterval(n),a=!1}var n,l=0,a=!1,r=5e3,d=$(".pt-slider-panel").length;$(".pt-slider-panel:not(:first)").hide(),$(".pt-slider-item:first").addClass("pt-slider-item-selected"),$(".pt-slider").hover(function(){i()},function(){s()}),$(".pt-slider-item").hover(function(){i();var e=$(".pt-slider-item").filter(".pt-slider-item-selected").index();l=$(this).index(),t(e,l)},function(){s()}),s()},$(".pt-nav a").click(function(){$(this).addClass("pt-select").siblings().removeClass("pt-select")}),$(".pt-hotsort-list .pt-hotsort-item").click(function(){$(this).addClass("pt-hotsort-select").siblings().removeClass("pt-hotsort-select")}),$(".pt-rank-list .pt-rank-item").click(function(){$(this).addClass("pt-rank-select").siblings().removeClass("pt-rank-select"),$(this).parent().parent().find(".pt-new-cont").eq($(this).index()).removeClass("none").siblings().addClass("none")}),$(".pt-finish-sex span").click(function(){$(this).addClass("pt-finish-select").siblings().removeClass("pt-finish-select")});