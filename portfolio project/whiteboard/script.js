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

    function startDrawing(e){
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    function stopDrawing(e){
        isDrawing = false;
    }

    function draw(e){
        if (!isDrawing) return;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        [lastX, lastY] = [e.offsetX, e.offsetY]
    }

    function resizeCanveas(){
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = window.innerHeight * 0.6;
        setDefaultCanvasSettings(); 
    }

    resizeCanveas();

    canvas.addEventListener('mousedown', startDrawing);

    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('mouseup', stopDrawing);

    canvas.addEventListener('mouseout', stopDrawing);

    colorSwatches.forEach(swatch => swatch.addEventListener('click', handleColorClick));

    brushSizeSlider.addEventListener('input', handleBrushSizeChange);

    clearButton.addEventListener('click', clearCanvas);

    window.addEventListener('resize', resizeCanveas);
});