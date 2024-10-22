import { useState } from "react";

const Header = () => {
    const [isActive, setIsActive] = useState("explore");

    const buttonToggleHandler = (buttonType) => {
        setIsActive(buttonType);
    };

    return (
        <div className="bg-[url('/src/assets/image.png')] bg-cover bg-center bg-no-repeat h-screen m-8 rounded-3xl w-11/12 mx-auto flex flex-col items-center justify-center text-white px-48 space-y-8">
            <h1 className="text-5xl font-bold text-center font-lexend">
                Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="text-lg text-center font-lexend">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.
            </p>
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => buttonToggleHandler("explore")}
                    className={`px-4 py-2 font-bold  transition duration-300 ease-in-out ${
                        isActive === "explore"
                            ? "text-black bg-green-500 border-2 border-green-500 rounded-full"
                            : "bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black"
                    }`}
                >
                    Explore Now
                </button>

                <button
                    onClick={() => buttonToggleHandler("feedback")}
                    className={`px-4 py-2 font-bold  transition duration-300 ease-in-out ${
                        isActive === "feedback"
                            ? "text-black bg-green-500 border-2 border-green-500 rounded-full"
                            : "bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black"
                    }`}
                >
                    Our Feedback
                </button>
            </div>
        </div>
    );
};

export default Header;
