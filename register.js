document.getElementById('register-button').addEventListener('click', () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Aquí iría la lógica de registro con Firebase o tu backend
    console.log(`Registrando usuario con email: ${email} y contraseña: ${password}`);
});