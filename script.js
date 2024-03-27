//#region Akses id html
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
//#endregion
//#region Variabel
// Menampung angka dalam bentuk int dan operator dalam bentuk string
let angkaOperator = [];
// Menghitung apakah pengguna sudah boleh menekan operator (dibolehkan jika sudah ada 1 angka dan tidak di akhiri dengan titik)
let countOperator = 0;
// Menghitung apakah pengguna sudah boleh menekan titik (dibolehkan jika sudah ada 1 angka)
let countKoma = 1;
// Menampung angka / operator untuk di tampilkan pada hasil
let tampungAngka = "";
// Start Menghitung //
// End Menghitung //
//#endregion
const Hitung = () => {

}

const hapusD = () => {
    // Untuk menghapus operator berserta " "
    if(angkaOperator.length > 2 && angkaOperator[angkaOperator.length-1] == " "){
        angkaOperator.pop();
        angkaOperator.pop();
        MenampilkanDiHasil();
    }else if(angkaOperator[angkaOperator.length - 1] == "."){
        angkaOperator.pop();
        countKoma = 1;
        MenampilkanDiHasil();
    }else{
        angkaOperator.pop();
        MenampilkanDiHasil();
    }
}

const MenampilkanDiHasil = () => {
    tampungAngka = "";
    for(let i = 0; i < angkaOperator.length; i++){
        tampungAngka += angkaOperator[i]
    }
    hasil.innerHTML = "= " + tampungAngka;
}

const tampilan = (e) => {
    angkaOperator.push(e.target.innerHTML);
    MenampilkanDiHasil();
    countOperator = 1;
    // Ketika sudah bisa throw dan try catch
    //nilaiPerhitungan = Hitung();
    // hasilPerhitungan.innerHTML = nilaiPerhitungan;
}
// Method untuk menampilkan operator 
const tampilanOperator = (e) => {
    // Jika pengguna belum pernah mengklik angka maka operator belum boleh ada
    // Kalau pengguna baru pertama kali menekan operator 
    if (countOperator == 1 ){
        angkaOperator.push(" " + e.target.innerHTML + " ");
        MenampilkanDiHasil();
        countOperator = 2;
        countKoma = 1;
    }else if(countOperator > 1){
        // Kalau countOperator > 1 maka akan menghapus operator sebelumnya berserta " "
        hapusD();
        // Dan akan menggantinya dengan operator yang baru di klik
        angkaOperator.push(" " + e.target.innerHTML + " ");
        MenampilkanDiHasil();
        countKoma = 1;
    }
}

let tampilanKoma = (e) => {
    if (countKoma == 1 && angkaOperator.length > 0){
        angkaOperator.push(e.target.innerHTML);
        MenampilkanDiHasil();
        countKoma = 2;
        countOperator = 0;
    }
}

//#region Event Listener
//#region Tampilan Angka
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
//#endregion
//#region Tampilan Diluar Angka
nKoma.addEventListener("click", tampilanKoma);

nKali.addEventListener("click", tampilanOperator);
nKurang.addEventListener("click", tampilanOperator);
nTambah.addEventListener("click", tampilanOperator);
nPersen.addEventListener("click", tampilanOperator);
bagi.addEventListener("click", tampilanOperator);
//#endregion
//#region Tampilan Hapus
hapus.addEventListener("click", hapusD);

ac.addEventListener("click", () => {
    angkaOperator = [];
    hasil.innerHTML = "= ";
    countOperator = 0;
    countKoma = 1;
    tampungAngka = "";
}); 
//#endregion
nSamaDengan.addEventListener("click", () => {
    console.log(angkaOperator);
    console.log(angkaOperator.join());
    console.log(angkaOperator.join().split(" "));
    console.log(angkaOperator.map((data,i) => Number.isInteger(data[i]) == true? Number.parseInt(data[i]): false));
    console.log(angkaOperator.map((data,i) => console.log(i)));
    console.log(angkaOperator.map((data,i) => console.log(data)));
    Hitung();
    countOperator = 0;
    tampungAngka = "";
    countKoma = 1;
    hasil.innerHTML = "= ";
}); 
//#endregion
// Math.round biar di batasi koma nya