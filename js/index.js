window.onload=function () {
    var time=document.getElementById('time');
    var date=new Date();

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day_num=date.getDay();
    var day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[day_num];
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var currentTime = "现在是:" + year + "年" + month + "月" + day_num + "日 " + hour + ":" + minute + ":" + second + " " +day;
    switch(hour){
        case 12:time.innerHTML="中午好，"+currentTime;
        break;
        case 13:time.innerHTML="下午好，"+currentTime;
            break;
        case 18:time.innerHTML="晚上好，"+currentTime;
            break;
        default:
            time.innerHTML="早上好，"+currentTime;

    }
}