const initState = {
    likes: 0
  };
  
  const reducer = (state = initState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "INCREMENT":
        return { likes: state.likes + payload };
  
      case "DECREMENT":
        return { likes: state.likes + payload };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  