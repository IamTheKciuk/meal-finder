import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { FiZoomIn } from "react-icons/fi";

// components
import Loading from "../components/Loading";

const MealList = () => {
    const { loading, meals, showModal } = useGlobalContext();

    if (loading) {
        return <Loading />;
    }

    if (meals.length < 1) {
        return <div>NO MEALS for this term</div>;
    }

    return (
        <section className="section meals-section">
            {meals.map((meal) => {
                const { id, name, category, image } = meal;
                return (
                    <article key={id} className="meal-card">
                        <div
                            className="img-container"
                            onClick={() => {
                                showModal(true, image);
                            }}
                        >
                            <img src={image} alt={name} />
                            <FiZoomIn className="zoom-icon" />
                        </div>
                        <h3 className="meal-title">{name}</h3>
                        <div className="desc-container">
                            <p
                                className="category"
                                style={{
                                    background:
                                        (category === "Vegetarian" &&
                                            "green") ||
                                        (category === "Dessert" && "#e102ffa1"),
                                    color: category === "Vegetarian" && "white",
                                }}
                            >
                                {category}
                            </p>
                        </div>
                        <Link to={`/meal/${id}`} className="btn meal-btn">
                            show recipe
                        </Link>
                    </article>
                );
            })}
        </section>
    );
};

export default MealList;
