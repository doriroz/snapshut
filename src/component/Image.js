import React  from 'react'
import classes from './Image.module.css';
import { useContext } from 'react';
import { ImageContext } from '../App';

export const Image = (props) => {
  const imgCtxt = useContext(ImageContext);
  
  const imagesCol = imgCtxt?.imgResults?.map((val,ind)=> <a title={val.alt_description} href={val.urls.regular} target="_blank" key={ind}><img src={val.urls.thumb} /></a>)
  
  const style = {
    opacity : props.fold ? "0" : "1",
    height: props.fold ? "0px" : "72px",
    transition: "all 1s",
  } 

  return (
    <div className={classes.image}>
      <h1 style={style}>Result for <span>{props.category || 'cat'}</span> category</h1>
      {/* {!props.fold && <h1 style={style}>Result for <span>{props.category || 'cat'}</span> category</h1>} */}
      <div>   
      {imagesCol}
      </div>     
    </div>
  )
}


