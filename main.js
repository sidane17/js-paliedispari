let p="";
let c=0;
let pari;
let dispari;
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
document.getElementById("pari").onclick=function(){
    pari=true;
   
    
    
}
document.getElementById("dispari").onclick=function(){
    dispari=true;
    
}
document.getElementById("b_p_d").onclick=function(){
    let num = document.getElementById("num").value;
    if (num>5 || num<1 ){
    document.getElementById("RispostaPariDispari").innerHTML="Numero oltre i limiti o non hai scelto. RIPROVA"
    }
    let g= Math.floor(Math.random() * (6 -1) + 1);
    console.log(g)
    if((g+num)%0){
        if(pari==true){
            document.getElementById("RispostaPariDispari").innerHTML="Ha vinto PARI"
            console.log(1)
        }else{
            document.getElementById("RispostaPariDispari").innerHTML="ha vinto Dispari"
            console.log(2)
        }
        


    }else {
        if(dispari==true){
            document.getElementById("RispostaPariDispari").innerHTML="Ha vinto DISPARI"
            console.log(3)
        }else{
            document.getElementById("RispostaPariDispari").innerHTML="Ha vinto pari"
            console.log(4)
        }
        

        
    }

    // if( pari!=true || dispari!=true){

    // }
}
