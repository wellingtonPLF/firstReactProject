const INITIAL_STATE = 0;

export default function (state = INITIAL_STATE, action){
    switch (action.type){
        case 'SUM':
            return action.payload[0] + action.payload[1];
        default:
            return state;
    }
}
