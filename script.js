var hasil = document.getElementById("hasil");
var ac = document.getElementById("ac");
var hapus = document.getElementById("hapus");   // Harusnya Paling Sulit
var bagi = document.getElementById("bagi");
var n1 = document.getElementById("1");
var n2 = document.getElementById("2");
var n3 = document.getElementById("3");
var nKali = document.getElementById("*");
var n4 = document.getElementById("4");
var n5 = document.getElementById("5");
var n6 = document.getElementById("6");
var nKurang = document.getElementById("-");
var n7= document.getElementById("7");
var n8 = document.getElementById("8");
var n9 = document.getElementById("9");
var nTambah = document.getElementById("+");
var nPersen = document.getElementById("persen");
var n0 = document.getElementById("0");
var nKoma = document.getElementById(".");
var nSamaDengan = document.getElementById("sama-dengan");

var bersih = () => { hasil.innerHTML = "= ";}

var hapusD = () => {
    var teks = hasil.innerHTML;
    var tampung = "";
    for (var i = 1; i < hasil.innerHTML.length; i++ ){
        tampung += teks[i];
    }
    console.log(hasil.innerHTML);
    console.log(teks);
    console.log(teks[1]);
    console.log(tampung);
    hasil.innerHTML = tampung;
    tampung = "";
}

var tampilan = (e) => {
    hasil.innerHTML = hasil.innerHTML + e.target.innerHTML;
}

n1.addEventListener("click", tampilan);
n2.addEventListener("click", tampilan);
n3.addEventListener("click", tampilan);
n4.addEventListener("click", tampilan);
n5.addEventListener("click", tampilan);
n6.addEventListener("click", tampilan);
n7.addEventListener("click", tampilan);
n8.addEventListener("click", tampilan);
n9.addEventListener("click", tampilan);
n0.addEventListener("click", tampilan);

nKali.addEventListener("click", tampilan);
nKurang.addEventListener("click", tampilan);
nTambah.addEventListener("click", tampilan);
nKoma.addEventListener("click", tampilan);
nPersen.addEventListener("click", tampilan);
nTambah.addEventListener("click", tampilan);
nKoma.addEventListener("click", tampilan);
nKoma.addEventListener("click", tampilan);


// nSamaDengan.addEventListener("click", tampilan); // Beda Function

ac.addEventListener("click", bersih); // Beda Function

hapus.addEventListener("click", hapusD) // Beda Function