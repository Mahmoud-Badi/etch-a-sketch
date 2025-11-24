window.onload = () => {
    const defaultColor = 'rgba(255, 255, 255, 0.9)';
    let currentColor = '#000000';
    let currentMode = 'draw';
    
    const colorPicker = document.getElementById('color-input');
    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
        currentMode = 'draw';
    });
    
    const rainbowBtn = document.getElementById('rainbow-button');
    rainbowBtn.addEventListener('click', () => {
        currentMode = 'rainbow';
    });
    
    const eraserBtn = document.getElementById('eraser-button');
    eraserBtn.addEventListener('click', () => {
        currentMode = 'erase';
    });
    
    const resetBtn = document.getElementById('reset-button');
    resetBtn.addEventListener('click', () => {
        const squares = document.querySelectorAll('.grid div');
        squares.forEach(square => {
            square.style.backgroundColor = defaultColor;
        });
    });
    
    let isDrawing = false;
    
    document.body.addEventListener('mousedown', () => {
        isDrawing = true;
    });
    
    document.body.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    function createGrid(size) {
        const grid = document.querySelector('.grid');
        
        grid.innerHTML = '';
        
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            
            square.addEventListener('mouseover', () => {
                if (isDrawing) {
                    if (currentMode === 'erase') {
                        square.style.backgroundColor = defaultColor;
                    } else if (currentMode === 'rainbow') {
                        square.style.backgroundColor = getRandomColor();
                    } else {
                        square.style.backgroundColor = currentColor;
                    }
                }
            });
            
            square.addEventListener('mousedown', () => {
                if (currentMode === 'erase') {
                    square.style.backgroundColor = defaultColor;
                } else if (currentMode === 'rainbow') {
                    square.style.backgroundColor = getRandomColor();
                } else {
                    square.style.backgroundColor = currentColor;
                }
            });
            
            grid.appendChild(square);
        }
    }
    
    const sizeSlider = document.getElementById('size-input');
    const sizeDisplay = document.getElementById('size-display');
    
    function updateSizeDisplay(size) {
        sizeDisplay.textContent = `${size} x ${size}`;
    }
    
    sizeSlider.addEventListener('input', (e) => {
        const newSize = e.target.value;
        updateSizeDisplay(newSize);
    });
    
    sizeSlider.addEventListener('change', (e) => {
        const newSize = e.target.value;
        
        document.documentElement.style.setProperty('--grid-size', newSize);
        
        createGrid(newSize);
    });

    document.documentElement.style.setProperty('--grid-size', 16);
    updateSizeDisplay(16);
    createGrid(16);
};
