import React, { createContext, useContext, useState, useEffect } from 'react';
import { baseUrl } from 'api/istatic';

export const SearchContext = createContext();
SearchContext.displayName = 'Search';

export default function SearchProvider({ children }){

	const [showEngines, setShowEngines] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const [activeEngine, setActiveEngine] = useState({
        id: 'D-457',
        name: 'DuckDuckGo',
        alt: "DuckDuckGo's branding",
        engineBranding: ()=> `${baseUrl}imgs/branding/duckduckgo.svg`,
        searchApi: 'https://duckduckgo.com/?q='
    });


	return (
		<SearchContext.Provider value={{
			showEngines,
			setShowEngines,
			searchInput,
			setSearchInput,
			activeEngine,
			setActiveEngine
		}}>
			{ children }
		</SearchContext.Provider>
	)
}


export function useSearchContext(){

	const {
		showEngines,
		setShowEngines,
		searchInput,
		setSearchInput,
		activeEngine,
		setActiveEngine
	} = useContext(SearchContext);


// =============================================================


    const selectEngine = (e, engine) => {
    	e.stopPropagation();
    	setActiveEngine(engine);
    	setShowEngines(showEngines =>!showEngines);
    };

    const search = e => {
    	let element = document.activeElement;
    	
    	if(e.key && e.key === "Enter" && element.localName === 'input' && element.value.length){
    		
    		let exp = /(http(s)?:\/\/)?(www.)?[A-Za-z0-9_]*.com(.br)?\/*/g;

    		if(exp.test(element.value)){
    			element.value.startsWith('http://') || element.value.startsWith('https://')
    				? window.location.href = element.value
    				: window.location.href = 'https://' + element.value
    		} else {
				window.location.href = activeEngine.searchApi + element.value;
    		}
    	}
    }


    const eventClose = e => {
    	e.stopPropagation();
    	setShowEngines(false);
    };

    const toggleBoxActive = e => {
    	e.stopPropagation();
    	setShowEngines(showEngines =>!showEngines);
    };


    useEffect(()=>{

        document.addEventListener("keyup", e => search(e));
        return ()=> document.removeEventListener("keyup", e => search(e));

    },[activeEngine]);


	return {
		selectEngine,
		search,
		searchInput,
		setSearchInput,
		activeEngine,
		showEngines,
		toggleBoxActive,
		eventClose
	}
}

/* 
	if(exp.test(element.value)){
		element.value.startsWith('http://') || element.value.startsWith('https://')
			? window.open(element.value, '_blank')
			: window.open('https://' + element.value, '_blank')
	} else {
		window.open(activeEngine.searchApi + element.value, '_blank');
	}
*/