var hasil = document.getElementById("hasil");
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
var countOperator = 1;
var countKoma = 1;
var tampungAngka = "";
var history = "";

function refresh(nilaiBerubah){
    document.addEventListener('DOMContentLoaded', function(e, nilaiBerubah) { 
        document.getElementById('hasil').value = nilaiBerubah;
    });
}

function Hitung(){

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
    refresh(e);
}

var tampilan = (e) => {
    history += e.target.innerHTML;
    hasil.innerHTML += e.target.innerHTML;
    tampungAngka += e.target.innerHTML;
    countOperator = 1;
    console.log(hasil.attributes)
    refresh(e);
}

var tampilanOperator = (e) => {
    if (history != ""){
        countKoma = 1;
        if (countOperator == 1 ){
            tampungAngka = "";
            hasil.innerHTML += " " +  e.target.innerHTML + " ";
        }else{
            hapusD();
            hasil.innerHTML += " " +  e.target.innerHTML + " ";
        }
        countOperator += 1;
    }
    refresh(e);
}

var tampilanKoma = (e) => {
    if (tampungAngka != "" && countKoma == 1){
        hasil.innerHTML += e.target.innerHTML;
        countKoma += 1;
    }
    //@ts-ignore
    refresh(e);
}

var samaDengan = () => {
    hasil.innerHTML = "= ";
    countOperator = 1;
    countKoma = 1;
    angka = [];
    tampungAngka = "";
    refresh(e);
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

nSamaDengan.addEventListener("click", samaDengan); 
nSamaDengan.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        samaDengan();
    }
    refresh(e);
}); 

ac.addEventListener("click", () => {
    history = "";
    hasil.innerHTML = "= ";
    countOperator = 1;
    countKoma = 1;
    angka = [];
    tampungAngka = "";
    refresh(e);
}); 


// Math.round biar di batasi koma nya