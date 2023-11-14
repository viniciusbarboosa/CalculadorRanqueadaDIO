let vitoria=70;
let derrota=50;

function calcularSaldo(vitorias,derrotas){
    return vitorias-derrotas
}

function calcularNivel(vitorias,derrotas){
    return vitorias-derrotas
}

let saldo = calcularSaldo(vitoria,derrota);

function calcularNivel(vitorias){
    if (vitorias<=10){
        return "FERRO"
    }else if(vitorias<=20){
        return "BRONZE"
    }else if(vitorias<=50){
        return "PRATA"
    }else if(vitorias<=80){
        return "OURO"
    }else if(vitorias<=90){
        return "DIAMANTE"
    }else if(vitorias<=100){
        return "LENDÁRIO"
    }else{
        return "IMORTAL"
    }
}

let nivel = calcularNivel(vitoria)

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)