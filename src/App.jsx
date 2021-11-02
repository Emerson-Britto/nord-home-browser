import SearchBar from 'components/searchBar';
import Styled from 'styled-components';

import { GlobalStyle } from './GlobalStyle';
import SearchProvider from 'common/contexts/search';

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
      <SearchProvider>
      <SearchBar/>
      </SearchProvider>
    </ViewPort>
  );
}

export default App;
