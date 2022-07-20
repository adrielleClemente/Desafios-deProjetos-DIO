let button = document.getElementById('button');
let input1 = document.getElementById('in1') as HTMLInputElement;
let input2 = document.getElementById('in2') as HTMLInputElement;

function adicionarNumero(n1:number,n2:number){
    return n1 + n2
}

if(button){
    button.addEventListener('click', ()=> {
        console.log(adicionarNumero(Number(input1.value),Number(input2.value)))
    })
}