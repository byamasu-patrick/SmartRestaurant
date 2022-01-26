import * as ActionTypes from './ActionTypes';

// Let create a reducer function that add new comment to the state
export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // Adding a new object from the state array ... concat() function here is an immutable object  
            return {...state, comments: state.comments.concat(comment)};
        
        default:
            return state;
    }
};