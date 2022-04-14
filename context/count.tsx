import React, { createContext, useContext, useReducer, Dispatch } from 'react';

type StateType = {
  count: number;
};

type ActionType =
  | { type: 'increment' }
  | {
      type: 'decrement';
    };

const initialState: StateType = {
  count: 0,
};

const CountContext = createContext<StateType | undefined>(undefined);
const CountDispatchContext = createContext<Dispatch<ActionType> | undefined>(undefined);

const countReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + 1 };
    }
    case 'decrement': {
      return { ...state, count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const CountProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <CountDispatchContext.Provider value={dispatch}>
      <CountContext.Provider value={state}>{children}</CountContext.Provider>
    </CountDispatchContext.Provider>
  );
};

export const useCountState = () => {
  const state = useContext(CountContext);
  if (!state) throw new Error('CountProvider not found');
  return state;
};

export const useCountDispatch = () => {
  const dispatch = useContext(CountDispatchContext);
  if (!dispatch) throw new Error('CountDispatchProvider not found');
  return dispatch;
};

export default CountProvider;
