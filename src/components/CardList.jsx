import React from 'react'
import Card from './Card'

const CardList = ({list}) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8'>
            {list.map((data => {
                return (
                    <Card key={data.id} data={data}/>
                )
            }))}
        </div>
    )
}

export default CardList
