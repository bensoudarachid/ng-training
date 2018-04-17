import {Action} from '@ngrx/store'

// export interface AppAction extends Action {
//   payload?: any;
// }
export interface AppAction<T> extends Action {
  payload?: T;
}