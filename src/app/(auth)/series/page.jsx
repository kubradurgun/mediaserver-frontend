import {series} from "@/lib/series";
import Card from "@/components/Card";

const page = () => {
    return (
        <div className='flex flex-col gap-5 mx-auto p-6'>
            <div className="font-bold text-xl">Series</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8">
                {series.map((data => (
                    <Card key={data.id} data={data} cardType={"series"}/>
                )))}
            </div>
        </div>
    )
}

export default page
