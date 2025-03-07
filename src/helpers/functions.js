import * as jwt from "jsonwebtoken";

export function getToken() {
    return localStorage.getItem("token") || sessionStorage.getItem("token")
}

export function setToken(token, remember = true) {
    (remember ? localStorage : sessionStorage).setItem("token", token);
    return token;
}

export function deleteToken() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
}

export function isAuthenticated() {
    const token = getToken();
    if (!token) return false;
    return jwt.decode(token).exp < Date.now();
    //return Boolean(token);
}

export function getCurrencySymbol(currency) {
    const currencies = {
        "USD": "$"
    };

    return currencies[currency] || "not available currency";
}

export function isSecureProtocol() {
    return window.location.protocol === "https";
}

export function isLocalhost() {
    return window.location.hostname === "localhost";
}

var couter = 0;
export function generateRandomID() {
    if (isSecureProtocol() || isLocalhost()) {
        return crypto.randomUUID();
    } else {
        return `${Date.now()}-${couter++}`;
    }
}

export function createContainer(id) {
    const container = document.createElement("div");
    container.setAttribute("id", id);
    document.querySelector("body").appendChild(container);
}

export function getToastContainer() {
    const toastContainer = document.getElementById("toastContainer");
    if (!toastContainer) {
        createContainer("toastContainer");
    }
    return document.getElementById("toastContainer");
}

export function isMobileScreen() {
    return window.innerWidth < 720
}

export function canShowLogout(isAuthenticated, showInMobile) {
    return isAuthenticated && ((isMobileScreen() && showInMobile) || !isMobileScreen())
}