function funCall() {
    var data = [
        {name : 'bayu rizki', alamat: 'jalan jakarta', email : 'baimempatlima@gmail.com'}, 
        {name : 'rizki', alamat: 'jalan makassar', email : 'rizki1@gmail.com'}
    ]
    var html = "<table class='table table-bordered'>";

    setTimeout(() => {
        html+= '<thead>';
        html+= '<tr>';
        html+= '<td>'+'Nama' +'</td>';
        html+= '<td>'+'Alamat' +'</td>';
        html+= '<td>'+'Email' +'</td>';
        html+= '</tr>';
        html+= '</thead>';

        for (var i = 0; i < data.length; i++) {
            html+= '<tr>';
            html+= '<td>'+data[i].name+'</td>';
            html+= '<td>'+data[i].alamat+'</td>';
            html+= '<td>'+data[i].email+'</td>';
            html+= '</tr>';
        }
        document.getElementById("tab").innerHTML = html
    });
}
funCall()