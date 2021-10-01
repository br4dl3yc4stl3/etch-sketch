function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '1';
    table.width = '100%';
    table.display = 'table';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 1; i <= 16; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 1; j <= 16; j++) {
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode("Cell " + i + "," + j));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  addTable();