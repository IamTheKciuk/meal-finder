import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const initialState = {
    loading: true,
    meals: [],
    searchTerm: "a",
    modal: { show: false, content: "" },
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // fetch data
    const fetchData = async () => {
        dispatch({ type: "LOADING" });
        try {
            const response = await fetch(`${url}${state.searchTerm}`);
            const data = await response.json();
            const { meals } = data;

            // if meals fetched set new object with new keys
            if (meals) {
                const newMeals = meals.map((meal) => {
                    const {
                        idMeal: id,
                        strMeal: name,
                        strArea: cuisine,
                        strCategory: category,
                        strMealThumb: image,
                    } = meal;

                    return { id, name, cuisine, category, image };
                });
                // if fetch complete and not empty set meals at newMeals
                dispatch({ type: "SET_MEALS", payload: newMeals });
            } else {
                // if nothing fetched set meals at empty array
                dispatch({ type: "SET_MEALS", payload: [] });
            }
        } catch (error) {
            console.log(error);
        }
    };

    // handle searching
    const setSearchTerm = (searchTerm) => {
        dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
    };

    // show/hide modal with big image of meal
    const showModal = (show = false, image = "") => {
        dispatch({ type: "SHOW_MODAL", payload: { show, image } });
    };

    // fetching data with each search term change
    useEffect(() => {
        fetchData();
    }, [state.searchTerm]);

    // =================== RETURN ====================
    return (
        <AppContext.Provider
            value={{
                ...state,
                setSearchTerm,
                showModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
