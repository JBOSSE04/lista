// function orden(letraA, letraB)
// {
//     let resultado=0;
//     if (letraA> letraB) {
//         resultado= 1;
//         }else if(letraA<letraB)
//         resultado=-1;
//         else
//         resultado=0;
//     return (resultado)
// }


// function recursiva(n){
//     if(n>0)
//     recursiva(n-1);
// console.log("acaba la funcion")
// }
// recursiva(4)


// function fact(n){
//     if(n==1)
//         return 1;
//     else
//         return n*fact(n-1);


// }
// console.log(fact(5))






////////////////////////////ARRAY//////////////////////////////////////

// let nombres = ["jose","rosa", "paco", "anronio","pablo","pablete","jose"];

// nombres.sort((a,b) =>{
// if (a<b)
//     return -1;
// else if (a>b)
//     return 1;
// else
//     return 0;

// });


//////////////////

let numeros = [10,2,3,543,2,1,,34]

console.log(numeros.sort((num1,num2)=>    
    {
    if (num1<num2)
        return -1;
    else if 
    (num1>num2)
    return 1;
    else
    return 0;
}));