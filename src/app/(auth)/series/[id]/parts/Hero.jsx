import {Icon} from "@iconify/react";

const Hero = ({bannerImage, posterImage, title, age, tags, description, rating}) => {
    return (
        <div className={`relative h-[calc(100vh-4rem)]`}>
            <img className="opacity-20 size-full object-cover" src={bannerImage} alt="Banner-Image"/>
            <div className="absolute inset-0 flex">
                <div className="flex justify-center gap-2 flex-col bg-background/50 p-6">
                    <img className="object-contain flex-1 max-h-[calc(100%-3rem)] rounded-md"
                         src={posterImage} alt=""/>
                </div>
                <div className="flex flex-col flex-1 p-6 gap-5 justify-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <div className="flex gap-2 items-center">
                            <div className="p-1 border border-foreground">
                                {age}+
                            </div>
                            <span>{tags.join(", ")}</span>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Icon className="text-yellow-500" icon="solar:star-bold" width="24" height="24"/>
                        <span>{rating}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">Summary</h2>
                        <p>{description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero