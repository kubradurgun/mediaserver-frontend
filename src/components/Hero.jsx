"use client"
import {Carousel, CarouselContent, CarouselItem} from "./ui/carousel";
import {trendingList} from "@/lib/trendingList"
import Autoplay from "embla-carousel-autoplay"
import {useEffect, useState} from "react";
import {clsx} from "clsx";
import {Icon} from "@iconify/react";
import Link from "next/link";


const Hero = () => {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })

    }, [api])


    return (
        <Carousel setApi={setApi}
                  opts={{
                      loop: true,
                  }}
                  plugins={[
                      Autoplay({
                          delay: 5000,
                      }),
                  ]}
                  className="w-full relative`">
            <div className="absolute flex gap-x-1 bottom-3 z-40 left-1/2 -translate-x-1/2 text-white">{
                trendingList.map((_, index) => {
                    return (
                        <div key={index} className={clsx(
                            "rounded-full size-2",
                            {
                                "bg-white/50": current !== index,
                                "bg-white": current === index,
                            }
                        )}></div>
                    )
                })
            }</div>
            <div
                className="absolute top-1/2 -translate-y-1/2 text-white z-10 pointer-events-none w-full flex px-2 justify-between">
                <button className="pointer-events-auto cursor-pointer"
                        onClick={() => api.scrollPrev()}
                >
                    <Icon icon="solar:alt-arrow-left-linear" width="30"/>
                </button>
                <button className="pointer-events-auto cursor-pointer"
                        onClick={() => api.scrollNext()}
                >
                    <Icon icon="solar:alt-arrow-right-linear" width="30"/>
                </button>
            </div>
            <a className="absolute right-5 bottom-5 z-50 cursor-pointer animate-bounce" href="#content">
                <Icon
                    icon="lineicons:scroll-down-2" width="35"/>
            </a>
            <CarouselContent className="">
                {trendingList.map((trend, index) => (
                    <CarouselItem key={index}>
                        {/*-------*/}
                        <div className={`relative h-[calc(100vh-4rem)]`}>
                            <Link href={`/${trend.type}/${trend.id}`}>
                                <img className="opacity-20 size-full object-cover" src={trend.poster}
                                     alt="Banner-Image"/>
                                <div className="absolute inset-0 flex">
                                    <div className="flex justify-center gap-2 flex-col bg-background/50 p-6">
                                        <img className="object-contain flex-1 max-h-[calc(100%-3rem)] rounded-md"
                                             src={trend.poster} alt=""/>
                                    </div>
                                    <div className="flex flex-col flex-1 p-6 gap-5 justify-center">
                                        <div className="flex flex-col gap-2">
                                            <h1 className="text-4xl font-bold">{trend.title}</h1>
                                            <div className="flex gap-2 items-center">
                                                <div className="p-1 border border-foreground">
                                                    {trend.age}+
                                                </div>
                                                <span>{trend.tags.join(", ")}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <Icon className="text-yellow-500" icon="solar:star-bold" width="24"
                                                  height="24"/>
                                            <span>{trend.rating}</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-2xl">Summary</h2>
                                            <p>{trend.description}</p>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default Hero
