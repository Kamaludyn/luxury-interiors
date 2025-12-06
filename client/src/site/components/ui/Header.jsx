const Header = ({ title }) => {
  return (
    <header className="w-full bg-primary-600 px-10 md:px-32 pt-32 md:pt-20 pb-8">
      <h2 className="container text-center md:text-left text-4xl font-black text-primary-500">
        {title}
      </h2>
    </header>
  );
};

export default Header;
