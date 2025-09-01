import { useEffect, useState } from "react";
import { recomendedTracks } from "../api/DeezerApi";
import Styles from '../modules/HomePage.module.css';

const Home = () => {
    const [recomended, setRecomended] = useState<any[]>([])

    useEffect(() => {
        recomendedTracks(setRecomended)
    }, [])
    return (



        <div className={Styles.cardContainer}>
            {recomended != null ? (
                recomended.map(recomend => (
                    <div className={Styles.container} key={recomend.id}>
                        <div className={Styles.card} id="card" style={{ '--after-bg': `url(${recomend.album.cover_medium})` }}>
                            <a href={`/infosong/${recomend.id}`}>
                                <div className={Styles.content} >
                                    {recomend.title}
                                </div>
                            </a>
                        </div>
                    </div>


                ))) : ("no hay contenido que mostrar")}

        </div>


    )
}

export default Home