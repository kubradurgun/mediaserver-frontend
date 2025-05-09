"use client"
import {AppSidebar} from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Separator} from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import {usePathname} from "next/navigation";
import {useEffect} from "react";


export default function AuthLayout({children}) {
    const pathname = usePathname()
    useEffect(() => {
        console.log(pathname)
    }, [pathname])
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header
                    className="flex h-16 shrink-0 sticky top-0 bg-card z-100 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className=""/>
                        <Separator orientation="vertical" className="data-[orientation=vertical]:h-4"/>
                        <Breadcrumb>
                            <BreadcrumbList>
                                {
                                    pathname === "/" &&
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Home Page</BreadcrumbPage>
                                    </BreadcrumbItem>
                                } {
                                pathname === "/movies" &&
                                <>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="/">
                                            Home Page
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block"/>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Movies</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            } {
                                pathname === "/series" &&
                                <>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="/">
                                            Home Page
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block"/>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Series</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            }{
                                // (/\/movies\/[0-9]+/gm).test(pathname) &&
                                pathname.includes("/movies/") &&
                                <>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="/">
                                            Home Page
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block"/>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="/movies">
                                            Movies
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block"/>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Detail</BreadcrumbPage>
                                    </BreadcrumbItem>

                                </>
                            }{
                                // (/\/series\/[0-9]+/gm).test(pathname) &&
                                pathname.includes("/series/") &&
                                <>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="/">
                                            Home Page
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block"/>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="/series">
                                            Series
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block"/>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Detail</BreadcrumbPage>
                                    </BreadcrumbItem>

                                </>
                            }

                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <main className="">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
