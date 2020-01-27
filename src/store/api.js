import HTTPClient from "../utils/HTTPClient";

const getFeeds = async () => {
    const uri = '3bee-fake-api/feeds' // This will be the endpoint of the real call
    const response = await HTTPClient().get(uri);

    if (!response.ok) {
        throw new Error(`There is a problem with 3bee endpoint ${response}`);
    }

    return await response.json();
};

export default {
    getFeeds,
}