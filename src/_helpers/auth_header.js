export function authHeader() {
    const currentUser = localStorage.getItem("token");
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}