import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import all_cat_photo from "../images/all_category.jpg";

const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

const CategoryList = () => {
    const { category, setCategory } = useGlobalContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(false);

        try {
            const response = await fetch(url);
            const data = await response.json();

            const newCategories = data.categories.map((item) => {
                const {
                    idCategory: id,
                    strCategory: name,
                    strCategoryThumb: image,
                } = item;

                return { id, name, image };
            });

            setCategories(newCategories);

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
        return <p></p>;
    }

    if (error) {
        return <p>error</p>;
    }

    return (
        <div className="category-container-filter">
            {/* all category card */}
            <div
                className={`category-card ${
                    "" === category.toLowerCase() && "chosen"
                }`}
                onClick={() => {
                    setCategory("");
                }}
            >
                <div className="opacity-div"></div>
                <img src={all_cat_photo} alt="all" />
                <p>All</p>
            </div>

            {/* listing all other category cards */}
            {categories.map((item) => {
                const { id, name, image } = item;

                return (
                    <div
                        key={id}
                        // if chosen category set "chosen" class
                        className={`category-card ${
                            name.toLowerCase() === category.toLowerCase() &&
                            "chosen"
                        }`}
                        // set category on click
                        onClick={() => {
                            setCategory(name);
                        }}
                    >
                        {/* div for changing opacity while category chosen */}
                        <div className="opacity-div"></div>
                        <img src={image} alt={name} />
                        <p>{name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default CategoryList;
