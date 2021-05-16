var button1 = document.querySelector(".start69");
var answer1 = document.querySelector(".answer69");

var div1069 = document.querySelector(".k1069v");
var p1dash = document.createElement("p1");
p1dash.innerHTML="-";
var p2dash = document.createElement("p1");
p2dash.innerHTML="В -";
var p3dash = document.createElement("p1");
p3dash.innerHTML="-";
//ТИП ДИЭЛЕКТРИКА
var typeD69 = document.createElement("select");
    var typeMP0 = document.createElement("option");
    typeMP0.innerHTML = "МП0";
    var typeN30 = document.createElement("option");
    typeN30.innerHTML = "Н30";
    var typeN90 = document.createElement("option");
    typeN90.innerHTML = "Н90";
    
typeD69.appendChild(typeMP0);
typeD69.appendChild(typeN30);
typeD69.appendChild(typeN90);

div1069.append(typeD69);
div1069.append(p1dash);
//НОМИНАЛЬНОЕ НАПРЯЖЕНИЕ
var voltage69 = document.createElement("select");
    var voltage25 = document.createElement("option");
    voltage25.innerHTML = "25";
    voltage25.style.display = "none";
    var voltage50 = document.createElement("option");
    voltage50.innerHTML = "50";
    voltage50.selected = "true";
    var voltage100 = document.createElement("option");
    voltage100.innerHTML = "100";
    var voltage250 = document.createElement("option");
    voltage250.innerHTML = "250";
    var voltage500 = document.createElement("option");
    voltage500.innerHTML = "500";

voltage69.appendChild(voltage25);
voltage69.appendChild(voltage50);
voltage69.appendChild(voltage100);
voltage69.appendChild(voltage250);
voltage69.appendChild(voltage500);

div1069.append(voltage69);
div1069.append(p2dash);
//ФУНКЦИЯ ВАРИАТИВНОСТИ
typeD69.addEventListener("change", (event) => {
    if (typeMP0.selected) {
        voltage50.selected="true";
        hiddenVoltage("none","","","","");
    } else if (typeN30.selected) {
        voltage25.selected="true";
        hiddenVoltage("","","","","");
    } else if (typeN90.selected) {
        voltage25.selected="true";
        hiddenVoltage("","","none","none","none")
    }
})

var hiddenVoltage = function (a,b,c,d,e) {
    voltage25.style.display = a;
    voltage50.style.display = b;
    voltage100.style.display = c;
    voltage250.style.display = d;
    voltage500.style.display = e;
}

//ТИП КОРПУСА
var shellType = document.createElement("select");
    var shell2012 = document.createElement("option");
    shell2012.innerHTML = "2012М";
    var shell3216 = document.createElement("option");
    shell3216.innerHTML = "3216М";
    var shell3225 = document.createElement("option");
    shell3225.innerHTML = "3225М";
    var shell4532 = document.createElement("option");
    shell4532.innerHTML = "4532М";
    var shell5750 = document.createElement("option");
    shell5750.innerHTML = "5750М";

shellType.appendChild(shell2012);
shellType.appendChild(shell3216);
shellType.appendChild(shell3225);
shellType.appendChild(shell4532);
shellType.appendChild(shell5750);

div1069.append(shellType);
div1069.append(p3dash);
//ЕМКОСТЬ
var capacity69 = document.createElement("input");
div1069.append(capacity69);

//ЕДЕНИЦЫ ИЗМЕРЕНИЯ ЕМКОСТИ
var unitCap69 = document.createElement("select");
    var unitPf = document.createElement("option");
    unitPf.innerHTML = "пФ";
    var unitMkf = document.createElement("option");
    unitMkf.innerHTML = "мкФ";

unitCap69.appendChild(unitPf);
unitCap69.appendChild(unitMkf);

div1069.append(unitCap69);

//ДОПУСТИМОЕ ОТКЛОНЕНИЕ
var percent69 = document.createElement("select");
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

percent69.appendChild(percent1);
percent69.appendChild(percent2);
percent69.appendChild(percent3);
percent69.appendChild(percent4);
percent69.appendChild(percent5);
percent69.appendChild(percent6);

div1069.append(percent69);


button1.addEventListener('click', function(event) {
    answer1.style.color="black";
    if (capacity69.value) {
        var chip = korpus("К10-69В", typeD69.value, voltage69.value, capacity.value, unitCap.value, shellType.value);

        console.log()
        answer1.innerHTML = "Кондесатор CHIP " + chip + " " + capacity69.value + " " + unitCap69.value +" " + percent69.value;
    } else {
        answer1.innerHTML = "Проверьте правильность заполения формы";
    }
    // if (capacity.value) {
    //     var chip = korpus("К10-79", typeD.value, voltage79.value, capacity.value, unitCap.value);
    //     if (chip) {
    //         answer.innerHTML = "Кондесатор CHIP "+ chip +" "+ capacity.value + " " + unitCap.value +" " + percent.value;
    //     } else {
    //         answer.innerHTML = "Некорректные данные"; 
    //     } 
    // } else {
    //     answer.innerHTML = "Проверьте правильность заполения формы";
    // }
    
});