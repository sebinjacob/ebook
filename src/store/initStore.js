import ConfigLocalStorage from "../utils/localStorageConfig";
import { BOOK } from "../utils/constants";

const initStore = () => {
    const myStore = new ConfigLocalStorage("BOOK");
    const pages = myStore.getData();
    if (pages) {
        return {
            pages: {
                data: pages,
                currentPage: 1,
            },
        };
    }
    myStore.setData(BOOK);
    return {
        pages: {
            data: BOOK,
            currentPage: 1,
        },
    };
};

export default initStore;
