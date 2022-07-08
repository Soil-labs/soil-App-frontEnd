import Header from "./Header";

function Layout({ children }) {
  return (
    <section className="bg-bgGrey min-h-screen">
      <div className="w-full max-w-screen-lg mx-auto">
        <Header />
        <div className="relative mx-6">
          <main>{children}</main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
