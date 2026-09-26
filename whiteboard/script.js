window.addEventListener('load', () => {
    const canvas = document.getElementById('whiteboard');
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const brushSizeSlider = document.getElementById('brush-size');
    const clearButton = document.getElementById('clear-btn');

    const ctx = canvas.getContext('2d');

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function setDefaultCanvasSettings(){

    }

    function setDefaultCanvasSettings(){
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.lineWidth = brushSizeSlider.value;
        ctx.strokeStyle = document.querySelector('.color-swatch.active').dataset.color;
    }

    function handleColorClick(e){
        colorSwatches.forEach(swatch => swatch.classList.remove('active'));

        const clickedSwatch = e.target;
        clickedSwatch.classList.add('active');

        ctx.strokeStyle = clickedSwatch.dataset.color;
    }

    function handleBrushSizeChange(e){
        ctx.lineWidth = e.target.value;
    }

    function clearCanvas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

