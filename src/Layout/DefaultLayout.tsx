import Navbar from "../Components/Navbar"

function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default DefaultLayout