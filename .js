const time={"h":`${0}${0}`,"m":`${5}${9}`,"s":`${5}${0}`};
document.body.querySelector(".hour").append(time.h);
document.body.querySelector(".sec").append(time.s);
document.body.querySelector(".min").append(time.m);
setInterval(()=>{
    time.s++;
    if(time.s===60){
        time.s=0;
        time.m++;2
        if(time.m/10<1)document.body.querySelector(".min").replaceChildren(`${0}${time.m}`);
        else document.body.querySelector(".min").replaceChildren(time.m);
    }
    if(time.m===60){
        time.m=0;
        time.h++;
        if(time.h/10<1)document.body.querySelector(".hour").replaceChildren(`${0}${time.h}`);
        else document.body.querySelector(".hour").replaceChildren(time.h);
    }
    if(time.s/10<1)document.body.querySelector(".sec").replaceChildren(`${0}${time.s}`);
    else document.body.querySelector(".sec").replaceChildren(time.s);
},1000)


