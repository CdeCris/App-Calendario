const app_pages = {
    home: document.querySelector("#view__1"),
    calendar: document.querySelector("#view__2"),
    analytics: document.querySelector("#view__3"),
    perfil: document.querySelector("#view__4"),
    desc_drug: document.querySelector("#view__5"),
    login: document.querySelector("#view__6")
}
const nav_buttons = {
    home: document.querySelector("#home"),
    calendar: document.querySelector("#calendar"),
    analytics: document.querySelector("#analytics"),
    perfil: document.querySelector("#perfil"),
    login : document.querySelector("#login"),
    register : document.querySelector("#register")
}
const components = {
    footer: document.querySelector("#footer"),
    register_view : document.querySelector("#register__view"),
    login_view : document.querySelector("#login__view")
}

function hidePages() {
    let app_pages_array = Object.values(app_pages);
    app_pages_array.forEach(element => {
        element.style.display = "none";
    });
}

function uncheckButtons() {
    let nav_buttons_array = Object.values(nav_buttons);
    nav_buttons_array.forEach(element => {
        element.classList.remove("nav__check")
    });
}

function showMenu() {
    hidePages()
    app_pages.home.style.display = "flex";
    components.footer.style.display = "flex"
    uncheckButtons()
    nav_buttons.home.classList.add("nav__check")
}

function showCalendar() {
    hidePages()
    app_pages.calendar.style.display = "flex";
    components.footer.style.display = "flex"
    uncheckButtons()
    nav_buttons.calendar.classList.add("nav__check");
}

function showAnalytics() {
    hidePages()
    app_pages.analytics.style.display = "flex";
    components.footer.style.display = "flex"
    uncheckButtons()
    nav_buttons.analytics.classList.add("nav__check")
}
function showPerfil() {
    hidePages()
    app_pages.perfil.style.display = "flex";
    components.footer.style.display = "flex"
    uncheckButtons()
    nav_buttons.perfil.classList.add("nav__check")
}
function showDescDrug() {
    hidePages()
    app_pages.desc_drug.style.display = "flex";
    components.footer.style.display = "none"
}

function showLogin() {
    hidePages()
    app_pages.login.style.display = "flex";
    components.footer.style.display = "none"
}

function showRegisterForm() {
    components.login_view.classList.add("toggle__view__none")
    components.register_view.classList.remove("toggle__view__none")
}
function showLoginForm() {
    components.login_view.classList.remove("toggle__view__none")
    components.register_view.classList.add("toggle__view__none")
}

nav_buttons.login.addEventListener("click",()=>{
    hidePages()
    app_pages.home.style.display = "flex";
    components.footer.style.display = "flex"
    uncheckButtons()
    nav_buttons.home.classList.add("nav__check")
})
nav_buttons.register.addEventListener("click",()=>{
    hidePages()
    app_pages.perfil.style.display = "flex";
    components.footer.style.display = "flex"
    uncheckButtons()
    nav_buttons.perfil.classList.add("nav__check")
})






//Checkbox toggle
function check(btn) {
    button_clicked = "#" + btn.id
    button_checked = document.querySelector(button_clicked)
    button_checked.classList.toggle("checked")
}
