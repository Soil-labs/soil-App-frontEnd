import HeaderNew from "./HeaderNew";

function Layout({ children }) {
  return (
    <section className="bg-bgGrey min-h-screen">
      <div className="w-full max-w-screen-xl mx-auto">
        <HeaderNew />
        <div className="relative mx-6">
          <main>{children}</main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
