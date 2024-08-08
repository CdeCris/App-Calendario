var app_pages = {
    home:document.querySelector("#view__1"),
    calendar:document.querySelector("#view__2"),
    analytics:document.querySelector("#view__3"),
    perfil:document.querySelector("#view__4")
}
var nav_buttons = {
    home:document.querySelector("#home"),
    calendar:document.querySelector("#calendar"),
    analytics:document.querySelector("#analytics"),
    perfil:document.querySelector("#perfil")
}

function showCalendar(){
    app_pages.home.style.display = "none";app_pages.calendar.style.display = "flex";app_pages.analytics.style.display = "none";app_pages.perfil.style.display = "none"
    nav_buttons.home.classList.remove("nav__check");nav_buttons.calendar.classList.add("nav__check");nav_buttons.analytics.classList.remove("nav__check");nav_buttons.perfil.classList.remove("nav__check")
}
function showMenu(){
    app_pages.home.style.display = "flex";app_pages.calendar.style.display = "none";app_pages.analytics.style.display = "none";app_pages.perfil.style.display = "none";
    nav_buttons.home.classList.add("nav__check");nav_buttons.calendar.classList.remove("nav__check");nav_buttons.analytics.classList.remove("nav__check");nav_buttons.perfil.classList.remove("nav__check")
}
function showAnalytics(){
    app_pages.home.style.display = "none";app_pages.calendar.style.display = "none";app_pages.analytics.style.display = "flex";app_pages.perfil.style.display = "none";
    nav_buttons.home.classList.remove("nav__check");nav_buttons.calendar.classList.remove("nav__check");nav_buttons.analytics.classList.add("nav__check");nav_buttons.perfil.classList.remove("nav__check")
}
function showPerfil(){
    app_pages.home.style.display = "none";app_pages.calendar.style.display = "none";app_pages.analytics.style.display = "none";app_pages.perfil.style.display = "flex";
    nav_buttons.home.classList.remove("nav__check");nav_buttons.calendar.classList.remove("nav__check");nav_buttons.analytics.classList.remove("nav__check");nav_buttons.perfil.classList.add("nav__check")
}