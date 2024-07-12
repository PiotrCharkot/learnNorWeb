window.addEventListener('scroll', () => {
    const backgroundLogo = document.getElementById('background-logo');
    const scrollPosition = window.scrollY;
    const maxOpacity = 0.3;
    const scrollFactor = 10000; // Increase this value to slow down the appearance rate

    if (scrollPosition > 0) {
        let opacity = scrollPosition / scrollFactor;
        if (opacity > maxOpacity) opacity = maxOpacity;
        backgroundLogo.style.opacity = opacity;
    } else {
        backgroundLogo.style.opacity = 0;
    }
});
