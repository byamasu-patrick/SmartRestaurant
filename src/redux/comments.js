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
            comment.id = state.comments.length;
            //console.log("Comment length: "+ state.length);
            comment.date = new Date().toISOString();  
            // Adding a new object from the state array ... concat here is an immutable object  
            //alert(JSON.stringify(state.concat(comment)));

            return {...state, comments: state.comments.concat(comment)};
        
        default:
            return state;
    }
};