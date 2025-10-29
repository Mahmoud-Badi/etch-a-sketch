window.onload = () => {
    function createGrid(size) {
        const grid = document.querySelector('.grid');
        
        // Clear existing squares
        grid.innerHTML = '';
        
        // Create squares based on size
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
        }
    }
    
    const sizeSlider = document.getElementById('size-input');

    sizeSlider.addEventListener('change', (e) => {
        const newSize = e.target.value;
        createGrid(newSize);
    });

    createGrid(16);
};
