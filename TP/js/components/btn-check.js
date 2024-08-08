function check(btn){
    button_clicked = "#" + btn.id 
    button_checked = document.querySelector(button_clicked)
    button_checked.classList.toggle("checked")
}


// button_clicked_symbol = "#" + btn.id + "_symbol"
// button_checked_symbol = document.querySelector(button_clicked_symbol)
// button_checked_symbol.classList.toggle("mark__none")