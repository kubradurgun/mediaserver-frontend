import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container flex flex-col">
                <div className="grid grid-cols-2 md:grid-cols-4 py-10 gap-10">
                    <div className='flex flex-col gap-4'>
                        <h3 className="text-lg font-semibold">MovieHub</h3>
                        <p className="text-sm text-muted-foreground">Your ultimate destination for movies and TV shows.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className="text-sm font-semibold">Links</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Movies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    TV Shows
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    New Releases
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Popular
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className="text-sm font-semibold">Support</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Account
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className="text-sm font-semibold">Legal</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-20 border-t flex justify-center items-center text-sm text-muted-foreground">
                    © 2025 MovieHub. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
