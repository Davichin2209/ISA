// Retira la clase "js-loading" del <body>.
// Mientras esa clase esta presente, la regla ".js-loading * { animation-play-state: paused }"
// de css/main.css mantiene pausadas todas las animaciones (flores, luces, hierba);
// al quitarla, arrancan todas a la vez.
function unlockAnimations() {
    document.body.classList.remove("js-loading");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", unlockAnimations);
} else {
    unlockAnimations();
}
