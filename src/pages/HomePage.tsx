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
                        <a href={`/infosong/${recomend.id}`}>
                            <div className={Styles.card} id="card">
                                <div className={Styles.content}>
                                    <div className={Styles.blur}>
                                        <div className={Styles.cover}>
                                            <img src={recomend.album.cover_medium} alt="" />
                                        </div>
                                        <h2>{recomend.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>


                ))) : ("no hay contenido que mostrar")}

        </div>


    )
}

export default Home