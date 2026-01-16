const card = document.getElementById('card');
let lastMouseX = 0;

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // 1. 3D Rotation Math
    const rotateY = ((clientX / innerWidth) - 0.5) * 60;
    const rotateX = ((clientY / innerHeight) - 0.5) * -60;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    // 2. Speed-Based Emotion (Surprise)
    const mouseSpeed = Math.abs(clientX - lastMouseX);
    if (mouseSpeed > 100) {
        card.setAttribute('data-emotion', 'surprise');
        setTimeout(() => card.setAttribute('data-emotion', 'neutral'), 500);
    }
    lastMouseX = clientX;
});

// 3. Click-to-Smile Interaction
document.addEventListener('mousedown', () => card.setAttribute('data-emotion', 'smile'));
document.addEventListener('mouseup', () => card.setAttribute('data-emotion', 'neutral'));

// 4. Random Sadness (to make it feel human)
setInterval(() => {
    if (card.getAttribute('data-emotion') === 'neutral') {
        card.setAttribute('data-emotion', 'sad');
        setTimeout(() => card.setAttribute('data-emotion', 'neutral'), 1500);
    }
}, 8000);
