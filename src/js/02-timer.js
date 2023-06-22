 // Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";


let finalUnix = 0

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    if(value < 10) return `0${value}`
    return value
}

let elements = document.getElementsByClassName('field')

flatpickr('#datetime-picker', {
    onChange: function(selectedDates, dateStr, instance) {
        let dateUnix = Date.parse(dateStr)
        let now = Date.now()
        if(now > dateUnix) return alert('bad date')

        finalUnix = dateUnix
        return
    }
})

let button = document.getElementsByTagName('button')

button[0].onclick = () => {
    let now = Date.now()
    let estimateObject = convertMs(finalUnix-now)

    innerValues(estimateObject)
    let iterator = 1

    setInterval(() => {
        if(finalUnix == now) return
        let estimateObject = convertMs(finalUnix-now-(1000*iterator))
        innerValues(estimateObject)
        iterator++
    }, 1000)
}

function innerValues(estimated) {
    elements[0].innerHTML = addLeadingZero(estimated.days)
    elements[1].innerHTML = addLeadingZero(estimated.hours)
    elements[2].innerHTML = addLeadingZero(estimated.minutes)
    elements[3].innerHTML = addLeadingZero(estimated.seconds)
}
 