"use client"
import {NavUser} from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    }
}
const genres = [
    {title: "Action", href: "/genres/action"},
    {title: "Adventure", href: "/genres/adventure"},
    {title: "Animation", href: "/genres/animation"},
    {title: "Comedy", href: "/genres/comedy"},
    {title: "Crime", href: "/genres/crime"},
    {title: "Documentary", href: "/genres/documentary"},
    {title: "Drama", href: "/genres/drama"},
    {title: "Family", href: "/genres/family"},
    {title: "Fantasy", href: "/genres/fantasy"},
    {title: "History", href: "/genres/history"},
    {title: "Horror", href: "/genres/horror"},
    {title: "Music", href: "/genres/music"},
    {title: "Mystery", href: "/genres/mystery"},
    {title: "Romance", href: "/genres/romance"},
    {title: "Science Fiction", href: "/genres/science-fiction"},
    {title: "TV Movie", href: "/genres/tv-movie"},
    {title: "Thriller", href: "/genres/thriller"},
    {title: "War", href: "/genres/war"},
    {title: "Western", href: "/genres/western"}
];


export function AppSidebar({
                               ...props
                           }) {
    return (
        <Sidebar collapsible={"offcanvas"} {...props}>
            <SidebarHeader>
                <Link href="/" className="font-bold text-xl px-4">MediaServer</Link>
            </SidebarHeader>
            <SidebarContent>
                <div className="flex flex-col h-full gap-2">
                    <h2 className="text-foreground font-semibold px-6 bg-card">Genres</h2>
                    <nav className="flex flex-col flex-1 overflow-y-scroll hide-scrollbar">
                        {genres.map((genre) => (
                            <Link href={genre.href} key={genre.title}
                                  className="text-sm px-6 hover:bg-black/5 py-2"
                            >
                                {genre.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    );
}
