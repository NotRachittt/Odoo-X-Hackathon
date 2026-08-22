document.addEventListener('DOMContentLoaded', function () {
    const svg = document.getElementById('travelerSvg');
    const leftPupil = document.getElementById('pupilLeft');
    const rightPupil = document.getElementById('pupilRight');
    if (!svg || !leftPupil || !rightPupil) return;

    const eyes = [
        { el: leftPupil, cx: 176, cy: 163 },
        { el: rightPupil, cx: 224, cy: 163 }
    ];
    const maxOffset = 4.5;
    const reachRadius = 60;

    function updateEyes(clientX, clientY) {
        const rect = svg.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        eyes.forEach(function (eye) {
            const eyeScreenX = rect.left + (eye.cx / 420) * rect.width;
            const eyeScreenY = rect.top + (eye.cy / 460) * rect.height;
            const dx = clientX - eyeScreenX;
            const dy = clientY - eyeScreenY;
            const dist = Math.min(Math.hypot(dx, dy), reachRadius);
            const angle = Math.atan2(dy, dx);
            const offset = (dist / reachRadius) * maxOffset;
            eye.el.setAttribute('cx', eye.cx + Math.cos(angle) * offset);
            eye.el.setAttribute('cy', eye.cy + Math.sin(angle) * offset);
        });
    }

    window.addEventListener('mousemove', function (e) { updateEyes(e.clientX, e.clientY); });
    updateEyes(window.innerWidth * 0.25, window.innerHeight * 0.4);
});
