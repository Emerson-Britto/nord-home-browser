import React from "react";
import Styled from 'styled-components';

import lBranding from 'assets/branding/branding-nord-whitetheme.png';
import dBranding from 'assets/branding/branding-nord-darktheme.png';

const BrandingFrame = Styled.img`
	width: 220px;
	margin-bottom: 5px;
`

const lightBranding = <BrandingFrame src={lBranding} alt="light Branding" />;
const darkBranding = <BrandingFrame src={dBranding} alt="dark Branding" />;

export default ({ theme }) => (theme ? darkBranding : lightBranding);
