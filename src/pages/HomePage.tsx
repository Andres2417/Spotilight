import React, { useEffect, useState } from "react";
import { recomendedTracks } from "../api/DeezerApi";
import '../App.css' //TEMPORAL

const Home = () => {
    const [recomended, setRecomended] = useState(null)

    useEffect(() => {
        recomendedTracks(setRecomended)
    }, [])
    return (
        <>


            <div className="card-container">
                {recomended != null ? (
                    recomended.map(recomend => (
                        <div key={recomend.id}>
                            <div className="card" id="card">
                                <div className="content">
                                    <a href={`/infosong/${recomend.id}`}>{recomend.title}</a>
                                    <img src={recomend.album.cover_small} alt=""/>
                                </div>
                            </div>
                        </div>
                    ))) : ("no hay contenido que mostrar")}

            </div>

        </>
    )
}

export default Home