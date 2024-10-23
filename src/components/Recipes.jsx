import { useEffect, useState } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("./recipes.json")
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, []);
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.recipe_id}
                        className="shadow-xl card bg-base-100"
                    >
                        <figure className="px-8 pt-6">
                            <img
                                className="w-full rounded-lg md:h-52"
                                src={recipe.recipe_image}
                                alt="Recipe image"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-lexend font-semibold text-[#282828]">
                                {recipe.recipe_name}
                            </h2>
                            <p className="text-[#878787]">
                                {recipe.short_description}
                            </p>
                            <h3 className="font-lexend font-semibold text-[#282828] text-md">
                                Ingredients: {recipe.ingredients.length}
                            </h3>
                            <ul className="ml-6">
                                {recipe.ingredients.map((item, idx) => (
                                    <li
                                        className="text-[#878787] list-disc"
                                        key={idx}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="justify-end card-actions">
                                <button className="rounded-full btn font-lexend btn-primary">
                                    Want to Cook
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;
