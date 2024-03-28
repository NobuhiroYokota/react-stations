// @ts-check
import { useEffect, useState } from 'react';

export const DogImage = ({imageUrl, Click}) => {
  // const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  // const handleUrlChange = () => {
  //     fetch('https://dog.ceo/api/breeds/image/random')
  //     .then(response => {
  //       return response.json();
  //     }).then(data =>{
  //       setDogUrl(data.message)
  //     })
  //   };

  return (
    <div className='dog-container'>
      <img className="image" src={imageUrl} alt='url'/>
      <button className="button" onClick={Click}>更新</button>
    </div>
  )
}

export default DogImage



