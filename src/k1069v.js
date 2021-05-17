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
    var type69MP0 = document.createElement("option");
    type69MP0.innerHTML = "МП0";
    var type69N30 = document.createElement("option");
    type69N30.innerHTML = "Н30";
    var type69N90 = document.createElement("option");
    type69N90.innerHTML = "Н90";
    
typeD69.appendChild(type69MP0);
typeD69.appendChild(type69N30);
typeD69.appendChild(type69N90);

div1069.append(typeD69);
div1069.append(p1dash);
//НОМИНАЛЬНОЕ НАПРЯЖЕНИЕ
var voltage69 = document.createElement("select");
    var voltage6925 = document.createElement("option");
    voltage6925.innerHTML = "25";
    voltage6925.style.display = "none";
    var voltage6950 = document.createElement("option");
    voltage6950.innerHTML = "50";
    voltage6950.selected = "true";
    var voltage69100 = document.createElement("option");
    voltage69100.innerHTML = "100";
    var voltage69250 = document.createElement("option");
    voltage69250.innerHTML = "250";
    var voltage69500 = document.createElement("option");
    voltage69500.innerHTML = "500";

voltage69.appendChild(voltage6925);
voltage69.appendChild(voltage6950);
voltage69.appendChild(voltage69100);
voltage69.appendChild(voltage69250);
voltage69.appendChild(voltage69500);

div1069.append(voltage69);
div1069.append(p2dash);
//ФУНКЦИЯ ВАРИАТИВНОСТИ
typeD69.addEventListener("change", (event) => {
    if (type69MP0.selected) {
        voltage6950.selected="true";
        hiddenVoltage69("none","","","","");
    } else if (type69N30.selected) {
        voltage6925.selected="true";
        hiddenVoltage69("","","","","");
    } else if (type69N90.selected) {
        voltage6925.selected="true";
        hiddenVoltage69("","","none","none","none")
    }
})

var hiddenVoltage69 = function (a,b,c,d,e) {
    voltage6925.style.display = a;
    voltage6950.style.display = b;
    voltage69100.style.display = c;
    voltage69250.style.display = d;
    voltage69500.style.display = e;
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