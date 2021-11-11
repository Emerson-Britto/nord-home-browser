import React from 'react';

import { getIcon } from 'api/istatic';

import Styled from 'styled-components';

const OptionsCompleteSearch = Styled.section`
	position: absolute;
	z-index: 5;
	color: white;
	overflow: hidden;
	background-color: #000005;
	border: 1px solid #191D1F;
	border-radius: 10px;
	box-shadow: 0px 0px 20px rgb(0 0 0 / 25%);
	top: 50px;
	width: 99.6%;
	height: auto;

    @media(max-width: 1000px) {
        width: 100%;
    }
`

const Option = Styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
	width: 98%;
	cursor: pointer;
	padding: 10px 10px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	overflow: hidden;
	white-space: nowrap;
    text-overflow: ellipsis;

	:hover {
		background-color: #0D0A0A;
	}
`

const Icon = Styled.div`
	width: 25px;
	height: 25px;
	border-radius: 8px;
	margin-right: 8px;
	background: url(${(props) => (props.url)}) no-repeat center/80%;
`

const SearchAutoComplete = ({ autoCompleteList }) => {


	return(
		<OptionsCompleteSearch>
			{autoCompleteList.map((option, index) =>{
				return(
					<Option href={option.url} target="_blank" key={index}>
						<Icon url={option.icon}/>
						{option.name}
					</Option>
				)
			})}
		</OptionsCompleteSearch>
	)
}

export default SearchAutoComplete;
