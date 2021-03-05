import React from "react";
import { useGlobalContext } from "../context";
import MealList from "../components/MealList";
import SearchForm from "../components/SearchForm";
import Modal from "../components/Modal";

const Search = () => {
    const { modal } = useGlobalContext();

    return (
        <main className="page search-page">
            {modal.show ? <Modal /> : null}
            <SearchForm />
            <MealList />
        </main>
    );
};

export default Search;
