const devENV = false;

const prodAPI = 'https://cdn-istatics.herokuapp.com/static/';
const devAPI = 'http://localhost:9872/static/';

export const baseUrl = devENV ? devAPI : prodAPI;


export const searchEngine = [
    {
        id: 'D-457',
        name: 'DuckDuckGo',
        alt: "DuckDuckGo's branding",
        branding: ()=> `${baseUrl}imgs/branding/duckduckgo.svg`,
        api: 'https://duckduckgo.com/?q='
    },{
        id: 'G-233',
        name: 'Google',
        alt: "google's branding",
        branding: ()=> `${baseUrl}imgs/branding/google.svg`,
        api: 'https://www.google.com/search?q='
    },{
        id: 'B-794',
        name: 'Bing',
        alt: "Bing's branding",
        branding: ()=> `${baseUrl}imgs/branding/bing.svg`,
        api: 'https://www.bing.com/search?q='
    }
];

export const getIcon = {
    lightTheme: ()=> `${baseUrl}icons/light_mode_white_24dp.svg`,
    darkTheme: ()=> `${baseUrl}icons/dark_mode_black_24dp.svg`,
    openInNew: ()=> `${baseUrl}icons/open_in_new_white_24dp.svg`
};

//TEMP
const webAppList = [
    {
        icon: getIcon.openInNew(),
        name: 'YouTube',
        url: 'https://youtube.com/'
    },{
        icon: getIcon.openInNew(),
        name: 'Twitter',
        url: 'https://twitter.com/home'        
    },{
        icon: getIcon.openInNew(),
        name: 'Translater',
        url: 'https://translate.google.com/'        
    },{
        icon: getIcon.openInNew(),
        name: 'Spotify',
        url: 'https://open.spotify.com/'        
    },{
        icon: getIcon.openInNew(),
        name: 'WhatsApp',
        url: 'https://web.whatsapp.com/'        
    },{
        icon: getIcon.openInNew(),
        name: 'GitHub',
        url: 'https://github.com/'        
    },{
        icon: getIcon.openInNew(),
        name: 'Pinterest',
        url: 'https://www.pinterest.com/'        
    }
];

//TEMP
export const getWebAPP = value => {

    let selected = [];

    if (value.length > 0) {
        for (var i = 0; i < webAppList.length; i++) {

            let exp = new RegExp(value, "i");
            let webApp = webAppList[i];
 
            let hasSomeEvenMusic = selected.some(value => value.name === webApp.name);
            if (exp.test(webApp.name) && !hasSomeEvenMusic) {
                selected.push(webApp);
            }

            if(selected.length >= 5) return selected
        }
    }
    
    return selected;
}

export const bookmarkIcon = (domain)=> `https://external-content.duckduckgo.com/ip3/${domain}.ico`
