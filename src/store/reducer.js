import types from './types';

export const initialState = () => ({
    refreshFeed: false,
    isButtonVisible: false,
});

const reducers = (state = initialState(), action) => {
    const { payload } = action;
    window.console.log(payload);
    switch (action.type) {
        case types.INITIALIZE:
            return {
                ...state,
                refreshFeed: false,
            };
        case types.SET_REFRESH_STATE:
            return {
                ...state,
                refreshFeed: payload.status,
            };
        default:
            return initialState();
    }
};

export default reducers;

<Button className = "button ${this.props.isButtonVisible ? '--active' : '' }"></Button>