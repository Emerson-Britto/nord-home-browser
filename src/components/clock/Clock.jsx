import React/*, { useState, useEffect }*/ from 'react';
import Moment from 'react-moment';
import Styled from 'styled-components';

const ViewPort = Styled.section`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`

const RealTime = Styled(Moment)`
	font-size: 3.3em;
	margin-bottom: 10px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	color: #fff;
`

const DateTime = Styled(Moment)`
	font-size: 1.7em;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	color: #fff;
`

const Clock = () => {

    return (
    	<ViewPort>
	    	<RealTime interval={1000} format="hh:mm" />
	    	<DateTime interval={1000} format="ddd, MMM DD" />
    	</ViewPort>
    );
}

export default Clock;
