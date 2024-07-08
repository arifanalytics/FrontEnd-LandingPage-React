const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900" style={{ backgroundColor: '#CAEEFB' }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo_blue.png" className="h-16" alt="Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 items-center md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
              <a href="/" className="block py-2 px-3 text-gray-900 rounded md:hover:text-blue-700 font-bold ">Home</a>
              </li>
              <li>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded md:hover:text-blue-700 font-bold ">About</a>
              </li>
              <li>
                <a href="https://wa.me/628117576088" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Join our waitlist</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

interface HeaderProps {
  title: string;
}

export default Header;
