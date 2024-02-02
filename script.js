var hasil = document.getElementById("hasil");
var hasilPerhitungan = document.getElementById("hasilPerhitungan")
var ac = document.getElementById("ac");
var hapus = document.getElementById("hapus");  
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

var angka = [];
var operator = [];
var countOperator = 1;
var countKoma = 1;
var tampungAngka = "";
var history = "";
var nilaiPerhitungan = 0;

function Hitung(){
    var a = parseInt(angka[1]);
    var b;

    return nilaiPerhitungan;
}

function hapusD(){
    var teks = hasil.innerHTML;
    var tampung = "";
    if(teks.length > 2 && teks[teks.length-1] == " "){
        for (var i = 0; i < (hasil.innerHTML.length-3); i++){
            tampung += teks[i];
        }
        hasil.innerHTML = tampung;
    }else{
        for (var i = 0; i < (hasil.innerHTML.length-1); i++){
            tampung += teks[i];
        }
        hasil.innerHTML = tampung;
    }
}

var tampilan = (e) => {
    history += e.target.innerHTML;
    hasil.innerHTML += e.target.innerHTML;
    tampungAngka += e.target.innerHTML;
    countOperator = 1;
    nilaiPerhitungan = Hitung();
    hasilPerhitungan.innerHTML = nilaiPerhitungan;
}

var tampilanOperator = (e) => {
    if (history != ""){
        countKoma = 1;
        if (countOperator == 1 ){
            angka += tampungAngka;
            tampungAngka = "";
            hasil.innerHTML += " " +  e.target.innerHTML + " ";
        }else{
            hapusD();
            hasil.innerHTML += " " +  e.target.innerHTML + " ";
        }
        countOperator += 1;
        if (countOperator = 2){
            operator += e.target.innerHTML;
        }
    }
}

var tampilanKoma = (e) => {
    if (tampungAngka != "" && countKoma == 1){
        hasil.innerHTML += e.target.innerHTML;
        countKoma += 1;
        countOperator += 1;
    }
    //@ts-ignore
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

nKoma.addEventListener("click", tampilanKoma);

nKali.addEventListener("click", tampilanOperator);
nKurang.addEventListener("click", tampilanOperator);
nTambah.addEventListener("click", tampilanOperator);
nPersen.addEventListener("click", tampilanOperator);
bagi.addEventListener("click", tampilanOperator);

hapus.addEventListener("click", hapusD);

ac.addEventListener("click", () => {
    history = "";
    hasil.innerHTML = "= ";
    countOperator = 1;
    countKoma = 1;
    angka = [];
    tampungAngka = "";
}); 

nSamaDengan.addEventListener("click", () => {
    hasil.innerHTML = "= ";
    countOperator = 1;
    countKoma = 1;
    angka = [];
    tampungAngka = "";
}); 


// Math.round biar di batasi koma nya