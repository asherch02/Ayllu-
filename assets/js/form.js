document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que la página se recargue al enviar

    const usuario = document.getElementById('Usuario').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const sugerencias = document.getElementById('sugerencias').value;

    // Validación: el asunto debe tener al menos 8 caracteres
    if (usuario.length < 8) {
        console.log('El usuario debe tener al menos 8 caracteres');
        return; // corta aquí si el asunto es corto
    }

    // Verificar que todos los campos obligatorios estén llenos
    if (usuario && email && asunto) {
        console.log(`Usuario: ${usuario}`);
        console.log(`Email: ${email}`);
        console.log(`Asunto: ${asunto}`);
        console.log(`Sugerencias: ${sugerencias}`);
        console.log('Formulario enviado correctamente');
    } else {
        console.log('Por favor, complete todos los campos obligatorios');
    }
});