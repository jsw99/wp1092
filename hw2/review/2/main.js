var source = ["https://attach.setn.com/newsimages/2020/03/11/2450111-XXL.jpg"
,"https://www.dramaqueen.com.tw/images/intelligence/202008131529191031dbce2daa9aa9a876f6d58a41ee64d701.jpg"
,"https://img.toy-people.com/geekbase/159711738287.jpg"
,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarYx7UTPi5kIu5H8gXgpdC0KuDxqp3RiG1A&usqp=CAU"
,"http://nimg.ws.126.net/?url=http%3A%2F%2Fvimg.nosdn.127.net%2Fenhanced%2FSMcLb670T.jpg&thumbnail=750x2147483647&quality=85&type=jpg"
,"https://dvblobcdnjp.azureedge.net//Content/ueditor/net/upload1/image8489457.png"
,"http://i.imgur.com/c93aqMB.jpg"];

var discribe = ["派大星傻笑"
,"派大星深蹲"
,"派大星吃漢堡"
,"派大星嚇一跳"
,"派大星賽跑"
,"派大星自由落體"
,"我愛派大星"]

var index = 0;
var photonum = source.length;


var back = function (){
    if(index>=1){
    index--;
    document.getElementById("display").src = source[index];
    document.getElementById("source").href = source[index];
    document.getElementById("source").innerHTML = source[index];
    document.getElementById("image-viewer__title").innerHTML = discribe[index];
    document.getElementById("n").className = "";
    if(index==0){
        document.getElementById("b").className = "disabled";
    }   
    }
}

var next = function (){
    if(index<=photonum-2){
    index++;
    document.getElementById("display").src = source[index];
    document.getElementById("source").href = source[index];
    document.getElementById("source").innerHTML = source[index];
    document.getElementById("image-viewer__title").innerHTML = discribe[index];    
    document.getElementById("b").className = "";
    if(index==photonum-1){
        document.getElementById("n").className = "disabled";
    }
    }

}