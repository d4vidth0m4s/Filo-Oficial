// Lógica del perfil de usuario
/*
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    Swal.fire({
      title: "Sesión cerrada",
      text: "¡Vuelve pronto!",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#00c853",
      background: "#ffffff",
      color: "#333",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("isLogged");
        window.location.href = "/users/login";
      }
    });
  });
}

// Verificar si el usuario está logueado
document.addEventListener("DOMContentLoaded", () => {
  const isLogged = localStorage.getItem("isLogged");
  
  if (!isLogged && window.location.pathname === "/users/perfil") {
    window.location.href = "/users/login";
  }
});
*/