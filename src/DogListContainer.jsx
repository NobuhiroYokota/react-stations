// @ts-check
import { useEffect, useState } from 'react';
import BreedsSelect from './BreedsSelect';
import { data } from 'browserslist';

export const DogListContainer = () => {


    const [breeds, setBreeds] = useState('')
    const [selectedBreed, setSelectedBreed] = useState('affenpinscher')
    const [findBreed , setFindBreed] = useState([])

    useEffect (()=> {
      fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        return response.json();
      }).then(data => {
        setBreeds(data.message);
      })
  },[])



  return(
    <div>
      <BreedsSelect breeds={breeds} setSelectedBreed={setSelectedBreed} selectedBreed={selectedBreed} FindBreed={findBreed} SetFindBreed={setFindBreed}/>
    </div>
  )
}

export default DogListContainer
