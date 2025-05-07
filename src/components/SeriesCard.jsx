import React from 'react'
import Link from 'next/link'
import {FaStar} from "react-icons/fa";


const SeriesCard = ({series}) => {
    return (
        <Link href={`/series/${series.id}`}
              className='border overflow-hidden border-foreground/10 flex flex-col rounded-sm bg-card'>
            <div className="relative">
                <img className='' src={series.poster} alt=""/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 "></div>
                <div className="flex gap-1 items-center absolute bottom-3 right-3">
                    <FaStar className='text-yellow-400'/>
                    <div className="text-white text-sm font-semibold">{series.imdb}</div>
                </div>
            </div>
            <div className="flex flex-col p-2 gap-2">
                <div className="font-semibold">{series.title}</div>
                <div className="flex gap-1">
                    {
                        series.genres.map((genre, index) => {
                            return (
                                <div key={index}
                                     className="text-[10px] font-semibold text-foreground/70 flex justify-center rounded-sm flex-1 py-1 bg-background border-foreground/10 border">{genre}</div>
                            )
                        })
                    }
                </div>
            </div>

        </Link>
    )
}

export default SeriesCard
