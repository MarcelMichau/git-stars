const initialState = {
    username: '',
    avatarUrl: '',
    repos: []
}

export default function gitStarsApp(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                username: action.value
            }
        case 'SEARCH_USER':
            console.log(`Will search for: ${action.value}`);
            break;
        case 'UPDATE_AVATAR':
            return {
                ...state,
                avatarUrl: action.value
            }
        default:
            return state;
    }
}