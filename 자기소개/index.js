const $title=document.querySelector(".title");
const content="안녕하세요! 백서경입니다.";
let index=0;

let typing=()=>{
    $title.innerHTML+=content[index];
    index++;
    if (index>=content.length){
        $title.innerHTML="";
        index=0;
    }
}

setInterval(typing,200);