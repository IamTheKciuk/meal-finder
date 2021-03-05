const reducer = (state, action) => {
    if (action.type === "LOADING") {
        return { ...state, loading: true };
    }

    if (action.type === "SET_MEALS") {
        return { ...state, loading: false, meals: action.payload };
    }

    if (action.type === "SET_SEARCH_TERM") {
        return { ...state, searchTerm: action.payload };
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
