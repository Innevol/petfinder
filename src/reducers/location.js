export default function locationReducer (state = 'Atlanta, GA',  action) {
  if (action.type === 'SET_LOCATION') {
        return action.payload;
    } else {
        return state;
    }
}