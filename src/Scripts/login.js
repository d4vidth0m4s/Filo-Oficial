
document.getElementById("userBtn").addEventListener("click", () => {
  const logueado = true;

  if (logueado) {
    window.location.href = "/users/userPerfil";
  } else {
    window.location.href = "/users/userLog";
  }
});
