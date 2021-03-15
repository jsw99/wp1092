
const  pictures =["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png",
"https://media.istockphoto.com/photos/bright-neon-font-number-2-picture-id939171952?k=6&m=939171952&s=612x612&w=0&h=GU9hBYIxfrySduV38o_6Xnw09tTUzL0qIfjJpNC-Hxc=",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TTC_-_Line_3_-_Scarborough_RT_line.svg/494px-TTC_-_Line_3_-_Scarborough_RT_line.svg.png",
    "https://previews.123rf.com/images/asmati/asmati1709/asmati170903248/86470545-number-4-sign-design-template-element-in-lemon-scribble-icon-on-white-background-.jpg",
    "https://shouyou.3dmgame.com/uploadimg/upload/image/20201207/20201207161208_19475.jpg"
]
var i=0
buttommode()
show()

function nextImg(){
    if(i<pictures.length-1){
        i+=1
    }
    buttommode()
    show()
}
function backImg(){
    
    if(i>0){
        i-=1
    }
    buttommode()
    show()
}
function show(){
    let target = document.querySelector("#display");
    target.setAttribute ('src',"./images/loading.gif");
    target.setAttribute ('src',pictures[i]);
    console.log("hello")
}
function buttommode(){
    if(i===0){
        let target = document.querySelector("#previous");
        target.classList.add("disabled");
    }else if(i===pictures.length-1){
        let target = document.querySelector("#next");
        target.classList.add("disabled");
    }else{
        let target = document.querySelector("#previous");
        target.classList.remove("disabled");
        target = document.querySelector("#next");
        target.classList.remove("disabled");

    }
}