const hours = document.querySelector('#hour');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

let timefunction = function () {
    // hours
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(hr);
    hr = hr - 12;
    
    if(hr < 10) {
        hours.innerHTML = '0'+hr;
    } 
    else {
        hours.innerHTML = hr;
    }
    
    if(min < 10) {
        minutes.innerHTML = '0'+min;
    }
    else {
        minutes.innerHTML = min;
    }
    
    if(sec < 10) {
        seconds.innerHTML = '0' + sec;
    }
   else {
    seconds.innerHTML = sec;
   }
    

}

setInterval(() => {
    timefunction();
}, 1000);