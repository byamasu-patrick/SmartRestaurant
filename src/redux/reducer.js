import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

// Here we define the initial state of our redux store which store the initial information
// that the application will use
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};

// Here we define the reducer function in order to update the store using the state of the store
// given the previous state and the current action to be performed
export const Reducer = (state = initialState, action) => {
    return state;
};