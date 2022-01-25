import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// Let create a reducer function that add new comment to the state
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            //console.log("Comment length: "+ state.length);
            comment.date = new Date().toISOString();  
            // Adding a new object from the state array ... concat here is an immutable object  
            return state.concat(comment);
        default:
            return state;
    }
};