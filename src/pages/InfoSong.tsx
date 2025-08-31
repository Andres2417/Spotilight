import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { info } from "../api/DeezerApi";

const Info = () =>{

    const params = useParams()

    const[songs, setSongs]= useState(null)

    useEffect(()=>{
        info(params.id, setSongs)
    },[])

    return(
        <>
        {songs!= null ?(
            <div>
            <h2>{songs.title}</h2>
            
            <h2>{songs.release_date}</h2>
            </div>
        ):("")}
        
        </>
    )

}
export default Info