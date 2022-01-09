class Tabel {
    constructor(awal){
        this.awal = awal;
    }

    headerTabel(data) {
       var tagpembuka = "<thead><tr>";  
       var tagpenutup = "</tr></thead>";

       data.forEach(e => {
           tagpembuka += `<th>${e}</th>`;
       });

       return tagpembuka + tagpenutup;
    }

    bodyTabel(data){
        var tagpembuka = "<tbody>";
        var tagpenutup = "</tbody>";

        data.forEach((e)=>{
            tagpembuka += `
            <tr>
                <td>${e[0]}</td>
                <td>${e[1]}</td>
                <td>${e[2]}</td>
            </tr>
            `;
        });
        return tagpembuka + tagpenutup;
    }

    render(elemen){
        var html = 
        "<table class='table table-bordered'>" + this.headerTabel(this.awal.judulTabel) + this.bodyTabel(this.awal.data) + "</table>";
        elemen.innerHTML = html;       
    }

}

const tabel = new Tabel ({
    judulTabel : ["Nama", "Email", "No.HP"],
    data : [
        ["bayu rizki", "baimempatlima@gmail.com", "08642134432"],
        ["adi", "rizki@yahoo.com", "08653434324"]
    ]
});

const tab = document.getElementById("tab");
tabel.render(tab);



