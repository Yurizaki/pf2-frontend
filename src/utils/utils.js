const isBrowser = typeof window !== "undefined";

export function getSessionItem(key) {
    if (isBrowser) {
        return window.sessionStorage.getItem(key);
    }
    return null;
}

export function saveSessionItem(key, value) {
    if (isBrowser) {
        window.sessionStorage.setItem(key, value);
    }
}