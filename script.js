/* MENU A SCOMPARSA*/
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});


/* RADIO */
var icon = document.querySelector('.bi-play-circle-fill');

var soundwaveIcon = document.querySelector('.bi-soundwave');

icon.addEventListener('click', function() {
    if (icon.classList.contains('bi-play-circle-fill')) {
        // FROM PLAY TO STOP
        icon.classList.remove('bi-play-circle-fill');
        icon.classList.add('bi-stop-circle-fill');

        soundwaveIcon.style.color = '#163860';
    } else {
        //FROM STOP TO PLAY
        icon.classList.remove('bi-stop-circle-fill');
        icon.classList.add('bi-play-circle-fill');

        soundwaveIcon.style.color = '#D2D2D2';
    }
});

/* COUNTDOWN */
// Imposta la data e l'ora di fine del countdown
var countDownDate = new Date("Jul 26, 2024 19:30:00").getTime();

// Aggiorna il countdown ogni secondo
var countdownInterval = setInterval(function() {

    // Ottieni la data e l'ora attuali
    var now = new Date().getTime();

    // Trova la differenza tra ora e la data di fine
    var distance = countDownDate - now;

    // CALCOLO GIORNI-ORE-MINUTI-SECONDI
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // Se il countdown è finito, visualizza un messaggio
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "FINISHED COUNTDOWN";
    }
}, 1000);



/* ALARM ABBONAMENTO */
/*document.querySelector('#bottom-element .close-btn').addEventListener('click', function() {
    document.getElementById('bottom-element').style.display = 'none';
});*/