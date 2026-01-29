const logoutBtn = document.querySelector(".logout");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        Swal.fire({
            title: 'Sesión cerrada',
            text: '¡Vuelve pronto!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#00c853',
            background: '#ffffff',
            color: '#333'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/users/userLog";
            }
        });
    });
}