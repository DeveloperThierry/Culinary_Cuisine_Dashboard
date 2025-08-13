const Nav = () => {
  return (
    <div className="flex text-5xl px-2 py-12 mb-8 bg-white items-center justify-between shadow">
      <div className="gap-3 flex flex-row">
        <div><i className="fa-brands fa-earlybirds text-red-900"></i></div>
        <h1 className="font-bold text-red-900">Darby's Cusine</h1>
      </div>

      <div>
        <i className="fa-solid fa-bars text-red-900"></i>
      </div>
    </div>
  );
};

export default Nav;
