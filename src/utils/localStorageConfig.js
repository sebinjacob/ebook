export default function configStore(key) {
    this.key = key;
    this.isExisting = () => {
        // eslint-disable-next-line no-undef
        if (localStorage.getItem(this.key)) return true;
        return false;
    };
    this.getData = () => {
        if (this.isExisting()) {
            // eslint-disable-next-line no-undef
            return JSON.parse(localStorage.getItem(this.key));
            // eslint-disable-next-line no-else-return
        } else {
            return null;
        }
    };
    this.setData = (data) => {
        // eslint-disable-next-line no-undef
        if (data) localStorage.setItem(this.key, JSON.stringify(data));
    };
}
