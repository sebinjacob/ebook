export default (state = { data: [], currentPage: 1 }, action) => {
    switch (action.type) {
        case "SET_BOOK":
            return { ...state, data: [...action.data] };
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.currentPage };
        case "CLEAR_BOOK":
            return [];
        default:
            return state;
    }
};
