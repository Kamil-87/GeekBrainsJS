'use strict';

function taskOne() {
    let temperatureCelsius = +prompt(`Введите температуру по Цельсию,Tc`, `-22`);
    let temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;
    alert(temperatureFahrenheit.toFixed(1));
}

function taskTwo() {
    let name = document.getElementById('userName').value;
    let admin = name;

    document.getElementById('outputAdmin').innerHTML = 'Имя админа: ' + admin;
}

function taskThree() {
    let numType = 1000;
    let stringType = '108';
    let answer = numType + stringType;
    document.getElementById('outputSum').innerHTML = '<p>'+ answer +'</p>';
}
