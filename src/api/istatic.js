const devENV = false;

const prodAPI = 'https://cdn-istatics.herokuapp.com/static/';
const devAPI = 'http://localhost:9872/static/';

export const baseUrl = devENV ? devAPI : prodAPI;


export const istatic = [
    {
        id: 'D-457',
        name: 'DuckDuckGo',
        alt: "DuckDuckGo's branding",
        engineBranding: ()=> `${baseUrl}imgs/branding/duckduckgo.svg`,
        searchApi: 'https://duckduckgo.com/?q='
    },{
        id: 'G-233',
        name: 'Google',
        alt: "google's branding",
        engineBranding: ()=> `${baseUrl}imgs/branding/google.svg`,
        searchApi: 'https://www.google.com/search?q='
    },{
        id: 'B-794',
        name: 'Bing',
        alt: "Bing's branding",
        engineBranding: ()=> `${baseUrl}imgs/branding/bing.svg`,
        searchApi: 'https://www.bing.com/search?q='
    }
];

export const bookmarkIcon = (domain)=> `https://external-content.duckduckgo.com/ip3/${domain}.ico`