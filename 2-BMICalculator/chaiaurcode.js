const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const hel = document.querySelector('#health');

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `pleas give a valid height ${height}`;
        return;
    }
    if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `pleas give a valid weight ${weight}`;
        return;
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show result
        results.innerHTML = `<span>your bmi is : ${bmi} </span>`;
    
    if(bmi < 18.6){
        hel.innerHTML = `you are under weight`;
    }
    else if(bmi > 24.9){
        hel.innerHTML = `you are over weight`;
    }
    else {
        hel.innerHTML = `you are normal range`;
    }
});