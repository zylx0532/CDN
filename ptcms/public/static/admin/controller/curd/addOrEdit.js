/** PTNovelSearch-v4.1.2 LPPL License By http://www.ptcms.com/ */
 ;layui.define(["form","laydate"],function(e){var t=layui.$,i=layui.layer,a=layui.laytpl,n=(layui.setter,layui.view,layui.admin),o=layui.form,u=layui.laydate,l={},r={},d={},f={},y={},c={};o.config.verify.url=[/(^#)|(^\/)|(^http(s*):\/\/[^\s]+\.[^\s]+)/,"链接格式不正确"];var s=layui.router().path[layui.router().path.length-1];if(!config.url||!config.url.index){var p=layui.router().path;p.pop(),config.url=Object.assign(config.url?config.url:{},{index:"/"+p.join("/")+"/"})}layuiFieldsBox=t(".layui-form .layui-fields"),layui.each(config.fields,function(e,n){templet="undefined"==typeof n.templet?tplField.innerHTML:"function"==typeof n.templet?n.templet(n):t(n.templet).html(),a(templet).render(n,function(e){layuiFieldsBox.append(e)}),"date"===n.type?f[n.key]=u.render({elem:"#date-"+n.key,type:"date"}):"datetime"===n.type?y[n.key]=u.render({elem:"#datetime-"+n.key,type:"datetime"}):"slider"===n.type?layui.use("slider",function(){l[n.key]=layui.slider.render({elem:"#slider_"+n.key,type:"object"==typeof n.extra&&n.extra.type?n.extra.type:"default",min:"object"==typeof n.extra&&n.extra.min?n.extra.min:0,max:"object"==typeof n.extra&&n.extra.max?n.extra.max:100,value:"object"==typeof n.extra&&n.extra.value?n.extra.value:0,step:"object"==typeof n.extra&&n.extra.step?n.extra.step:1,showstep:!("object"!=typeof n.extra||!n.extra.showstep)&&n.extra.showstep,theme:"object"==typeof n.extra&&n.extra.color?n.extra.color:"#009688",input:!0,disabled:"undefined"!=typeof n.disabled&&n.disabled,change:function(e){t('input[name="'+n.key+'"]').val(e)}})}):"img"===n.type||"imgs"===n.type||"file"===n.type?layui.use("upload",function(){r[n.key]=layui.upload.render({elem:"#btn_upload_"+n.key,url:n.url,data:{access_token:layui.data("layuiAdmin").access_token},size:"undefined"!=typeof n.size?n.size:0,multiple:"undefined"!=typeof n.multi,number:"number"==typeof n.multi?n.multi:0,accept:"undefined"!=typeof n.accept?n.accept:"img"===n.type||"imgs"===n.type?"images":"file",done:function(e,a,o){if(e.code)i.msg(e.msg);else if("function"==typeof n.success)n.success(e,a,o);else if("imgs"===n.type){if("number"==typeof n.multi&&n.multi>0&&t("#img_preview_"+n.key+" img").length>=n.multi)return i.msg("同时最多只能上传的数量为："+n.multi);t("#img_preview_"+n.key+" button").before('<div><img src="'+e.data.src+'"></div>'),t("#img_file_"+n.key).append('<input type="hidden" name="'+n.key+'[]" value="'+e.data.src+'">')}else t('input[name="'+n.key+'"]').val(e.data.src)},error:function(e,t){i.msg("上传失败,请重试!")}}),layui.$("#img_preview_"+n.key).on("click","div",function(){othis=layui.$(this),index=othis.prevAll().length,layui.$("#img_preview_"+n.key+" div:eq("+index+")").remove(),layui.$("#img_file_"+n.key+" input:eq("+index+")").remove()})}):"editor"===n.type?layui.use("editor",function(){d[n.key]=layui.editor("#editor_box_"+n.key),d[n.key].customConfig.onchange=function(e){t('textarea[name="'+n.key+'"]').val(e)},d[n.key].customConfig.uploadImgServer="/manage/upload/image.json",d[n.key].customConfig.uploadFileName="file[]",d[n.key].customConfig.uploadImgParams={access_token:layui.data("layuiAdmin").access_token},d[n.key].customConfig.uploadImgMaxSize=2097152,d[n.key].customConfig.uploadImgHooks={customInsert:function(e,t,a){var n=t.data||[];n.forEach(function(t){"object"==typeof t?i.msg(t.error):e(t)})}},d[n.key].create()}):"rate"!==n.type&&"star"!==n.type||layui.use("rate",function(){c[n.key]=layui.rate.render({length:"undefined"!==n.length?n.length:0,readonly:"undefined"!==n.readonly&&n.readonly,half:"undefined"!==n.half&&n.half,elem:"#rate_box_"+n.key,choose:function(e){t("#rate_input_"+n.key).val(e)},setText:function(e){var t={1:"极差",2:"差",3:"中等",4:"好"};this.span.text(t[e]||e+"星")},value:"undefined"!==n.value&&n.value}),t("#rate_input_"+n.key).on("change",function(){c[n.key].setvalue(this.value)})})}),o.render(),"undefined"==typeof config.loadEditData&&(config.loadEditData=function(){n.req({url:config.api.submit+"?id="+layui.router().search.id,success:function(e){"function"==typeof config.beforeFormAssign&&config.beforeFormAssign(layui,e),o.val("LAY-info-form",e.data),t.each(e.data,function(i,a){"undefined"!=typeof l[i]?l[i].setValue(a):"undefined"!=typeof d[i]?d[i].txt.html(e.data[i]):"undefined"!=typeof r[i]&&"object"==typeof e.data[i]&&(t("#img_preview_"+i+" div").remove(),t("#img_file_"+i+" input").remove(),layui.each(e.data[i],function(e,a){t("#img_preview_"+i+" button").before('<div><img src="'+a+'"></div>'),t("#img_file_"+i).append('<input type="hidden" name="'+i+'[]" value="'+a+'">')}))})}})}),"edit"===s?config.loadEditData():"add"===s&&config.loadEditData(),o.val("LAY-info-form",layui.router().search),o.on("submit(submit)",function(e){return"function"==typeof config.beforeSubmit&&config.beforeSubmit(e),"function"==typeof config.submit?config.submit(e):(n.req({url:config.api.submit,data:e.field,method:"POST",success:function(e){"function"==typeof config.submitSuccess?config.submitSuccess(e):n.success("add"===s?"添加成功":"修改成功",{yes:function(e){layui.index.render()},btn2:function(){location.hash=config.url.index}})}}),!1)}),"function"==typeof config.done&&config.done(layui),e("curd/addOrEdit",{})});