export const getPhotos = () => {
    return (dispatch) => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=jiUh9sloyTBT6HvUQjWJEP0bOk6vvgSUEKHaPv7t")
            .then(resp => resp.json())
            .then(photos => {
                dispatch({
                    type: "GET_PHOTOS",
                    payload: photos
                })
            })
        }
}