function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Resto da Dvivsão(%)\n 6 - Potenciação(**)\n'));
    if (!operacao || operacao >= 7){
        alert('Erro - operação inválida!');
        calculadora();
    }else{
        let valor1 = Number(prompt('Insira o primeiro valor: '));
        let valor2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!valor1 || !valor2){
            alert('Erro - valor inválido!');
            calculadora();
        }
        else{
            function soma() {
                resultado = valor1 + valor2;
                alert(`${valor1} + ${valor2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = valor1 - valor2;
                alert(`${valor1} - ${valor2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = valor1 * valor2;
                alert(`${valor1} * ${valor2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = valor1 / valor2;
                alert(`${valor1} / ${valor2} = ${resultado}`);
                novaOperacao();
            }
            function restoDivisao() {
                resultado = valor1 % valor2;
                alert(`${valor1} % ${valor2} = ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = valor1 ** valor2;
                alert(`${valor1} ** ${valor2} = ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não\n');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Obrigado, até a próxima!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
        switch (operacao){
            case 1:
                soma();
                    break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                restoDivisao();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}
calculadora();