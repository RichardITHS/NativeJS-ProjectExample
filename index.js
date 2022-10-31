"use strict";
//Inhämta mina inputs

const button = document.querySelector('#btn');
const results = document.getElementById('result');
const button2 = document.querySelector('#btn2');
button2.style.display = 'none';

function country() {
    let selectElement = document.querySelector('#country');
    let country = selectElement.value;
    let dataUrl = "http://universities.hipolabs.com/search?country=" + country;

    fetch(dataUrl)

        .then(response => response.json())


        .then((data) => {
            data.forEach(uni => {
                results.innerHTML += `
      <div class="result">
      <table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Website</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${uni.name}</td>
            <td><a href="${uni.web_pages}">${uni.web_pages}</a></td>
        </tr>
    </tbody>
</table>
      </div>
      `
            })


        });
}

button.addEventListener('click', () => {
    // 👇️ hide button
    const button = document.querySelector('#btn');
    let selectElement = document.querySelector('#country');
    selectElement.style.display = 'none';


    // 👇️ show div
    const button2 = document.querySelector('#btn2');
    button2.style.display = 'block';
    button.style.display = 'none';



});

function refresh() {
    location.reload();
}

var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));


    document.getElementById("days").innerHTML = days;


}, 1000);