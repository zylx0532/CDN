/** PTNovelSearch-v4.1.2 LPPL License By https://www.zhiqiang.name/ */
 ;!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/ru",[],function(){function n(n,e,r,u){return n%10<5&&n%10>0&&n%100<5||n%100>20?n%10>1?r:e:u}return{errorLoading:function(){return"Невозможно загрузить результаты"},inputTooLong:function(e){var r=e.input.length-e.maximum,u="Пожалуйста, введите на "+r+" символ";return u+=n(r,"","a","ов"),u+=" меньше"},inputTooShort:function(e){var r=e.minimum-e.input.length,u="Пожалуйста, введите еще хотя бы "+r+" символ";return u+=n(r,"","a","ов")},loadingMore:function(){return"Загрузка данных…"},maximumSelected:function(e){var r="Вы можете выбрать не более "+e.maximum+" элемент";return r+=n(e.maximum,"","a","ов")},noResults:function(){return"Совпадений не найдено"},searching:function(){return"Поиск…"}}}),{define:n.define,require:n.require}}();