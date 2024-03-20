let hasil = document.getElementById("hasil");
let hasilPerhitungan = document.getElementById("hasilPerhitungan")
let ac = document.getElementById("ac");
let hapus = document.getElementById("hapus");  
let bagi = document.getElementById("bagi");
let n1 = document.getElementById("1");
let n2 = document.getElementById("2");
let n3 = document.getElementById("3");
let nKali = document.getElementById("*");
let n4 = document.getElementById("4");
let n5 = document.getElementById("5");
let n6 = document.getElementById("6");
let nKurang = document.getElementById("-");
let n7= document.getElementById("7");
let n8 = document.getElementById("8");
let n9 = document.getElementById("9");
let nTambah = document.getElementById("+");
let nPersen = document.getElementById("persen");
let n0 = document.getElementById("0");
let nKoma = document.getElementById(".");
let nSamaDengan = document.getElementById("sama-dengan");

let angka = [];
let operator = [];
let countOperator = 1;
let countKoma = 1;
let tampungAngka = "";
let history = "";
let nilaiPerhitungan = 0;

function Hitung(){
    console.log(angka);
    console.log(operator);
    console.log(countOperator);
    console.log(countKoma);
    console.log(tampungAngka);
    console.log(history);
    console.log(nilaiPerhitungan);
}

function hapusD(){
    let teks = hasil.innerHTML;
    let tampung = "";
    if(teks.length > 2 && teks[teks.length-1] == " "){
        for (let i = 0; i < (hasil.innerHTML.length-3); i++){
            tampung += teks[i];
        }
        hasil.innerHTML = tampung;
    }else{
        for (let i = 0; i < (hasil.innerHTML.length-1); i++){
            tampung += teks[i];
        }
        hasil.innerHTML = tampung;
    }
}

const tampilan = (e) => {
    history += e.target.innerHTML;
    hasil.innerHTML += e.target.innerHTML;
    tampungAngka += e.target.innerHTML;
    countOperator = 1;
    // nilaiPerhitungan = Hitung();
    // hasilPerhitungan.innerHTML = nilaiPerhitungan;
}

let tampilanOperator = (e) => {
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

let tampilanKoma = (e) => {
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