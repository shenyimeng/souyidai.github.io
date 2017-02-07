
$(function () {
    $(".form_datetime").datetimepicker({
        minView: 2,
        format: 'yyyy-mm-dd',
        language: 'zh-CN',
        autoclose:true,
        weekStart: 1,
        startView: 2,
        forceParse: false
    });
})
