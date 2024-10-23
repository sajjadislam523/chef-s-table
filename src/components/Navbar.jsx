const Navbar = () => {
    return (
        <div>
            <div className="px-8 mt-4 navbar bg-base-100">
                <div className="navbar-start">
                    <a className="text-2xl font-bold font-lexend text-[#150B2B]">
                        Recipe Calories
                    </a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="flex items-center gap-8 text-[#150B2BB3] font-lexend">
                        <li className="cursor-pointer hover:text-[#150B2B]">
                            Home
                        </li>
                        <li className="cursor-pointer hover:text-[#150B2B]">
                            Recipes
                        </li>
                        <li className="cursor-pointer hover:text-[#150B2B]">
                            About
                        </li>
                        <li className="cursor-pointer hover:text-[#150B2B]">
                            Search
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-4 navbar-end">
                    <div className="relative items-center justify-center hidden md:flex">
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/fluency-systems-filled/32/search.png"
                            alt="search"
                            className="absolute left-3"
                        />
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 focus:outline-none font-lexend text-base rounded-full placeholder:text-[#150B2BB3] bg-[#150B2B0D]"
                        />
                    </div>
                    <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/windows/32/user-male-circle.png"
                        alt="user-male-circle"
                    />
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <div className="dropdown-content z-[1] bg-white rounded-xl shadow flex flex-col p-4 items-center">
                            <ul
                                tabIndex={0}
                                className="flex flex-col  items-center gap-8 text-[#150B2BB3] font-lexend my-3 w-52 p-2"
                            >
                                <li className="cursor-pointer hover:text-[#150B2B]">
                                    Home
                                </li>
                                <li className="cursor-pointer hover:text-[#150B2B]">
                                    Recipes
                                </li>
                                <li className="cursor-pointer hover:text-[#150B2B]">
                                    About
                                </li>
                                <li className="cursor-pointer hover:text-[#150B2B]">
                                    Search
                                </li>
                            </ul>

                            <div className="relative flex items-center justify-center md:hidden">
                                <img
                                    width="20"
                                    height="20"
                                    src="https://img.icons8.com/fluency-systems-filled/32/search.png"
                                    alt="search"
                                    className="absolute left-3"
                                />
                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Search"
                                    className="pl-10 pr-4 py-2 focus:outline-none font-lexend text-base rounded-full placeholder:text-[#150B2BB3] bg-[#150B2B0D]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
