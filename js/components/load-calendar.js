days_name=["M","T","W","T","F","S","S"]
line_hours=["08:00","09:00","10:00","11:00"]
let cont = 0; id = 0

for (let x = 0; x < line_hours.length; x++) {
    if(cont==0){
        id=id+1;document.querySelector(".main__content__line__hours").innerHTML += `<div class="block__hour" id="b__hour${id}">`
    }
    document.querySelector("#b__hour"+id).innerHTML += `<i class="line__hour">${line_hours[x]}`;cont=cont+1
    if(cont==2){
        document.querySelector(".main__content__line__hours").innerHTML += `</div>`;cont=0
    }

}

days_name.forEach(day => {
    document.querySelector("#calendar__days__name").innerHTML += `<i class="day__name">${day}</i>`   
});

for (let x = 21; x < 32; x++) {
    if(x == 22 || x==26){
        document.querySelector("#calendar__days__number").innerHTML += `<button class="btn__day__num focus" id="btn__day${x}" onClick="select(this)">${x}</i>`   
    }else if(x==30){
        document.querySelector("#calendar__days__number").innerHTML += `<button class="btn__day__num selected" id="btn__day${x}" onClick="select(this)">${x}</i>`   
    }else{
        document.querySelector("#calendar__days__number").innerHTML += `<button class="btn__day__num" id="btn__day${x}" onClick="select(this)">${x}</i>`   
    }
}

function select(btn){
    button_clicked = "#" + btn.id 
    button_checked = document.querySelector(button_clicked)
    button_checked.classList.toggle("selected")
}
