/*
---------------- TRABALHO AVALIATIVO -----------------



Nomes: Vitor Reis e Lucas Silva 	Turma: TDS24-2T

-----------------------Funcionalidade----------------------------

O código deve receber um valor de entrada representando a temperatura em graus celsius,
processar os valores convertendo para graus fahrenheit e apresentar os dados na tela.

O código deve receber um valor associado a temperatura em CElSIUS através do prompt, converter 
em NUMBER e associar a uma var, após isso deve aplicar a operação matemática de converção para 
FAHRENHEIT e apresentar na tela com comando ALERT.


----------------------------Testes----------------------------

Caso de teste:01
Entrada: 30
Saída esperada: 86ºF
Saída real: 86ºF 
Resultado: Aprovado
Analise os resultados: O resultado do teste saiu como esperado, convertendo o valor de celsius
para fahrenheit

Caso de teste:02
Entrada: 99
Saída esperada: 210.2ºF
Saída real: 210.20000000000002ºF 
Resultado: Necessário ajustar
Analise os resultados: O resultado do teste saiu próximo do esperado, convertendo o valor de celsius
para fahrenheit, devendo apenas corrigir as casas decimais após a vírgula.
Correção: usamos a função toFixed() para limitar o número de casas após a vírgula.

Caso de teste:03
Entrada: -20
Saída esperada: -4.00ºF
Saída real: -4.00ºF 
Resultado: Aprovado
Analise os resultados: O resultado do teste saiu como esperado, convertendo o valor de celsius
para fahrenheit

Caso de teste:04
Entrada: 0
Saída esperada: 32.00ºF
Saída real: 32.00ºF 
Resultado: Aprovado
Analise os resultados: O resultado do teste saiu como esperado, convertendo o valor de celsius
para fahrenheit

Caso de teste:05
Entrada: 999
Saída esperada: 1830.20ºF
Saída real: 1830.20ºF
Resultado: Aprovado
Analise os resultados: O resultado do teste saiu como esperado, convertendo o valor de celsius
para fahrenheit
*/

var cel = Number(prompt("temperatura Celsius: "))
far=((cel)*(9/5)+32).toFixed(2) 
alert(far+"ºF") 

