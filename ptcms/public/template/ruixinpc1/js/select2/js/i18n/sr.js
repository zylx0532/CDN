/** PTNovelSearch-v4.1.2 LPPL License By http://www.ptcms.com/ */
 ;!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/sr",[],function(){function e(e,n,r,u){return e%10==1&&e%100!=11?n:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?r:u}return{errorLoading:function(){return"Preuzimanje nije uspelo."},inputTooLong:function(n){var r=n.input.length-n.maximum,u="Obrišite "+r+" simbol";return u+=e(r,"","a","a")},inputTooShort:function(n){var r=n.minimum-n.input.length,u="Ukucajte bar još "+r+" simbol";return u+=e(r,"","a","a")},loadingMore:function(){return"Preuzimanje još rezultata…"},maximumSelected:function(n){var r="Možete izabrati samo "+n.maximum+" stavk";return r+=e(n.maximum,"u","e","i")},noResults:function(){return"Ništa nije pronađeno"},searching:function(){return"Pretraga…"}}}),{define:e.define,require:e.require}}();