import React from "react";
import { useGlobalContext } from "../context";
import MealList from "../components/MealList";
import SearchForm from "../components/SearchForm";
import Modal from "../components/Modal";

// pages
import Error from "../pages/Error";

const Search = () => {
    const { modal, error } = useGlobalContext();

    if (error) {
        return <Error />;
    }

    return (
        <main className="page search-page">
            {modal.show ? <Modal /> : null}
            <SearchForm />
            <MealList />
        </main>
    );
};

export default Search;
