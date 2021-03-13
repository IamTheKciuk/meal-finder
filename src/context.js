import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const initialState = {
    loading: true,
    error: false,
    meals: [],
    searchTerm: "",
    category: "",
    modal: { show: false, content: "" },
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // fetch data
    const fetchData = async () => {
        dispatch({ type: "LOADING", payload: true });
        dispatch({ type: "SET_ERROR", payload: false });

        if (state.category) {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${state.category}`;
        } else {
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
        }

        try {
            let response;

            // choose url depending on search form terms
            if (state.category) {
                response = await fetch(`${url}`);
            } else {
                response = await fetch(`${url}${state.searchTerm}`);
            }
            const data = await response.json();
            const { meals } = data;

            // if meals fetched set new object with new keys
            if (meals) {
                let newMeals = meals.map((meal) => {
                    let {
                        idMeal: id,
                        strMeal: name,
                        strCategory: category,
                        strMealThumb: image,
                    } = meal;

                    // if category is chosen in search form - show searched category under meal name
                    if (state.category) category = state.category;

                    return { id, name, category, image };
                });

                // sorting meals by name if category choosen
                let newMealsSorted = newMeals.filter((item) => {
                    return (
                        item.name
                            .toLowerCase()
                            .indexOf(state.searchTerm.toLowerCase()) > -1
                    );
                });

                // if fetch complete and not empty set meals at newMeals
                if (state.category) {
                    dispatch({ type: "SET_MEALS", payload: newMealsSorted });
                } else {
                    dispatch({ type: "SET_MEALS", payload: newMeals });
                }
            } else {
                // if nothing fetched set meals at empty array
                dispatch({ type: "SET_MEALS", payload: [] });
            }

            dispatch({ type: "LOADING", payload: false });
        } catch (error) {
            dispatch({ type: "SET_ERROR", payload: true });
            dispatch({ type: "LOADING", payload: false });
        }
    };

    // handle searching
    const setSearchTerm = (searchTerm) => {
        dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
    };

    // handle category change
    const setCategory = (categoryName) => {
        dispatch({ type: "SET_CATEGORY_NAME", payload: categoryName });
    };

    // show/hide modal with big image of meal
    const showModal = (show = false, image = "") => {
        dispatch({ type: "SHOW_MODAL", payload: { show, image } });
    };

    // fetching data with each search term change
    useEffect(() => {
        fetchData();
    }, [state.searchTerm, state.category]);

    // =================== RETURN ====================
    return (
        <AppContext.Provider
            value={{
                ...state,
                setSearchTerm,
                showModal,
                setCategory,
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
