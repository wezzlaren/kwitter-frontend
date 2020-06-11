
export function handleResponse(response) {
    return response.text().then(text => {  
        const data = text && JSON.parse(text);
        console.log(data)
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.props.history.push('/');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}