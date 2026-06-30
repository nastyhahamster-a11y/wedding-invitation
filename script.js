const weddingDate = new Date("September 19, 2026 13:30:00").getTime();


function updateTimer() {


    const now = new Date().getTime();


    const distance = weddingDate - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );



    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


}


updateTimer();


setInterval(updateTimer, 1000);

function openForm(){

window.open(
"https://docs.google.com/forms/d/e/1FAIpQLSeHmnXSCs3sijuhVCTVgt_0nidZ1N-tB6UA80Iv-CqQOsdlIg/viewform?usp=header",
"_blank"
);

}

function setPlace(place) {

    const map = document.getElementById("mapFrame");

    const buttons = document.querySelectorAll(".map-buttons button");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (place === "zags") {
        map.src = "https://yandex.ru/map-widget/v1/?ll=40.134759%2C48.042818&z=16&pt=40.134759%2C48.042818%2Cpm2rdm";
        buttons[0].classList.add("active");
    }

    if (place === "cafe") {
        map.src = "https://yandex.ru/map-widget/v1/?ll=40.122731%2C48.015233&z=16&pt=40.122731%2C48.015233%2Cpm2rdm";
        buttons[1].classList.add("active");
    }

}