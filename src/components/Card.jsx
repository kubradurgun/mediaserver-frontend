import React from 'react'
import Link from 'next/link'
import {FaStar} from "react-icons/fa";


const Card = ({data, cardType}) => {
    return (
        <Link href={`${cardType === "movie" ? "/movies" : "/series"}/${data.id}`}
              className='border overflow-hidden border-foreground/10 flex flex-col rounded-sm bg-card'>
            <div className="relative">
                <img className='' src={data.poster} alt=""/>
                <div
                    className="flex gap-1 items-center bg-black/50 absolute top-3 right-0 px-2 py-1 border border-white/20 border-r-0 rounded-l-lg">
                    <FaStar className='text-yellow-400'/>
                    <div className="text-white text-sm font-semibold">{data.imdb}</div>
                </div>
            </div>
        </Link>
    )
}

export default Card
