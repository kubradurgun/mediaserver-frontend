"use client"
import "./globals.css";

export type Props = {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" className="dark">
            <body
                className="min-h-screen"
            >
                {children}
            </body>
        </html>
    );
}
