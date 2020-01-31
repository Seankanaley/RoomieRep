import createReducer from '../helpers/createReducer';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';

//This will deice what screen will load the first time app is launched
const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut'); 
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};