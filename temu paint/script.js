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

    function resizeCanvas(){
        
    }

})