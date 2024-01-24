import {useUserStore} from "@/stores/user";

export function createParams(filters: Object): Object {
    const params = {};
    if (filters) {
        for (const param in filters) {
            if (filters[param] !== 'undefined' && filters[param] !== undefined && filters[param] !== 'null' && filters[param] !== null) {
                params[param] = filters[param];
            }
        }
    }
    return params;
}

export function get(path: string, filters: Object = null) {
    const userStore = useUserStore(),
        params = createParams(filters);
    return fetch(`${import.meta.env.VITE_API}/${path}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${userStore.userLoggedIn?.token}`,
        }
    }).then((res) => {
        return res.json();
    }).catch((error: any) => {
        throw error;
    });
}

export function getById(path: string, id: string = null) {
    return fetch(`${import.meta.env.VITE_API}/${path}/${id}`)
        .then((res) => {
            return res.json();
        }).catch((error: any) => {
            throw error;
        });
}

export function post(path: string, data: Object) {
    return fetch(`${import.meta.env.VITE_API}/${path}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(async (response) => {
        const json = await response.json();
        if (response.ok) {
            return json;
        }
        return Promise.reject(json);
    }).then((res, ret) => {
        return res;
    });
}

export function put(path: string, id: string, data: Object) {
    return fetch(`${import.meta.env.VITE_API}/${path}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((res) => {
        return res.json();
    }).catch((error: any) => {
        throw error;
    });
}

export function remove(path: string, id: string = '') {
    return fetch(`${import.meta.env.VITE_API}/${path}/${id}`, {
        method: 'DELETE'
    }).then((res) => {
        return res.json();
    }).catch((error: any) => {
        throw error;
    });
}