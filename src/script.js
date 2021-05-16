var originalEntry = document.querySelector(".original");
var answerL = document.querySelector(".answerList");
let list = 0;
document.getElementById('upload').addEventListener('change', handleFileSelect, false);

var base = [];

var ExcelToJSON = function() {

    this.parseExcel = function(file) {
    var reader = new FileReader();

    reader.onload = function(e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
        type: 'binary'
        });
        workbook.SheetNames.forEach(function(sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);
        // console.log(JSON.parse(json_object));
        // console.log(JSON.parse(json_object));
        for (let string of JSON.parse(json_object).values()) {
            var originalEnemy = document.createElement("li");
            originalEnemy.innerHTML = string["ORIGINAL"];
            originalEntry.appendChild(originalEnemy);
            var listEnemy = document.createElement("li");
            listEnemy.innerHTML=("Кондесатор CHIP "+ korpus(string["CHIP"], string["TYPE"], string["V"], string["C"], string["UNIT"], string["SHELL"]) +" "+ string["C"] + " " + string["UNIT"] + " " + string["PERC"]);
            answerL.appendChild(listEnemy);
        }

        jQuery( '#xlx_json' ).val( json_object );
        })
    };

    reader.onerror = function(ex) {
        console.log(ex);
    };

    reader.readAsBinaryString(file);
    };
};


function handleFileSelect(evt) {
var files = evt.target.files; // FileList object
var xl2json = new ExcelToJSON();
xl2json.parseExcel(files[0]);
}