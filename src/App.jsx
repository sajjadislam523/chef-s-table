import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";

const App = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Header section */}
            <Header />

            <OurRecipes />
        </div>
    );
};

export default App;
