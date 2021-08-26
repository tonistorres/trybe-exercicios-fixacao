/*
1-Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
2-Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
3-Implemente condicionais para que:
*Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
*Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
*Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
*Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
*Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
4-Agora imprima a variável message fora das suas condições.*/
const currenHour = 12;
let mensagem = "";

if (currenHour >= 22) {
    mensagem = "ão deveríamos comer nada, é hora de dormir";
} else if (currenHour >= 18 && currenHour < 22) {
    mensagem = "Rango da noite, vamos jantar :D";
} else if (currenHour >= 14 && currenHour < 18) {
    mensagem = "Vamos fazer um bolo pro café da tarde";
} else if (currenHour > 11 && currenHour < 14) {
    mensagem = "Hora do almoço!!!";
} else if (currenHour > 4 && currenHour < 11) {
    mensagem = "Hmmm, cheiro de café recém passado";
} else {
    mensagem = "fora das suas condições";
}

let weekDay = 'quarta-feira';

if (
    weekDay === 'segunda-feira' ||
    weekDay === 'terça-feira' ||
    weekDay === 'quarta-feira' ||
    weekDay === 'quinta-feira' ||
    weekDay === 'sexta-feira'

) {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');

}else if(weekDay==="Sabado" ||weekDay==="Domingo"){
console.log('FINALMENTE, descando merecido UwU');
}else{
    console.log('weekDay não valido!');
}




