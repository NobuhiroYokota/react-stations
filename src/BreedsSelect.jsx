// @ts-check
import { useEffect, useState } from 'react';

export const BreedsSelect = ({breeds,setSelectedBreed, selectedBreed,FindBreed,SetFindBreed}) => {
  console.log(selectedBreed);

  const handleImageClick = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/4`)
    .then(response => {
      return response.json();
    }).then(data =>{
      SetFindBreed(data.message);
    })
  }
  return(
  <div>
    <select className='select' onChange={(e)=> setSelectedBreed(e.target.value)}>
      {Object.keys(breeds).map((breed,i)=>{
        return (
          <option value={breed} key={i}>{breed}</option>
        )
      })
    }
    </select>
    {FindBreed.map((url)=>{
      return (
        <img src={url}/>
      )
    })
    }

    <button onClick={handleImageClick}>表示</button>
  </div>
  )
}


export default BreedsSelect
