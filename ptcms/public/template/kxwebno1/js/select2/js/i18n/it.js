/** PTNovelSearch-v4.1.2 LPPL License By https://www.zhiqiang.name/ */
 ;!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/it",[],function(){return{errorLoading:function(){return"I risultati non possono essere caricati."},inputTooLong:function(e){var n=e.input.length-e.maximum,r="Per favore cancella "+n+" caratter";return r+=1!==n?"i":"e"},inputTooShort:function(e){var n=e.minimum-e.input.length,r="Per favore inserisci "+n+" o più caratteri";return r},loadingMore:function(){return"Caricando più risultati…"},maximumSelected:function(e){var n="Puoi selezionare solo "+e.maximum+" element";return n+=1!==e.maximum?"i":"o"},noResults:function(){return"Nessun risultato trovato"},searching:function(){return"Sto cercando…"}}}),{define:e.define,require:e.require}}();