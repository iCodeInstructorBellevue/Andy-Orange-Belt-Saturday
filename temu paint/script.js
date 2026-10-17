window.addEventListener('load', () => {
    // --- Get DOM Elements ---
    const canvas = document.getElementById('whiteboard');
    const colorSwatches = document.querySelectorAll('color-swatch');
    const brushSizeSlider = document.getElementById('brush-size');
    const clearButton = document.getElementById('clear-btn');

    // Establish the drawing context
    const ctx = canvas.getContext ('2d');

    // --- State ---
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function setDefaultCanvasSettings(){
        // Set properties for smooth lines
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        // Set properties from the UI controls
        ctx.lineWidth = brushSizeSlider.ariaValueMax;
        ctx.strokeStyle = document.querySelector('.color-swatch.active').dataset.color;
    }

    function handleColorClick(e){
        // Remove 'active' class from all swatches
        colorSwatches.forEach(swatch => swatch.classList.remove('active'));

        // Add 'active' class to the clicked swatch
        const clickedSwatch = e.target;
        clickedSwatch.classList.add('active');

        // Update drawing color
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

    function stopDrawing(){
        isDrawing = false;
    }

    function draw(e){
        if (!isDrawing) return;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    function resizeCanvas(){
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = window.innerHeight * 0.6;
        setDefaultCanvasSettings();
    }

    resizeCanvas();

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    colorSwatches.forEach(swatch => swatch.addEventListener('click', handleColorClick));
    brushSizeSlider.addEventListener('input', handleBrushSizeChange);
    clearButton.addEventListener('click', clearCanvas);

    window.addEventListener('resize', resizeCanvas);
})