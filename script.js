document.getElementById('contact-form').addEventListener("submit", function(event) {
    // Prevenir el envío del formulario para verificar los campos
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Verificar si todos los campos están completos
    if (name === '' || email === '' || message === '') {
        console.log('Por favor, complete todos los campos del formulario.');
        alert('Por favor, complete todos los campos del formulario.');
    } else {
        console.log('Todos los campos están completos.');
        // Enviar el formulario si todos los campos están completos
        this.submit();
        alert('Gracias por enviarnos su mensaje');
    }
});
