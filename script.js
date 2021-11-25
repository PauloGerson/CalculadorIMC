
 btn = addEventListener('click', function(){
    let num1 = document.querySelector('#numP1').value;
    let num2 =  document.querySelector('#numP2').value;
    let btn = document.querySelector('.btn');
    let resultado = 0;
    resultado = num2/(num1 * num1);
    let p = document.querySelector('.resultado');
    
    if(resultado < 18.5 )
    {
        p.innerHTML = 'Abaixo do peso'
    }
    else if(resultado >= 18.5 &&  resultado <= 24.9){
        p.innerHTML = 'Peso normal'
    }
    else if(resultado >= 25 && resultado <= 29.9){
        p.innerHTML = 'Sobrepeso'
    }
    else if(resultado >= 30 && resultado <= 34.9){
        p.innerHTML = 'Obesidade grau 1'
    }
    else if(resultado >= 35 && resultado <= 39.9){
        p.innerHTML = 'Obesidade grau 2'
    }
    else if(resultado >= 40 ){
        p.innerHTML = 'Obesidade grau 3'
    }
    console.log(resultado)

})
    
