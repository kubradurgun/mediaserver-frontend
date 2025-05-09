"use client"
import Hero from "./parts/Hero";

const page = () => {

    return (
        <main className="bg-background text-foreground">
            <Hero
                bannerImage={"https://image.tmdb.org/t/p/w1280/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"}
                posterImage={"https://image.tmdb.org/t/p/w1280/r4JdkyE7AMJA8xODOfCC20pWvtU.jpg"}
                title={"Oppenheimer"}
                age={16}
                tags={["Biyografi", "Dram", "Tarih"]}
                description={
                    "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II. As the scientific director of the Manhattan Project, he faces moral dilemmas while navigating political pressures and personal struggles in a world forever changed by his work."
                }
                rating={8.6}
            />
        </main>
    )
}

export default page
