import { StackNavigator } from "react-navigation";

export const AppNavigator = StackNavigator();

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("Login")
);

export const navReducer = (state = initState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};
