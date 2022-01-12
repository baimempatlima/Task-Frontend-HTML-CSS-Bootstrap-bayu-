const table = document.getElementById("data");
table.innerHTML = loading();

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(response => table.innerHTML = render(response));

function render(res) {
    let table = '';
    res.forEach(m => table += showTable(m));
    return table;
}

function render(result) {
      let table = '';
      result.forEach(m => table += showTable(m));
      return table;
  }
  
function showTable(gdata) {
  return `<tr>
  <td>${gdata.id}</td>
  <td>${gdata.name}</td>
  <td>${gdata.username}</td>
  <td>${gdata.email}</td>
  <td>
    ${gdata.address.street},
    ${gdata.address.suite}, 
    ${gdata.address.city}
   </td>
  <td>${gdata.company.name}</td>
</tr>`;
}


function loading() {
  return `<tr>
    <td colspan="6" class="text-center">Loading...</td>
  </tr>`;
}
