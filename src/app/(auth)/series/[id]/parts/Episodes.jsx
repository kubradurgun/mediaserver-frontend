import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Episodes = ({seasons}) => {
    return (
        <div className="p-6">

            {/* Episodes */}
            <h2 className="text-2xl font-semibold mb-6">Episodes</h2>

            <Accordion type="single" collapsible>
                {seasons.map((season) => (
                    <AccordionItem key={season.order} value={`season-${season.order}`}>
                        <AccordionTrigger className="cursor-pointer">Season {season.order}</AccordionTrigger>
                        {season.episodes.map((ep) => (
                            <AccordionContent className="cursor-pointer" key={ep.order}>
                                Episode {ep.order} : {ep.title}
                            </AccordionContent>
                        ))}
                    </AccordionItem>
                ))}
            </Accordion>

        </div>
    )
}

export default Episodes