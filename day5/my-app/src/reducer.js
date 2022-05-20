// this is the initial value
const initialState = {counter: 0};
/*
    reducer function: it takes previous state & action as an argument
    state: it is a previous state 
    action: what action needs to be done on the state like increment or decrement
    suppose the component dispatches action with a property type = 'incr' or type = 'decr'
    then you can use here action.type == 'incr' or action.type == 'decr' and perform 
    the action, the component dispatches action as {type: 'incr'} (or) {type : 'decr'}
*/
export function counterReducer(state = initialState, action) {
    switch(action.type) {
        case 'incr' : 
            return {counter: state.counter + 1};
        case 'decr' : 
            return {counter: state.counter - 1};
        default: 
            return state;
    }
}