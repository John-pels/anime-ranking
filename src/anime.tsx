import { FC } from "react"
import { iAnime } from "./types"

interface iAnimeCard {
    data: Array<iAnime>
}
const Anime: FC<iAnimeCard> = ({ data }) => {
    console.log('anime card data', data)
    return (
        <section className="anime-container">
            {
                data.map(({ rank, images, mal_id, title, rating, aired, airing }) => (
                    <div className="anime__card" key={mal_id}>
                        <span className="anime_rank">{rank}</span>
                        <div>
                            <img src={images.jpg.image_url} alt="" className="anime_image" />
                        </div>
                        <div className="anime__details">
                            <p className="anime__title">{title}</p>
                            <div className="anime__info">
                                <p className="anime__desc"><b>Released Date:</b>{new Date(aired.from).toDateString()}</p>
                                <p className="anime__desc"><b>Latest: </b>{airing === true || aired.to === undefined ? 'now' : new Date(aired.from).toDateString()}</p>
                                <p className="anime__desc"><b>Rating: </b>{rating}</p>
                            </div>

                        </div>
                    </div>
                ))
            }


        </section>
    )
}

export { Anime }
