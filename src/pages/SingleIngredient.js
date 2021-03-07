import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import Loading from "../components/Loading";
import Error from "../pages/Error";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

const SingleIngredient = () => {
    const { ingredientName } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [ingredient, setIngredient] = useState(null);

    const history = useHistory();

    const fetchData = async () => {
        setLoading(true);
        setError(false);

        try {
            const response = await fetch(url);
            const data = await response.json();

            // find chosen ingredient in ingredient list
            const foundIngredient = data.meals.find(
                (ingredient) =>
                    ingredient.strIngredient.toLowerCase() ===
                    ingredientName.toLowerCase()
            );

            // set error if it doesnt exist
            if (!foundIngredient) {
                setError(true);
            }

            // new names for ingredients props
            const newIngredient = {
                id: foundIngredient.idIngredient,
                name: foundIngredient.strIngredient,
                description: foundIngredient.strDescription,
            };

            setIngredient(newIngredient);

            setLoading(false);
        } catch (error) {
            // if error
            console.log(error);
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const { id, name, description } = ingredient;
    return (
        <main className="page single-ingredient-page">
            <button className="btn back-btn" onClick={() => history.goBack()}>
                Back
            </button>
            <div className="single-ingredient-container">
                <div className="ingredient-title">{name}</div>
                <div className="ingredient-desc">
                    Description:{" "}
                    {(description && <p>{description}</p>) || (
                        <p>There is no description for this product.</p>
                    )}
                </div>
                <div className="ingredient-img">
                    <img
                        src={`https://www.themealdb.com/images/ingredients/${ingredientName}.png`}
                        alt=""
                    />
                </div>
            </div>
        </main>
    );
};

export default SingleIngredient;
