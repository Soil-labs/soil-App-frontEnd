function MainWhiteContainerLayout({ children }) {
  return (
    <div className="w-[757px] h-[958px] rounded-2xl bg-white shadow-lg m-auto">
      <div className="px-[40px] py-[60px] ">{children}</div>
    </div>
  );
}

export default MainWhiteContainerLayout;
