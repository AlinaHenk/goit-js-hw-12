import axios from "axios";
//axios.defaults.baseURL = '<https://pixabay.com/api/>';
const myApiKey = '43769783-4ebd08048bd6758fdf84d5c5e';

export const fetchPictureBySearch  = async (searchValue, perPage, numberPage) => {
    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: myApiKey,
                q: searchValue,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: "true",
                per_page: perPage,
                page: numberPage,

            }
        });
        return response.data;
    } catch (error) {
		console.log(error);
	}
};

