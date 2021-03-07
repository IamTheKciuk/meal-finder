import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// components
import Loading from "../components/Loading";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleMeal = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [meal, setMeal] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(`${url}${id}`);
            const data = await response.json();

            // destructere data if fetch is ok
            if (data.meals) {
                const {
                    strMeal: name,
                    strMealThumb: image,
                    strArea: cuisine,
                    strCategory: category,
                    strInstructions: instructions,
                    strIngredient1,
                    strMeasure1,
                    strIngredient2,
                    strMeasure2,
                    strIngredient3,
                    strMeasure3,
                    strIngredient4,
                    strMeasure4,
                    strIngredient5,
                    strMeasure5,
                    strIngredient6,
                    strMeasure6,
                    strIngredient7,
                    strMeasure7,
                    strIngredient8,
                    strMeasure8,
                    strIngredient9,
                    strMeasure9,
                    strIngredient10,
                    strMeasure10,
                    strIngredient11,
                    strMeasure11,
                    strIngredient12,
                    strMeasure12,
                    strIngredient13,
                    strMeasure13,
                    strIngredient14,
                    strMeasure14,
                    strIngredient15,
                    strMeasure15,
                    strIngredient16,
                    strMeasure16,
                    strIngredient17,
                    strMeasure17,
                    strIngredient18,
                    strMeasure18,
                    strIngredient19,
                    strMeasure19,
                    strIngredient20,
                    strMeasure20,
                } = data.meals[0];

                const ingredients = [
                    { ingredient: strIngredient1, measure: strMeasure1 },
                    { ingredient: strIngredient2, measure: strMeasure2 },
                    { ingredient: strIngredient3, measure: strMeasure3 },
                    { ingredient: strIngredient4, measure: strMeasure4 },
                    { ingredient: strIngredient5, measure: strMeasure5 },
                    { ingredient: strIngredient6, measure: strMeasure6 },
                    { ingredient: strIngredient7, measure: strMeasure7 },
                    { ingredient: strIngredient8, measure: strMeasure8 },
                    { ingredient: strIngredient9, measure: strMeasure9 },
                    { ingredient: strIngredient10, measure: strMeasure10 },
                    { ingredient: strIngredient11, measure: strMeasure11 },
                    { ingredient: strIngredient12, measure: strMeasure12 },
                    { ingredient: strIngredient13, measure: strMeasure13 },
                    { ingredient: strIngredient14, measure: strMeasure14 },
                    { ingredient: strIngredient15, measure: strMeasure15 },
                    { ingredient: strIngredient16, measure: strMeasure16 },
                    { ingredient: strIngredient17, measure: strMeasure17 },
                    { ingredient: strIngredient18, measure: strMeasure18 },
                    { ingredient: strIngredient19, measure: strMeasure19 },
                    { ingredient: strIngredient20, measure: strMeasure20 },
                ];

                // creating newMeal based on destructured data
                const newMeal = {
                    name,
                    image,
                    cuisine,
                    category,
                    instructions,
                    ingredients,
                };

                // set Meal
                setMeal(newMeal);
            } else {
                // if no fetched data
                setMeal(null);
            }
            setLoading(false);
        } catch (error) {
            // if error
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    const { name, image, cuisine, category, instructions, ingredients } = meal;

    return (
        <main className="page single-meal-page">
            <Link to="/search" className="btn back-btn">
                Back
            </Link>
            <section className="single-meal-section">
                <h2 className="single-meal-title">{name}</h2>
                <div className="meal-header">
                    <div className="img-container">
                        <img src={image} alt={name} />
                    </div>
                    <div className="ingredients-container">
                        {/* iterating each ingredient + measure */}
                        {ingredients.map((item, index) => {
                            if (item.ingredient) {
                                return (
                                    <React.Fragment key={index}>
                                        <p
                                            className={`ingredients-row ingredient ${
                                                index % 2 === 0 ? "odd" : "even"
                                            }`}
                                        >
                                            <Link
                                                className="link"
                                                to={`/ingredient/${item.ingredient}`}
                                            >
                                                {item.ingredient}
                                            </Link>
                                        </p>
                                        <p
                                            className={`ingredients-row measure ${
                                                index % 2 === 0 ? "odd" : "even"
                                            }`}
                                        >
                                            {item.measure}
                                        </p>
                                    </React.Fragment>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    <div className="category-container">
                        <p className="cuisine">{cuisine}</p>
                        <p
                            className="category"
                            style={{
                                background:
                                    (category === "Vegetarian" && "green") ||
                                    (category === "Dessert" && "#e102ffa1"),
                                color: category === "Vegetarian" && "white",
                            }}
                        >
                            {category}
                        </p>
                    </div>
                </div>
                <div className="meal-description">
                    <h3>How to cook:</h3>
                    <p>{instructions}</p>
                </div>
            </section>
        </main>
    );
};

export default SingleMeal;
