import {useReducer} from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import {} from "../types";

const AppState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(appReducer, initialState);

  return(
    <AppContext.Provider
      value={{

      }}>
    </AppContext.Provider>
  )
};

export default AppState;
