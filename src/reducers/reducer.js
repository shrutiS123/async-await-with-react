const iState = {
    name: "shruti",
    wishes: ['eat', 'code']
}

const reducer = (state =iState, action) => {
//always tke 2 param
console.log(action)
if(action.type === 'CHANGE_NAME') {
    return {
        ...state,
        name: action.payload
    }
}
return state;

}
export default reducer;