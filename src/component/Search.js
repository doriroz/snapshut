import {React,useEffect,useContext,forwardRef} from 'react'
import { ImageContext } from '../App';
import classes from './Search.module.css';
import SearchImg from '../assets/search.png';

function Search(props,ref) {

  const searchCntxt = useContext(ImageContext);
  
  const updateRef = () => {
    console.log(ref.current.value);
    searchCntxt.fetchData(`search/photos?page=1&query=${ref.current.value}&per_page=12&client_id=AFvenX_xNx8jN2meQf9V0PJmsAEFkFgIEH2NWUwAF2I`);
    props.setCategory(ref.current.value);
    ref.current.value = "";
  }

  const clickHandler = () => {
    props.setFold(!props.fold);
  }

 const foldResult = props.fold ? '+' : '-';
  
 const style = {
  right:props.fold ? "2rem" : "2.5rem"
 }

  console.log(searchCntxt.isLoading);

  return (
    <div className={classes.search}>
      <div>
        <p>Search for photo</p>
        <div>
          <input type="text" placeholder="Find Anyting..." ref={ref}/>
          <img onClick={updateRef} src={SearchImg}/>
        </div>
        <div style={style} className={classes['search_fold']} onClick={clickHandler}>
        {foldResult || '-'} 
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Search)