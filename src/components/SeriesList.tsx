import React from 'react'
import {series} from "@/lib/series"
import SeriesCard from "@/components/SeriesCard";

const SeriesList = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8'>
            {series.map((series => {
                return (
                    <SeriesCard key={series.id} series={series}/>
                )
            }))}
        </div>
    )
}

export default SeriesList
