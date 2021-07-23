import { useEffect, useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genreTitle, setGenreTitle] = useState('Ação');

  function handleClickButton(id: number, title: string) {
    setSelectedGenreId(id);
    setGenreTitle(title);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        selectedGenreId={selectedGenreId}
        onClickButton={handleClickButton}
      />
      <Content 
        selectedGenreId={selectedGenreId}
        genreTitle={genreTitle}
      />
    </div>
  )
}