// sayısal loto için random 6 sayı üretme
function sayiUret(ustLimit = 49) {

    return Math.ceil(Math.random() * ustLimit)

}
for (var i = 1; i <= 6; i++) {
    console.log(sayiUret());
}



