import React, { useState } from 'react'
import { CircularProgress } from '@mui/material';
 import Card from '../card/Card';
import styles from "./Section.module.css"
import Carousel from '../Carousel/Carousel';


const Section=({type,title,data,toggle=true})=> {

    const[carouselToggle,setCarouselToggle]=useState(true);

    const handleToggle=()=>{
        setCarouselToggle(!carouselToggle);
    }

  return (
    <div>
     {/* small top div with Name of section and "show all/collepse all" button */}
        <div className={styles.sectionTop}>
            <h3>{title}</h3>
            <h4 onClick={handleToggle} className={styles.toggleText}>

            {/*  check if we want to show the show/collapse button or not */}
            {toggle?(
                 carouselToggle?"Show All":"Collapse All"
            ):(
                <></>
            )}
            </h4>
        </div>
        
        {data.length?(
            <div className={styles.sectionInnerWrapper}>
             {/* here, if carouselToggle is false then show first condition here(means "show all albums"), else show second (means show "Collpased view with corousel")*/}
            {!carouselToggle?(
                <div className={styles.showAllWrapper}>
                {data.map((album)=>(
                    //show card here
                    <Card data={album} type={type} key={album.id}/>
                ))}
                </div>
            ):(
              <div>
              {/* show carousel here */}
              <Carousel data={data} renderCardComponent={(data)=><Card data={data} type={type}/>}/>
              </div>  
            )}
            </div>
        ):(
            <div className={styles.progressBar}>
            <CircularProgress />
            </div>
        )}

    </div>
  )
}

export default Section;