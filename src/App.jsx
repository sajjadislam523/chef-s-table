import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
    const [recipeQueue, setRecipeQueue] = useState([]);

    const addRecipeToQueue = (recipe) => {
        const isExist = recipeQueue.find(
            (prev) => prev.recipe_id === recipe.recipe_id
        );

        if (!isExist) {
            setRecipeQueue([...recipeQueue, recipe]);
        } else {
            alert("This recipe already exist!");
        }
    };
    console.log(recipeQueue);
    return (
        <div className="container px-4 mx-auto">
            {/* Navbar */}
            <Navbar />
            {/* Header section */}
            <Header />
            <OurRecipes />

            <section className="flex flex-col gap-6 md:flex-row">
                {/* Card section  */}
                <Recipes addRecipeToQueue={addRecipeToQueue} />
                {/* Sidebar */}
                <Sidebar recipeQueue={recipeQueue} />
            </section>
        </div>
    );
};

export default App;
