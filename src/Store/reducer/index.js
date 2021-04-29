const initialState = {
    users: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FACEBOOKUSER":
            return ({
                ...state,
                users: action.payload
            })
        case "GOOGLELOGIN":
            return ({
                ...state,
                users: action.payload
            })    
        default:
        }
}