const url = 'https://www-nord.herokuapp.com/';
const urlTwo = 'https://cdn-istatics.herokuapp.com/';
const urlThree = 'https://api-nord.herokuapp.com/';

const wakeUp = () => {
    try { 
        return fetch(url, {})
        .then(res=> fetch(urlTwo, {}))
        .then(res=> fetch(urlThree, {}))
    }
    catch(error) { 
        alert(error);
    }
}

setInterval(function(){ wakeUp(); }, 240000);