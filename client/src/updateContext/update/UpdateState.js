import React, { useReducer,useEffect,useState} from 'react';
import updateContext from './updateContext';
import updateReducer from './updateReducer';
import { UPDATE} from '../types';
import API from "../../utils/API"



const UpdateState =  (props) => {
 




 const initialState={updateState:null}

  const [state, dispatch] = useReducer(updateReducer, initialState);

  
  const update = (value)=> {

      dispatch({
            type: UPDATE,
            payload: value
          })
  };
    

  return (
    <updateContext.Provider
      value={{
        update,
     
        updateState :state.updateState

      }}
    >
      {props.children}
    </updateContext.Provider>
  );
}

export default UpdateState;
