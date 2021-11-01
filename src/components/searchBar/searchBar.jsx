import React, { useState, useEffect } from 'react';

import Styled from 'styled-components';

import branding from '../../assets/branding/branding-nord-whitetheme.png';

import { istatic, baseUrl } from 'api/istatic';

import icon_expand_more from '../../assets/icons/expand_more_white_24dp.svg';


const ViewPort = Styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-Items: center;
`

const BrandingFrame = Styled.img`
	width: 220px;
	margin-bottom: 5px;
`

const SearchField = Styled.section`
	position: relative;
	display: flex;
`

const SelectEngine = Styled.section`
	display: flex;
	border: 1px solid gray;
	width: 11vh;
	height: 40px;
	border-radius: 8px 0 0 8px;
	background-color: #080C19;

	:hover {
		cursor: pointer;
	}
`

const IconExpandMore = Styled.img`
	width: 25px;
`

const Options = Styled.section`
	position: absolute;
	border-radius: 7px;
	top: 55px;
	display: ${(props) => (props.show ? "flex" : "none")};
	align-Items: center;
	flex-direction: column;
	width: 190px;
	overflow: hidden;
	background-color: #08090E;
`

const EngineOption = Styled.section`
	display: flex;
	align-Items: center;
	width: 100%;
	height: 30px;
	font-size: 0.9em;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	color: #fff;
	padding: 10px 0;
	:hover {
		background-color: #080918;
		cursor: pointer;
	}
`

const EngineBranding = Styled.img`
	width: 25px;
	margin: 0 10px;
`

const SearchInput = Styled.input`
	width: 35vw;
	height: 30px;
	background-color: transparent;
	color: #fff;
	font-size: 1em;
	outline: none;
	border-radius: 0 8px 8px 0;
	border: 1px solid gray;
	padding: 5px 10px;
	transition: 500ms;
	margin-bottom: 130px;


	:focus {
		border: 1px solid white;
	}

	@media screen and (max-width: 990px) {
		width: 50vw;
	}

	@media screen and (max-width: 670px) {
		width: 70vw;
	}
`

const SearchBar = () => {

	const [showEngines, setShowEngines] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const [activeEngine, setActiveEngine] = useState({
        id: 'D-457',
        name: 'DuckDuckGo',
        alt: "DuckDuckGo's branding",
        engineBranding: ()=> `${baseUrl}imgs/branding/duckduckgo.svg`,
        searchApi: 'https://duckduckgo.com/?q='
    });


    const selectEngine = engine => {
    	setActiveEngine(engine);
    	setShowEngines(showEngines =>!showEngines);
    };

    const search = e => {
    	let element = document.activeElement;
    	
    	if(e.key && e.key === "Enter" && element.localName === 'input' && element.value.length){
    		
    		let exp = /(http(s)?:\/\/)?(www.)?[A-Za-z0-9_]*.com(.br)?\/*/g;

    		if(exp.test(element.value)){
    			element.value.includes('http')
    				? window.location.href = element.value
    				: window.location.href = 'https://' + element.value
    			
    		} else {
				window.location.href = activeEngine.searchApi + element.value;    			
    		}
    	}
    }


    useEffect(()=>{

        document.addEventListener("keyup", e => search(e));
        return ()=> document.removeEventListener("keyup", e => search(e));

    },[activeEngine])


	return (
		<ViewPort>
			<BrandingFrame src={branding} alt='Nord Branding'/>
			<SearchField>
				<SelectEngine onClick={()=> setShowEngines(showEngines =>!showEngines)}>
					<EngineBranding src={activeEngine.engineBranding()} alt='icon_expand_more'/>
					<IconExpandMore src={icon_expand_more} alt='icon_expand_more'/>
				</SelectEngine>
				<Options show={showEngines}>
					{istatic.map((engine, i) => {
						return (
							<EngineOption 
								key={engine.id} 
								onClick={()=> selectEngine(engine) }>
								<EngineBranding src={engine.engineBranding()} alt={engine.alt}/>
								<p>{engine.name}</p>
							</EngineOption>				
						)
					})}
				</Options>
				<SearchInput 
					type='text'
					tabindex="0"
					ref={ref=> { if(ref) ref.focus()}}
					placeholder={`Search with ${activeEngine.name} or enter Address`}
					value={searchInput}
					onChange={e=> setSearchInput(e.target.value)}/>
			</SearchField>
		</ViewPort>
	);
}

export default SearchBar;

//(http(s)?://)?(www.)?bytebank.com(.br)?/*