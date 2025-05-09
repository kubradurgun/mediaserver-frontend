"use client"
import Hero from "./parts/Hero";
import Episodes from "./parts/Episodes";


const page = () => {

    const seasons = [
        {
            order: 1,
            episodes: [
                {order: 1, title: "Pilot"},
                {order: 2, title: "Cat's in the Bag..."},
                {order: 3, title: "...And the Bag's in the River"},
                {order: 4, title: "Cancer Man"},
                {order: 5, title: "Gray Matter"},
                {order: 6, title: "Crazy Handful of Nothin'"},
                {order: 7, title: "A No-Rough-Stuff-Type Deal"}
            ]
        },
        {
            order: 2,
            episodes: [
                {order: 1, title: "Seven Thirty-Seven"},
                {order: 2, title: "Grilled"},
                {order: 3, title: "Bit by a Dead Bee"},
                {order: 4, title: "Down"},
                {order: 5, title: "Breakage"},
                {order: 6, title: "Peekaboo"},
                {order: 7, title: "Negro y Azul"},
                {order: 8, title: "Better Call Saul"},
                {order: 9, title: "4 Days Out"},
                {order: 10, title: "Over"},
                {order: 11, title: "Mandala"},
                {order: 12, title: "Phoenix"},
                {order: 13, title: "ABQ"}
            ]
        },
        {
            order: 3,
            episodes: [
                {order: 1, title: "No Más"},
                {order: 2, title: "Caballo Sin Nombre"},
                {order: 3, title: "I.F.T."},
                {order: 4, title: "Green Light"},
                {order: 5, title: "Mas"},
                {order: 6, title: "Sunset"},
                {order: 7, title: "One Minute"},
                {order: 8, title: "I See You"},
                {order: 9, title: "Kafkaesque"},
                {order: 10, title: "Fly"},
                {order: 11, title: "Abiquiú"},
                {order: 12, title: "Half Measures"},
                {order: 13, title: "Full Measure"}
            ]
        },
        {
            order: 4,
            episodes: [
                {order: 1, title: "Box Cutter"},
                {order: 2, title: "Thirty-Eight Snub"},
                {order: 3, title: "Open House"},
                {order: 4, title: "Bullet Points"},
                {order: 5, title: "Shotgun"},
                {order: 6, title: "Cornered"},
                {order: 7, title: "Problem Dog"},
                {order: 8, title: "Hermanos"},
                {order: 9, title: "Bug"},
                {order: 10, title: "Salud"},
                {order: 11, title: "Crawl Space"},
                {order: 12, title: "End Times"},
                {order: 13, title: "Face Off"}
            ]
        },
        {
            order: 5,
            episodes: [
                {order: 1, title: "Live Free or Die"},
                {order: 2, title: "Madrigal"},
                {order: 3, title: "Hazard Pay"},
                {order: 4, title: "Fifty-One"},
                {order: 5, title: "Dead Freight"},
                {order: 6, title: "Buyout"},
                {order: 7, title: "Say My Name"},
                {order: 8, title: "Gliding Over All"},
                {order: 9, title: "Blood Money"},
                {order: 10, title: "Buried"},
                {order: 11, title: "Confessions"},
                {order: 12, title: "Rabid Dog"},
                {order: 13, title: "To'hajiilee"},
                {order: 14, title: "Ozymandias"},
                {order: 15, title: "Granite State"},
                {order: 16, title: "Felina"}
            ]
        }
    ];


    return (
        <main className="bg-background text-foreground">
            <Hero
                bannerImage={"/images/backdrop-posters/breaking-bad.jpg"}
                posterImage={"https://image.tmdb.org/t/p/w1280/ineLOBPG8AZsluYwnkMpHRyu7L.jpg"}
                title={"Breaking Bad"}
                age={18}
                tags={["Dram", "Suç", "Gerilim"]}
                description={"Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime."}
                rating={9.5}
            />
            <Episodes seasons={seasons}/>
        </main>
    )
}

export default page
