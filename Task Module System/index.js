import {Tabel } from "./module";

const tabel = new Tabel ({
    judulTabel : ["Nama", "Email", "No.HP"],
    data : [
        ["bayu rizki", "baimempatlima@gmail.com", "08642134432"],
        ["adi", "rizki@yahoo.com", "08653434324"],
        ["rahmat", "rahmat@yahoo.com", "08653434324"]
    ]
  });
  
const tab = document.getElementById("tab");
tabel.render(tab);

