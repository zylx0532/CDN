/** PTNovelSearch-v4.1.2 LPPL License By https://www.zhiqiang.name/ */
 ;!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/ja",[],function(){return{errorLoading:function(){return"結果が読み込まれませんでした"},inputTooLong:function(n){var e=n.input.length-n.maximum,r=e+" 文字を削除してください";return r},inputTooShort:function(n){var e=n.minimum-n.input.length,r="少なくとも "+e+" 文字を入力してください";return r},loadingMore:function(){return"読み込み中…"},maximumSelected:function(n){var e=n.maximum+" 件しか選択できません";return e},noResults:function(){return"対象が見つかりません"},searching:function(){return"検索しています…"}}}),{define:n.define,require:n.require}}();