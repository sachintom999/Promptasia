export const metadata = {
    title: "Promptasia",
    description: "AI generated prompts",
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}
