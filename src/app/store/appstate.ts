import {Map,List} from 'immutable'
import { Training } from '../model/training'

export interface AppState {
	trainingsReducer: Map<any,any>
	authReducer:Map<any,any>
	appReducer:Map<any,any>
}

// export interface TrainingsState {
// 	trainings: List<Training>;
// }
