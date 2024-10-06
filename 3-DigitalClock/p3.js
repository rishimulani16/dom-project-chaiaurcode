const clock = document.getElementById('clock')
//const clock = document.queryselector('#clock')

let date = new Date()


setInterval(function() {
    // console.log(date.toLocaleTimeString());
    
    clock.innerHTML = date.toLocaleTimeString();
} ,1000)