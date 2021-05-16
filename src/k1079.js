//ОФОРМЛЕНИЕ
var button = document.querySelector(".start79");
var answer = document.querySelector(".answer79");
var div1069 = document.querySelector(".k1079");
var p1dash = document.createElement("p1");
p1dash.innerHTML="-";
var p2dash = document.createElement("p1");
p2dash.innerHTML="В -";
var p3dash = document.createElement("p1");
p3dash.innerHTML="-";

//НОМИНАЛЬНОЕ НАПРЯЖЕНИЕ
var voltage79 = document.createElement("select");
    var voltage10 = document.createElement("option");
    voltage10.innerHTML = "10";
    voltage10.style.display = "none";
    var voltage16 = document.createElement("option");
    voltage16.innerHTML = "16";
    voltage16.selected = "true";
    var voltage25 = document.createElement("option");
    voltage25.innerHTML = "25";
    voltage25.style.display = "none";
    var voltage50 = document.createElement("option");
    voltage50.innerHTML = "50";
    var voltage100 = document.createElement("option");
    voltage100.innerHTML = "100";
    var voltage250 = document.createElement("option");
    voltage250.innerHTML = "250";
    var voltage500 = document.createElement("option");
    voltage500.innerHTML = "500";

    voltage79.appendChild(voltage10);
    voltage79.appendChild(voltage16);
    voltage79.appendChild(voltage25);
    voltage79.appendChild(voltage50);
    voltage79.appendChild(voltage100);
    voltage79.appendChild(voltage250);
    voltage79.appendChild(voltage500);

div1069.append(voltage79);
div1069.append(p2dash);

//ЕМКОСТЬ
var capacity = document.createElement("input");
div1069.append(capacity);

//ЕДЕНИЦЫ ИЗМЕРЕНИЯ ЕМКОСТИ
var unitCap = document.createElement("select");
    var unitPf = document.createElement("option");
    unitPf.innerHTML = "пФ";
    var unitMkf = document.createElement("option");
    unitMkf.innerHTML = "мкФ";

unitCap.appendChild(unitPf);
unitCap.appendChild(unitMkf);

div1069.append(unitCap);

//ДОПУСТИМОЕ ОТКЛОНЕНИЕ
var percent = document.createElement("select");
    var percent0 = document.createElement("option");
    percent0.innerHTML = "+-0.25пФ";
    var percent1 = document.createElement("option");
    percent1.innerHTML = "+-0.5пФ";
    var percent2 = document.createElement("option");
    percent2.innerHTML = "+-5%";
    var percent3 = document.createElement("option");
    percent3.innerHTML = "+-10%";
    percent3.selected = "true"
    var percent4 = document.createElement("option");
    percent4.innerHTML = "+-20%";
    var percent5 = document.createElement("option");
    percent5.innerHTML = "+50-20%";
    var percent6 = document.createElement("option");
    percent6.innerHTML = "+80-20%";

percent.appendChild(percent0);
percent.appendChild(percent1);
percent.appendChild(percent2);
percent.appendChild(percent3);
percent.appendChild(percent4);
percent.appendChild(percent5);
percent.appendChild(percent6);

div1069.append(percent);

//ТИП ДИЭЛЕКТРИКА
var typeD = document.createElement("select");
    var typeMP0 = document.createElement("option");
    typeMP0.innerHTML = "МП0";
    var typeN30 = document.createElement("option");
    typeN30.innerHTML = "Н30";
    var typeN90 = document.createElement("option");
    typeN90.innerHTML = "Н90";
    
typeD.appendChild(typeMP0);
typeD.appendChild(typeN30);
typeD.appendChild(typeN90);

div1069.append(typeD);

//ФУНКЦИЯ ВАРИАТИВНОСТИ
typeD.addEventListener("change", (event) => {
    if (typeMP0.selected) {
        voltage16.selected="true";
        hiddenVoltage("none","","none","","","");
    } else if (typeN30.selected) {
        voltage10.selected="true";
        hiddenVoltage("","none","","","","","");
    } else if (typeN90.selected) {
        voltage10.selected="true";
        hiddenVoltage("","none","","","none","none","none")
    }
})

var hiddenVoltage = function (a,b,c,d,e,f,g) {
    voltage10.style.display = a;
    voltage16.style.display = b;
    voltage25.style.display = c;
    voltage50.style.display = d;
    voltage100.style.display = e;
    voltage250.style.display = f;
    voltage500.style.display = g;
}








button.addEventListener('click', function(event) {
    answer.style.color="black";
    if (capacity.value) {
        var chip = korpus("К10-79", typeD.value, voltage79.value, capacity.value, unitCap.value);
        if (chip) {
            answer.innerHTML = "Кондесатор CHIP "+ chip +" "+ capacity.value + " " + unitCap.value +" " + percent.value;
        } else {
            answer.innerHTML = "Некорректные данные"; 
        } 
    } else {
        answer.innerHTML = "Проверьте правильность заполения формы";
    }
    
});



