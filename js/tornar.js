var botoTornar = document.getElementById('boto-tornar');

if (botoTornar) {
    botoTornar.addEventListener('click', function (event) {
        if (window.history.length > 1) {
            event.preventDefault();
            history.back();
        }
    });
}