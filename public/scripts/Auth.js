// Lógica de autenticación

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación real
    console.log("Intentando iniciar sesión...");

    window.location.href = "/users/perfil";
  });
}
 
// Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = registerForm.querySelectorAll("input");
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Aquí iría la lógica de registro real
    console.log("Intentando registrar usuario...");
    // Simulación de registro exitoso
 
    window.location.href = "/users/perfil";
  });
}

// Login con Google (placeholder)
window.loginGoogle = function () {
  console.log("Login con Google...");
  // Aquí iría la integración con Google OAuth
  alert("Funcionalidad de Google en desarrollo");
};
