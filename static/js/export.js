var count = 0;
function addRow(tableid) {
    var table = document.getElementById(tableid);
    var rowlen = table.rows.length;    
    var row = table.insertRow(rowlen-1);    
    row.insertCell(0).innerHTML = '<input type="text" name="title"/>';  
    row.insertCell(1).innerHTML = '<input type="text" name="element"/>';  
    // row.insertCell(2).innerHTML = '<button type="button" onclick="delRow("table1")>행 삭제</button>';
    row.insertCell(2).innerHTML = '<button type="button" onclick="delTableRow(this)">행 삭제</button>';
    row.insertCell(3).innerHTML = "네번째";
    row.insertCell(4).innerHTML = "다섯번째";
    count++;
}

function delRow(tableid) {
    var table = document.getElementById(tableid);
    var checkboxArray = document.getElementsByName('checkboxObj');
    for (var i = checkboxArray.length-1; i>=0; i--) {
        var check = checkboxArray[i].checked;
        if (check) {
            console.log(i);
            table.deleteRow(i+1);
            count--;
        }
    }
}

 //Clear form once submitted
 function clearForm(){
    document.getElementById("form").reset();
}

function submitForm() {
  var formData = $("form").serializeArray();
  let csv = ""; // accept data as CSV

  formData.forEach(function(item) {
    csv += item.value + ","; // concat form value on csv var and add ; to create columns (you can change to , if want)
  });

  var encodedUri = encodeURI(csv);

  let Data = new FormData();
  Data.append("data",encodedUri)
  var request = new XMLHttpRequest();
  request.open("POST","http://127.0.0.1:5000/save_table");
  request.send(Data);

  clearForm();
}


function delTableRow(obj) {
    var table = document.getElementById("table1");
    var index = $(obj).parent().parent().index();
    console.log(index);
    table.deleteRow(index);
} 