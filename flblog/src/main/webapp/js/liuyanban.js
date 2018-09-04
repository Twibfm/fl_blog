function addRow() {
    //获取模态框的值
    username = $("#username").val();
    content = $("#content").val();
    abc = new Date().Format("yyyy-MM-dd HH:mm:ss");


    if (content == "" || username == "" ) {
        alert("不能为空")
    } else {

        var li = "<li class=\"liuyan\"><span style=\"font-size: 20px\">"+username+"&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"font-size: 12px\">"+abc+"</span></span>\n" +
            "                                <p style=\"text-indent: 2em;line-height: 20px\">"+content+"</p></li>";

        $("#message").prepend(li);
        //清空输入框的值
        username = "";
        content = "";
        abc = "";
        //关闭模态框
        $('.modal').map(function () {
            if (!$(this).is(":hidden")){
                $(this).modal('hide');
            }
        });
    }
}

//时间的格式化
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
