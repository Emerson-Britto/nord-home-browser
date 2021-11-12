import React, { createContext, useContext, useState, useEffect } from 'react';
import { searchEngine, API_istatic, getWebAPP } from 'api/istatic';
import { Storage } from 'common/storage';

export const SearchContext = createContext();
SearchContext.displayName = 'Search';

export default function SearchProvider({ children }){

	const [showEngines, setShowEngines] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const [autoComplete, setAutoComplete] = useState([]);
	const [activeEngine, setActiveEngine] = useState({
        id: 'D-457',
        name: 'DuckDuckGo',
        alt: "DuckDuckGo's branding",
        branding: ()=> `${API_istatic}imgs/branding/duckduckgo.svg`,
        api: 'https://duckduckgo.com/?q='
    });


	return (
		<SearchContext.Provider value={{
			showEngines,
			setShowEngines,
			searchInput,
			setSearchInput,
			autoComplete,
			setAutoComplete,
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
		autoComplete,
		setAutoComplete,
		activeEngine,
		setActiveEngine
	} = useContext(SearchContext);


// =============================================================


    const selectEngine = (e, engine, i) => {
    	e.stopPropagation();
    	setActiveEngine(engine);
    	setShowEngines(showEngines =>!showEngines);
    	Storage.set('activeEngine', i);
    };

    const search = e => {
    	let element = document.activeElement;
    	
    	if(e.key && e.key === "Enter" && element.localName === 'input' && element.value.length){
    		
    		let exp = /(http(s)?:\/\/)?(www.)?[A-Za-z0-9_]*.com(.br)?\/*/g;

			if(exp.test(element.value)){
				element.value.startsWith('http://') || element.value.startsWith('https://')
					? window.open(element.value, '_blank')
					: window.open('https://' + element.value, '_blank')
			} else {
				window.open(searchEngine[Storage.get('activeEngine')].api + element.value, '_blank');
			}
    	}
    }

    const searchDirectLinks = async(value) => {
    	setAutoComplete(await getWebAPP(value))
    }

    const eventClose = e => {
    	e.stopPropagation();
    	setShowEngines(false);
    };

    const toggleBoxActive = e => {
    	e.stopPropagation();
    	setShowEngines(showEngines =>!showEngines);
    };


    useEffect(()=> {
    	if(Storage.get('activeEngine')){
    		setActiveEngine(searchEngine[Storage.get('activeEngine')])
    	} else {
    		Storage.set('activeEngine', 0);
    		setActiveEngine(searchEngine[Storage.get('activeEngine')]);
    	}
    },[activeEngine]);


    useEffect(()=> {
        document.addEventListener("keyup", e => search(e));
        return ()=> document.removeEventListener("keyup", e => search(e), true);
    },[])

	return {
		selectEngine,
		search,
		searchInput,
		setSearchInput,
		autoComplete,
		searchDirectLinks,
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

/*

    		if(exp.test(element.value)){
    			element.value.startsWith('http://') || element.value.startsWith('https://')
    				? window.location.href = element.value
    				: window.location.href = 'https://' + element.value
    		} else {
				window.location.href = activeEngine.searchApi + element.value;
    		}
*/