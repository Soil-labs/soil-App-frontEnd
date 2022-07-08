import Header from "./Header";

function Layout({ children }) {
  return (
    <section className="bg-bgGrey min-h-screen">
      <div className="w-full max-w-screen-lg mx-auto">
        <Header></Header>
        <div>
          <main>{children}</main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
