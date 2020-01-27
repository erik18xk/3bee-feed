export const getDefaultHeaders = () => ({ 'Accept': 'application/json' });


const HTTPClient = () => ({
    get: async (uri, headers = {}, skipDefaultHeaders) => {
        return await fetch(uri, {
            method: 'GET',
            headers: skipDefaultHeaders ? {...headers} : {...getDefaultHeaders(), ...headers}
        });
    },
});

export default HTTPClient;
