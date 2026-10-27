import type { Metadata, Viewport } from 'next'
import { Fraunces, Playfair_Display } from 'next/font/google'

import './globals.css'

const fraunces = Fraunces({
    subsets: ['latin'],
    axes: ['opsz', 'SOFT'],
    variable: '--font-fraunces',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-playfair',
})

export const metadata: Metadata = {
    title: 'A & V',
    description:
        'Counting the days since our wedding and since our son and daughter arrived.',
    icons: {
        apple: '/AV-logo.jpg',
    },
}

export const viewport: Viewport = {
    themeColor: '#b9b2cb',
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${fraunces.variable} ${playfair.variable}`}>
            <body>{children}</body>
        </html>
    )
}
