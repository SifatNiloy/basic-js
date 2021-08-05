function bringSingara(taka) {
    console.log("singara er jnno dise", taka);
    console.log("mama singara den");
    singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 90;
var singara = bringSingara(money);
console.log("ei nen ", singara, "ta singara");