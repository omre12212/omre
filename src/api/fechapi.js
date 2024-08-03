const baseUrl = "https://omre-server.onrender.com"

export const fetchApi = async (route, method, body) => {
    const url = baseUrl + route;
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,

    }).then(res => res.json())
        .catch((error) => {
            console.error("fetch Error", error.message);
        });
}

export const live = async () => {
    const route = "/findpro"
    return await fetchApi(route, "Post", null)
}


