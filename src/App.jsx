import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="container px-4 mx-auto">
            {/* Navbar */}
            <Navbar />
            {/* Header section */}
            <Header />
            <OurRecipes />

            <section className="flex flex-col gap-6 md:flex-row">
                {/* Card section  */}
                <Recipes />
                {/* Sidebar */}
                <Sidebar />
            </section>
        </div>
    );
};

export default App;
