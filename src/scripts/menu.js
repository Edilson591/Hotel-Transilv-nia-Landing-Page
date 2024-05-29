function removeOfCanvas () {
    const getNavLink = document.querySelectorAll(".nav-link");
    const selectOfCanvas = document.getElementById("offcanvasDarkNavbar");
    const getMenuDropdown = document.getElementById("menu-dropdown");
    const getlinks = document.querySelectorAll('.dropdown-menu .dropdown-item')
    
    
    getNavLink.forEach((link) => {
        link.addEventListener("click",(e) => {
            if(e.target !== getMenuDropdown) {
                const offCanvas = bootstrap.Offcanvas.getInstance(selectOfCanvas).hide();
                return offCanvas
            }
            console.log(getlinks)

        })
    })
    getlinks.forEach((link) => {
        link.addEventListener("click",(e) => {
            const offCanvas = bootstrap.Offcanvas.getInstance(selectOfCanvas).hide();
            return offCanvas
        })
    })
}





document.addEventListener("DOMContentLoaded", removeOfCanvas);