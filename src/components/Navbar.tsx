import { LogOut, ShoppingCart, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-2 pb-3">
      <h1 className=" font-bold text-lg sm:text-xl hidden lg:block lg:w-32 ps-1.5 ">Tech Shop</h1>
      <div className="flex justify-between w-full items-center">
        <div className="w-full relative mx-3">
          <input type="text" className="border me-2 bg-gray-50 w-full py-2.5 ps-2 focus:outline-none rounded-md" placeholder="Cari disini.." />
          <span className="inline-block bg-blue-600 px-2.5 text-white py-1.5 text-xl cursor-pointer rounded-md absolute top-0.5 right-0.5">🔍︎</span>
        </div>
        <div className=" ps-2 pe-5 flex justify-center items-center gap-5 lg:gap-10">
          <span className="text-2xl">
            <User size={30} strokeWidth={1.5} />
          </span>
          <span className="text-2xl hidden lg:block">
            <ShoppingCart size={30} strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
