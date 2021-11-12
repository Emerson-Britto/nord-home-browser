const devENV_istatic = false;
const devENV_nord = false;


const prodAPI_istatic = 'https://cdn-istatics.herokuapp.com/static/';
const devAPI_istatic = 'http://localhost:9872/static/';

export const API_istatic = devENV_istatic ? devAPI_istatic : prodAPI_istatic;

const prodAPI_nord = 'https://api-nord.herokuapp.com/';
const devAPI_nord = 'http://localhost:9870/';

export const API_nord = devENV_nord ? devAPI_nord : prodAPI_nord;


export const searchEngine = [
    {
        id: 'D-457',
        name: 'DuckDuckGo',
        alt: "DuckDuckGo's branding",
        branding: ()=> `${API_istatic}imgs/branding/duckduckgo.svg`,
        api: 'https://duckduckgo.com/?q='
    },{
        id: 'G-233',
        name: 'Google',
        alt: "google's branding",
        branding: ()=> `${API_istatic}imgs/branding/google.svg`,
        api: 'https://www.google.com/search?q='
    },{
        id: 'B-794',
        name: 'Bing',
        alt: "Bing's branding",
        branding: ()=> `${API_istatic}imgs/branding/bing.svg`,
        api: 'https://www.bing.com/search?q='
    }
];

export const getIcon = {
    lightTheme: ()=> `${API_istatic}icons/light_mode_white_24dp.svg`,
    darkTheme: ()=> `${API_istatic}icons/dark_mode_black_24dp.svg`,
    openInNew: ()=> `${API_istatic}icons/open_in_new_white_24dp.svg`
};

export const getWebAPP = async(value) => {
    try { 
        return fetch(`${API_nord}search/directLinksTo?input=${value}`, {})
        .then(res=> res.json());
    }
    catch(error) { 
        alert(error);
    }
}

export const bookmarkIcon = (domain)=> `https://external-content.duckduckgo.com/ip3/${domain}.ico`
