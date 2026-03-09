document.addEventListener('DOMContentLoaded', () => {
    
    // Las 3 líneas que queremos escribir
    const lines = [
        { id: 'line1', text: 'Hola, soy Luis Gerardo.' },
        { id: 'line2', text: 'Ing. de Software y Desarrollador Web.' },
        { id: 'line3', text: 'Construyendo el futuro, línea por línea.' }
    ];

    // Función principal asíncrona para controlar el orden
    async function typeEffect() {
        for (let i = 0; i < lines.length; i++) {
            const element = document.getElementById(lines[i].id);
            
            // Le agregamos la clase que muestra el cursor a la línea actual
            element.classList.add('typing-active');
            
            // Esperamos a que termine de escribir la línea
            await typeLine(element, lines[i].text);
            
            // Si NO es la última línea, le quitamos el cursor para pasarlo a la siguiente
            if (i < lines.length - 1) {
                element.classList.remove('typing-active');
            }
        }
        // La última línea se queda con la clase 'typing-active', por lo que el cursor seguirá parpadeando ahí.
    }

    // Función que escribe una sola línea letra por letra
    function typeLine(element, text) {
        return new Promise(resolve => {
            let charIndex = 0;
            
            function type() {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                    // Velocidad de escritura (50ms base + aleatoriedad para que parezca humano)
                    setTimeout(type, 50 + Math.random() * 40); 
                } else {
                    // Pausa entre una línea y otra (500ms)
                    setTimeout(resolve, 500); 
                }
            }
            
            type(); // Iniciamos la escritura de esta línea
        });
    }

    // Arrancamos la magia
    typeEffect();
});