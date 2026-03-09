document.addEventListener('DOMContentLoaded', () => {
    
    const lines = [
        { id: 'line1', text: 'Hola, soy Luis Gerardo.' },
        { id: 'line2', text: 'Ing. de Software y Desarrollador Web.' },
        { id: 'line3', text: 'Construyendo el futuro, línea por línea.' }
    ];

    async function typeEffect() {
        // BUCLE INFINITO: Esto hace que se repita siempre
        while (true) {
            // 1. Escribir todas las líneas
            for (let i = 0; i < lines.length; i++) {
                const element = document.getElementById(lines[i].id);
                element.classList.add('typing-active');
                
                await typeLine(element, lines[i].text);
                
                if (i < lines.length - 1) {
                    element.classList.remove('typing-active');
                }
            }

            // 2. Pausa de 4 segundos al terminar de escribir para que se pueda leer
            await new Promise(resolve => setTimeout(resolve, 4000));

            // 3. Borrar todo el texto para reiniciar
            for (let i = 0; i < lines.length; i++) {
                const element = document.getElementById(lines[i].id);
                element.textContent = ''; // Limpiamos el texto
                element.classList.remove('typing-active'); // Quitamos el cursor
            }

            // 4. Pausa cortita de medio segundo antes de volver a empezar a escribir
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }

    function typeLine(element, text) {
        return new Promise(resolve => {
            let charIndex = 0;
            
            function type() {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 50 + Math.random() * 40); 
                } else {
                    setTimeout(resolve, 500); 
                }
            }
            type(); 
        });
    }

    typeEffect();
});