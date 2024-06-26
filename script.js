// PROGRAMA
// NUMBER
//string 

let num1 = 100;
let num2 = 100;
let num3 = 100;





if(num1 < num2){
    if(num2<num3){
        console.log('es mayor el tercer numero', num3);
    }else{
        console.log('es mayor el segundo numero',num2)
    }
}else{
    if(num1>num3){
        console.log('es mayor el primer numero', num1)
    }else{
        console.log('es mayor el tercer numero', num3)
    }
}

function Comparar(a,b,c){
    
    if(a < b){
        if(b<c){
            console.log('es mayor el tercer numero', c);
        }else{
            console.log('es mayor el segundo numero',b)
        }
    }else{
        if(a>c){
            console.log('es mayor el primer numero', a)
        }else{
            console.log('es mayor el tercer numero', c)
        }
    }
}

console.log(Comparar(4,6,1)) 