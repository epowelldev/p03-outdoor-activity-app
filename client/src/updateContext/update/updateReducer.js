import { UPDATE} from '../types';

const UpdateReducer= (updateState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...updateState,
        updateState: action.payload
      };

 
   default : 
  }
}

export default UpdateReducer;