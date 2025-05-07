import Hero from "@/components/Hero";
import Link from "next/link";
import {Icon} from "@iconify/react";
import SeriesList from "@/components/SeriesList";
import CardSlider from "@/components/CardSlider";
import {movies} from "@/lib/movies";
import {series} from "@/lib/series";

export default function Home() {
    return (
        <div className="flex flex-col gap-10 pb-6">
            <Hero/>
            <div id="content" className="flex flex-col gap-5 scroll-m-20">

                <CardSlider
                    cardType="movie"
                    list={movies}/>
            </div>
            <div className="flex flex-col gap-5">
                <CardSlider
                    cardType="series"
                    list={series}/>
            </div>

        </div>
    );
}
