window.onload = () => {
    const defaultColor = '#f0f0f0';
    let currentColor = '#000000';
    let currentMode = 'draw';
    
    const colorPicker = document.getElementById('color-input');
    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
        currentMode = 'draw';
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
    
    function createGrid(size) {
        const grid = document.querySelector('.grid');
        
        grid.innerHTML = '';
        
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            
            square.addEventListener('mouseover', () => {
                if (isDrawing) {
                    if (currentMode === 'erase') {
                        square.style.backgroundColor = defaultColor;
                    } else {
                        square.style.backgroundColor = currentColor;
                    }
                }
            });
            
            square.addEventListener('mousedown', () => {
                if (currentMode === 'erase') {
                    square.style.backgroundColor = defaultColor;
                } else {
                    square.style.backgroundColor = currentColor;
                }
            });
            
            grid.appendChild(square);
        }
    }
    
    const sizeSlider = document.getElementById('size-input');

    sizeSlider.addEventListener('change', (e) => {
        const newSize = e.target.value;
        
        document.documentElement.style.setProperty('--grid-size', newSize);
        
        createGrid(newSize);
    });

    document.documentElement.style.setProperty('--grid-size', 16);
    createGrid(16);
};
