// Limpa o console
console.clear();

// Importa a biblioteca 'prompt-sync' para ler a entrada do usuário
const promptSync = require('prompt-sync');
// Cria uma instância da função promptSync
const prompt = promptSync();

// Declaração de variáveis
let num1, num2; 
let operador; 
let continuar; 

// Menu de operadores
let menu = `
Tabela de Operadores
Digite + para somar
Digite - para Subtrair
Digite * para Multiplicar
Digite / para Divisão
`;

// Função para realizar cálculos
function calcula() {
    do {
        // Solicita o primeiro número ao usuário até que um número válido seja fornecido
        do {
            num1 = Number(prompt("Digite o primeiro número: "));
        } while (isNaN(num1)) // Continua pedindo até que o usuário digite um número válido

        // Solicita o segundo número ao usuário até que um número válido seja fornecido
        do {
            num2 = Number(prompt("Digite o segundo número: "));
        } while (isNaN(num2)) // Continua pedindo até que o usuário digite um número válido
        
        // Solicita o operador ao usuário e realiza o cálculo correspondente
        do {
            console.log(menu); // Exibe o menu de operadores
            operador = prompt("Digite o operador do tipo de cálculo desejado: ");
        
            // Realiza o cálculo com base no operador escolhido
            switch (operador) {
                case '/':
                    console.log(`Resultado da divisão: ${num1 / num2}`);
                    break;
                case '*':
                    console.log(`Resultado da multiplicação: ${num1 * num2}`);
                    break;
                case '-':
                    console.log(`Resultado da subtração: ${num1 - num2}`);
                    break;
                case '+':
                    console.log(`Resultado da soma: ${num1 + num2}`);
                    break;
                default:
                    console.clear(); // Limpa o console
                    console.log(`Operador inválido, digite novamente.`); // Informa ao usuário que o operador é inválido
                    break;
            }
        } while (operador != '/' && operador != '*' && operador != '-' && operador != '+') // Continua pedindo até que o usuário digite um operador válido

        // Pergunta ao usuário se ele deseja continuar
        continuar = prompt("Deseja fazer outro cálculo? (s/n): ");
    } while (continuar.toLowerCase() == 's') // Continua realizando cálculos enquanto o usuário desejar

    console.log("Finalizando a calculadora...");
     
};

// Chama a função de cálculo
calcula();