import SearchBar from 'components/searchBar';
import Clock from 'components/clock';
import Bookmarks from 'components/bookmarks';
import Styled from 'styled-components';

import { GlobalStyle } from './GlobalStyle';
import SearchProvider from 'common/contexts/search';
import BookmarksProvider from 'common/contexts/bookmarks';

const ViewPort = Styled.section`
  display: flex;
  justify-content: center;
  align-Items: center;
  height: 100vh;
`

const Shortcut = Styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 80px;
`

function App() {
  return (
    <ViewPort>
      <GlobalStyle/>
      <SearchProvider>
      <Shortcut>
        <BookmarksProvider>
          <Clock/>
          <Bookmarks/>
        </BookmarksProvider>
      </Shortcut>
      <SearchBar/>
      </SearchProvider>
    </ViewPort>
  );
}

export default App;
