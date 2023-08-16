/* used for openning/closing a side menu by onclicking the side menu button */
function openSideMenu() {
    var click = document.querySelector("#side-menu-content");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}