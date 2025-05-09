import { Icon } from "@iconify/react";

export type Props = {
    bannerImage: string;
    posterImage: string;
    title: string;
    age: number;
    tags: string[];
    description: string;
    rating: number;
}

const Hero = ({ bannerImage, posterImage, title, age, tags, description, rating }: Props) => {
    return (
        <div className={`relative h-[calc(100vh-4rem)]`}>
            <img className="opacity-20 size-full object-cover" src={bannerImage} alt="Banner-Image" />
            <div className="absolute inset-0 flex backdrop-blur-sm sm:flex-row flex-col">
                <div
                    className="flex justify-center items-center gap-2 flex-col bg-background/50 sm:p-6 p-2 h-1/2 sm:h-auto">
                    <img className="object-contain flex-1 max-h-[calc(100%-3rem)] rounded-md"
                        src={posterImage} alt="" />
                    <button
                        className="sm:w-full w-fit bg-primary px-4 text-primary-foreground flex gap-2 py-2 justify-center items-center rounded-md ">
                        <Icon icon="solar:play-bold" width="18" />
                        <span className="text-sm font-semibold cursor-pointer">Start Watching</span>
                    </button>
                </div>
                <div className="flex flex-col flex-1 p-6 sm:gap-5 gap-2 justify-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="sm:text-4xl text-2xl font-bold">{title}</h1>
                        <div className="flex gap-2 items-center">
                            <div className="py-0.5 px-1 text-sm sm:text-base border border-foreground">
                                {age}+
                            </div>
                            <span className="text-sm sm:text-base">{tags.join(", ")}</span>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Icon className="text-yellow-500" icon="solar:star-bold" width="24" height="24" />
                        <span>{rating}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="sm:text-2xl text-base">Summary</h2>
                        <p className="sm:text-base text-sm">{description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero