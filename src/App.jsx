// DO NOT DELETE

import { useEffect, useState } from 'react';
import './App.css'
import { logRoles } from '@testing-library/react';
import { data } from 'browserslist';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  const handleUrlChange = () => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        return response.json();
      }).then(data =>{
        setDogUrl(data.message)
      })
    };



  return (
    <header>
      Dogアプリ
      <div>
        犬の画像を表示するサイトです
      </div>
      <img src={dogUrl}/>
      <button onClick={handleUrlChange}>更新</button>
    </header>
  )
}
