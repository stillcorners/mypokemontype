import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './stores/store';
import { language } from './features/languageSlice';
import Offense from './pages/Offense';
import Defense from './pages/Defense';
import More from './pages/More';

export function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode.theme);
  const lang = useSelector((state: RootState) => state.language.lang);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode);
  }, [darkMode]);

  useEffect(() => {
    dispatch(language(lang as 'kr' | 'us' | 'jp'));
  }, [dispatch, lang]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Offense />} />
        <Route path="/Defense" element={<Defense />} />
        <Route path="/More" element={<More />} />
      </Routes>
    </>
  );
}

export default App;
