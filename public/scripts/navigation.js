
// Navegación global con delegación de eventos
document.addEventListener("click", (e) => {
  // Botón de volver
  if (e.target.closest("[data-back]")) {
    history.length > 1 ? history.back() : location.href = "/";
  }
  
  // Botón de usuario/perfil
  if (e.target.closest("[data-user]")) {
    const isLogged = false;
    location.href = isLogged ? "/users/perfil" : "/users/login";
  
  }

  // Botón de Registrar 
  if (e.target.closest("[data-register]")) {
    location.href = "/users/register";
  }
});

