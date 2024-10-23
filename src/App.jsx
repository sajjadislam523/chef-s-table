import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
    const [recipeQueue, setRecipeQueue] = useState([]);
    const [preparingRecipe, setPreparingRecipe] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

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

    const addToPreparingRecipe = (id) => {
        const deletedRecipe = recipeQueue.find(
            (recipe) => recipe.recipe_id === id
        );

        const updatedRecipeQueue = recipeQueue.filter(
            (recipe) => recipe.recipe_id !== id
        );
        setRecipeQueue(updatedRecipeQueue);
        setPreparingRecipe([...preparingRecipe, deletedRecipe]);
    };

    const calculateTotalTimeAndCalories = (time, calories) => {
        setTotalTime(totalTime + time);
        setTotalCalories(totalCalories + calories);
    };

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
                <Sidebar
                    addToPreparingRecipe={addToPreparingRecipe}
                    recipeQueue={recipeQueue}
                    preparingRecipe={preparingRecipe}
                    calculateTotalTimeAndCalories={
                        calculateTotalTimeAndCalories
                    }
                    totalTime={totalTime}
                    totalCalories={totalCalories}
                />
            </section>
        </div>
    );
};

export default App;
