import Header from "./Header";

function Layout({ children }) {
    return (
        <section className="bg-bgGrey w-full flex flex-col h-screen overflow-hidden">
            <div className="w-full h-full flex flex-col max-w-full items-center px-72">
                <Header />
                <div className="relative flex-1">
                    <main className="h-[100%]">{children}</main>
                </div>
            </div>
        </section>
    );
}

export default Layout;
