let p="";
let c=0;
document.getElementById("button").onclick=function(){
    p=document.getElementById("parola").value;
    let pa=p.split("");
    p=p.split("");
    pa.reverse();
    for(let i=0;i<p.length;i++){
        if(p[i]!=pa[i]){
            c++;
        }
    }
    if(c==0){
        document.getElementById("rispostaPalindromo").innerHTML="palindromo";
    }else{
        document.getElementById("rispostaPalindromo").innerHTML="non è palindroma";
    }
     
console.log(p)
}
