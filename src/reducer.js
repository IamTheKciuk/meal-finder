const reducer = (state, action) => {
    if (action.type === "LOADING") {
        return { ...state, loading: action.payload };
    }

    if (action.type === "SET_ERROR") {
        return { ...state, error: action.payload };
    }

    if (action.type === "SET_MEALS") {
        return { ...state, meals: action.payload };
    }

    if (action.type === "SET_SEARCH_TERM") {
        return { ...state, searchTerm: action.payload };
    }

    if (action.type === "SET_CATEGORY_NAME") {
        return { ...state, category: action.payload };
    }

    if (action.type === "SHOW_MODAL") {
        return {
            ...state,
            modal: { show: action.payload.show, content: action.payload.image },
        };
    }

    throw new Error("no matching action");

    // return state;
};

export default reducer;
