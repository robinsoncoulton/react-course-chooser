import { ADD_SELECTION, REMOVE_SELECTION } from '../actions/assets.actions'


const selections = (state = [], action) => {
    switch (action.type) {
      case ADD_SELECTION:
        return [...state, 
            {
              id: action.payload.id,
              name: action.payload.name,
              type: action.payload.type,
              duration: action.payload.duration,
              durationType: action.payload.durationType,
            }
          ]

      case REMOVE_SELECTION:
        return state.filter((asset) => asset.id !== action.payload);

      default:
        return state
    }
  }
  export default selections