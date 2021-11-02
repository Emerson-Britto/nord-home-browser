const url = 'https://www-nord.herokuapp.com/';
const urlTwo = 'https://cdn-istatics.herokuapp.com/static/imgs/branding/duckduckgo.svg';

const wakeUp = () => {
    try { return fetch(url, {}).then(res=> fetch(urlTwo, {})) }
    catch(error) { alert(error) }
}

setInterval(function(){ wakeUp(); }, 240000);