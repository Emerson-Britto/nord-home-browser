import SearchBar from 'components/searchBar';
import Styled from 'styled-components';

import { GlobalStyle } from './GlobalStyle';

const ViewPort = Styled.section`
  display: flex;
  justify-content: center;
  align-Items: center;
  height: 100vh;
`

function App() {
  return (
    <ViewPort>
      <GlobalStyle/>
      <SearchBar/>
    </ViewPort>
  );
}

export default App;
