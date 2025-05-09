import { movies } from "@/lib/movies";
import Card from "@/components/Card";

const page = () => {
    return (
        <div className='flex flex-col gap-5 mx-auto p-6'>
            <div className="font-bold text-xl">Movies</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8">
                {movies.map((movie => (
                    <Card key={movie.id} data={movie} cardType={"movie"} />
                )))}
            </div>
        </div>
    )
}

export default page
