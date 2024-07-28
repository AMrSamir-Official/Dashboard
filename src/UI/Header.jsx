function Header({ Title }) {
  return (
    <header className="w-full mb-10">
      <div className="container w-full text-left">
        <h1 className="font-bold text-[3rem] text-[#107cff]">{Title}</h1>
      </div>
    </header>
  );
}

export default Header;
