function calcularTip(event){
    event.preventDefault();

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let idade = document.getElementById('idade').value;
    let selecao = document.getElementById('selecao').value;
    //let sexo3 = document.getElementById('sexo3').value; //Aqui não precisa declarar a variavel com 'getById' pois ela será declarada depois.
    let total;
    

    const radioButtons = document.querySelectorAll('input[name="sex"]');//Aqui declaramos uma constante ela ira selecionar todos os valores do radio na index com nome de 'sex'.
    //'const' tbm é um meio de atribuir variavel, porém o valor de uma const não pode ser alterado (eu acho kkkkkk).
    
            let sexo3;// Agora sim declaramos a variavel 'sexo3' sem parametros, ele será atribuido no final.
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    sexo3 = radioButton.value; //aqui a varialvel 'sexo3' recebe o valor selecionado do radio buttons.
                    
                }
            }
	

    if(sexo3 == 'M'){
        total = selecao*(66+((13.7*peso) +(5*altura)-(6.8*idade)));
    }

    else{
        total = selecao*(655+((9.6*peso) +(1.8*altura)-(4.7*idade)));
    }
        
    total = Math.round(total);
    document.getElementById('totaltmb').innerHTML = " Sua taxa de metabolismo é "+total+"kcl";
    document.getElementById('totaltmb').style.display = "block";
}

document.getElementById('totaltmb').style.display = "none";
document.getElementById('tipsForm1').addEventListener('submit', calcularTip);