/** PTNovelSearch-v4.1.2 LPPL License By https://www.zhiqiang.name/ */
 ;!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/vi",[],function(){return{inputTooLong:function(n){var e=n.input.length-n.maximum,t="Vui lòng nhập ít hơn "+e+" ký tự";return 1!=e&&(t+="s"),t},inputTooShort:function(n){var e=n.minimum-n.input.length,t="Vui lòng nhập nhiều hơn "+e+" ký tự";return t},loadingMore:function(){return"Đang lấy thêm kết quả…"},maximumSelected:function(n){var e="Chỉ có thể chọn được "+n.maximum+" lựa chọn";return e},noResults:function(){return"Không tìm thấy kết quả"},searching:function(){return"Đang tìm…"}}}),{define:n.define,require:n.require}}();