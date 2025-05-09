"use client"
import React, {useEffect, useState} from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Card from "@/components/Card";
import {Icon} from "@iconify/react";
import Link from "next/link";


const CardSlider = ({cardType, list}) => {
    const [isEnd, setIsEnd] = useState(false)
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
            setIsEnd(!api.canScrollNext())
            console.log(api.selectedScrollSnap())
        })
    }, [api])


    return (
        <>
            <div className="flex justify-between items-center px-6">
                <div className="font-bold text-2xl">{
                    cardType === "movie" ? "Movies" : "Series"
                }</div>
                <Link className="text-sm flex gap-1 items-center" href={cardType === "movie" ? "/movies" : "/series"}>
                    <span>View All</span>
                    <Icon icon="solar:arrow-right-linear" height="20"/>
                </Link>
            </div>
            <Carousel setApi={setApi}
                      opts={{
                          align: "start",
                      }}
                      className="group">
                <CarouselContent className="relative px-6">
                    {
                        list.map((data, index) => {
                            return (
                                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 ">
                                    <Card
                                        data={data}
                                        cardType={cardType}/>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <div
                    className="absolute top-1/2 group-hover:text-white text-white/40 -translate-y-1/2 pointer-events-none px-2 flex justify-between w-full">
                    {
                        current !== 0 ?
                            <button onClick={() => api.scrollPrev()}
                                    className="cursor-pointer p-1 rounded-full bg-black/50 border border-white/20  pointer-events-auto">
                                <Icon icon="solar:alt-arrow-left-linear" width="30"/>
                            </button> :
                            <div></div>
                    }

                    {
                        !isEnd &&
                        <button
                            onClick={() => api.scrollNext()}
                            className="cursor-pointer pointer-events-auto p-1 rounded-full bg-black/50 border border-white/20">
                            <Icon icon="solar:alt-arrow-right-linear" width="30"/>
                        </button>
                    }

                </div>
            </Carousel>
        </>
    );
};

export default CardSlider;