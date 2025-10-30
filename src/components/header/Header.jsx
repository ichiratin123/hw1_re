export default function Header() {
  return (
    <div>
      <header className="bg-black py-6">
        <div className="container mx-auto flex justify-between">
          <div className="logo font-medium text-white text-[20px]">
            <a href="">Start Bootstrap</a>
          </div>
          <div className="navbar">
            <nav className="flex space-x-4">
              <a href="" className="text-white ">
                Home
              </a>
              <a href="" className="text-gray-400 hover:text-gray-200">
                About
              </a>
              <a href="" className="text-gray-400 hover:text-gray-200">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
