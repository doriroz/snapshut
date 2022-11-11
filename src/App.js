import './App.css';
import Search from './component/Search';
import {Image}  from './component/Image';
import useAxios from './hooks/useAxios';
import { createContext } from 'react';
import { useRef } from 'react';
import Header from './UI/Header';
import Spinner from './UI/Spinner';
import { useState } from 'react';
export const ImageContext = createContext();
function App() {

  const inputRef = useRef();
  const {REACT_APP_ACCESS_KEY} = process.env;
  console.log(process.env);
  console.log(REACT_APP_ACCESS_KEY)
  const {isLoading, response, error,fetchData} = 
  // useAxios(`search/photos?page=1&query=cat&per_page=12&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  useAxios(`search/photos?page=1&query=cat&per_page=12&client_id=AFvenX_xNx8jN2meQf9V0PJmsAEFkFgIEH2NWUwAF2I`);
  
  // AFvenX_xNx8jN2meQf9V0PJmsAEFkFgIEH2NWUwAF2I
  console.log(response?.data?.results[0])
  const imgResults = response?.data?.results;
  

  const value = {
    isLoading,
    imgResults,
    error,
    fetchData
  }

  const [category,setCategory] = useState();
  const [fold,setFold] = useState(false);

  return (
    <ImageContext.Provider value={value}>
      <div className="App">
      <Header>
        <Search ref={inputRef} setCategory={setCategory} setFold={setFold} fold={fold}/>
      </Header>
      {value.isLoading ? <Spinner /> : <Image category={category} fold={fold}/>}
    </div>
    </ImageContext.Provider>
    
  );
}

export default App;
