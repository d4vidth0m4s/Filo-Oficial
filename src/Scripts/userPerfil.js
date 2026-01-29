const backBtn = document.getElementById("back");

if (backBtn) {
    backBtn.addEventListener("click", () => {
        if (document.referrer) {
            window.history.back();
        } else {
            window.location.href = "/pages/index";
        }
    });
}

const logoutBtn = document.querySelector(".logout");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {

        alert("Sesión cerrada");
        window.location.href = "/users/userLog";
    });
}