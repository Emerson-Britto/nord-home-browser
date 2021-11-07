import React, { useState, useEffect } from 'react';

import Header from 'components/header';
import SearchBar from 'components/searchBar';
import Clock from 'components/clock';
import Bookmarks from 'components/bookmarks';
import Styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'common/UI/theme';
import { Storage } from 'common/storage'

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
  const [theme, setTheme] = useState(false);

  useEffect(()=> {
    if(Storage.get('appTheme-344')) setTheme(Storage.get('appTheme-344'));
  },[])

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <ViewPort>
        <GlobalStyle/>
        <Header currentTheme={{theme, setTheme}}/>
        <SearchProvider>
          <Shortcut>
            <BookmarksProvider>
              <Clock/>
              <Bookmarks/>
            </BookmarksProvider>
          </Shortcut>
          <SearchBar theme={theme}/>
        </SearchProvider>
      </ViewPort>
    </ThemeProvider>
  );
}

export default App;
