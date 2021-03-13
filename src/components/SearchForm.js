import React from "react";
import { useGlobalContext } from "../context";
import CategoryList from "../components/CategoryList";

const SearchForm = () => {
    const { loading, setSearchTerm } = useGlobalContext();

    return (
        <section className="section search-section">
            <form
                className="search-form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div className="form-control">
                    <label htmlFor="name">search meal!</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
            {<CategoryList />}
        </section>
    );
};

export default SearchForm;
