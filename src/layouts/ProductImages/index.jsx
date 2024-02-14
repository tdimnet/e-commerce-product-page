function Layout({ children }) {
    return (
        <div className="hidden md:grid md:grid-cols-4 md:h-20">
            {children}
        </div>
    )
}

export default Layout
