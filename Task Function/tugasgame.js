let lagi = true; 
let match = 1; 
let pemain1skor = 0;
let pemain2skor = 0;
alert ('Halo Selamat datang digame tebak Angka \n Dalam game tebak angka diberi Kesempatan 5 kali Pertandingan dan anda diminta menembak angka 1-3 ');

while (lagi) {

  let Pemain1 = parseInt(prompt("Pemain 1 : Masukkan Angka yang Anda Pilih"));
  let Pemain2 = parseInt(prompt("Pemain 2 : Masukkan Angka yang Anda Pilih"));
  let Acak = Math.floor(Math.random() * 3) + 1;
  console.log(Acak);
  // let berhenti = true
  
 
  let cobalagi = cek(Pemain1, Pemain2);// misal false
  // Alur Permainan
    if (!cobalagi) { 
        lagi = confirm('Ulangi');
    }else{
        if (Pemain1 !== Acak && Pemain2 !== Acak) {
            console.log("Tebakan Pemain 1 dan Pemain 2 Tidak Ada yang Benar");
        }else{
            if (Pemain1 == Acak) {
                console.log("Pemain 1 Benar");
                pemain1skor++;
            }
            if (Pemain2 == Acak) {
                console.log("Pemain 2 Benar");
                  pemain2skor++;
                }
            }
            alert('Skor sementara \n Pemain 1 : ' + pemain1skor +"\n Pemain 2 : "+ pemain2skor + "\n Angka yang dicari : " + Acak); 
            
            match++;
            if (match <= 5) {
                lagi = confirm('Pertandingan Ke-' + match + '?');
            }else{
                if (pemain1skor > pemain2skor ) {
                  alert("Selamat, Pemain 1 Menang");
                  // lagi = false;
                }else if (pemain1skor < pemain2skor){
                  alert("Selamat, Pemain 1 Menang");
                  // lagi = false;
                }else{
                  alert("Kedua Pemain harus latihan lagi ya");
                }
                  alert('Pertandingan Berakhir Selamat');
                  match = 1;
                  pemain1skor = 0;
                  pemain2skor = 0;
                  lagi = confirm('Ulangi');
          
            }
        
    }
}

function cek(Pemain1, Pemain2){
  if (Pemain1 === Pemain2) {
    alert("tebakan tidak boleh sama");
    return false;
  }

  if (Pemain1 < 1 || Pemain2 < 1) {
    alert("tebakan tidak boleh lebih kecil dari 1");
    return false;
  }

  if (Pemain1 > 3 || Pemain2 > 3) {
    alert("tebakan tidak boleh lebih besar dari 3");
    return false;
  }

  if (isNaN(Pemain1) || isNaN(Pemain2)) {
    alert("salah satu player belum menebak angka");
    return false;
  }
  return true;
}
