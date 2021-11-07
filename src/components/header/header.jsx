import Styled from 'styled-components';

import SwitcherTheme from 'components/switcherTheme';

const ViewPort = Styled.section`
	position: fixed;
	display: flex;
	justify-content: flex-end;
	align-Items: center;
	top: 0;
	left: 0;
	width: 100vw;
	height: 8vh;
`

const Header = ({ currentTheme }) => {

	return (
		<ViewPort>
			<SwitcherTheme currentTheme={currentTheme}/>
		</ViewPort>
	);
}

export default Header;
