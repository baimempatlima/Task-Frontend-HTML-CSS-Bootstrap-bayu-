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
              <tr>`;
                  for (var i = 0;  i < e.length; i++) {
                      tagpembuka += `<td>${e[i]}</td>`;
                  }
               tagpembuka += `
              </tr>`;          
         
      });
      return tagpembuka + tagpenutup;
  }

  render(elemen){
      var html = 
      "<table class='table table-bordered'>" + this.headerTabel(this.awal.judulTabel) + this.bodyTabel(this.awal.data) + "</table>";
      elemen.innerHTML = html;       
  }

}
export { Tabel };
  