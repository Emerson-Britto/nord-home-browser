import React from "react";
import Styled from 'styled-components';
import { Storage } from 'common/storage';

import { getIcon } from 'api/istatic';

const Icon = Styled.img`
	cursor: pointer;
	width: 33px;
	margin-right: 20px;
`

const SwitcherTheme = ({ currentTheme }) => {

	const { theme, setTheme } = currentTheme

	const changeTheme = () => {
		setTheme(!theme)
		Storage.set('appTheme-344', !theme)
	};

	return (theme 
		? <Icon onClick={()=> changeTheme()} src={getIcon.darkTheme()} alt="dark theme" />
		: <Icon onClick={()=> changeTheme()} src={getIcon.lightTheme()} alt="light theme" />

	)
};

export default SwitcherTheme