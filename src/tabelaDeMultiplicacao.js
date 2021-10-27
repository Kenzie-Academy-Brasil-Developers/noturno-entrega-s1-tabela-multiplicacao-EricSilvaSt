/* Observações da tarefa:
   let meuArray = [["banana", "maçã"], ["uva", "pêra"]]
 - banana e maçã = posição 0 do array
 - uva e pêra = posição 1 do array
 - banana = posição 0 do array dentro do array
 - maçã = posição 1 do array dentro do array

    */

function tabelaMultiplicacao(bonus) { 

    let saida = []; // 
    
    if (bonus == undefined){

       bonus = 10 
       // acrescentando o valor 10, sempre que não for declarado um número ao cha,ar uma função
    }

    for (let linhas = 0; linhas <= bonus; linhas++) {
        
        saida[linhas] = [];
       
        for (let colunas = 0; colunas <= bonus; colunas++){
            
            let multiplicacao = linhas * colunas
            saida[linhas][colunas] = multiplicacao
        
        }
    } 
    console.table(saida);
    return saida
}
tabelaMultiplicacao();