document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");

    openPopup.addEventListener("click", function () {
        popup.classList.remove("hidden");
    });

    closePopup.addEventListener("click", function () {
        popup.classList.add("hidden");
    });
});
