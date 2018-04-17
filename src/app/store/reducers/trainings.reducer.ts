// import {AppAction} from '../AppAction'
import {Action} from '@ngrx/store'
import {Map,List} from 'immutable'


import * as trainingActions from '../actions/training.actions'
import {Training} from '../../model/training'

// export const LOAD_TRAININGS = 'LOAD_TRAININGS'

export interface TrainingsState {
    trainings: List<Training>
    loadingTrainings: boolean
}

const initTrainingsState:TrainingsState = {
    trainings:List([]),
    loadingTrainings:false
}

export function trainingsReducer(trainingappmap=Map(initTrainingsState), action:Action) {
    switch (action.type) {
        case trainingActions.LOAD_TRAININGS:
            console.log('load trainings')
            trainingappmap = trainingappmap.set('loadingtrainings',true)
        case trainingActions.LOAD_TRAININGS_SUCCESS:
            // console.log('action.payload2')
            // console.log(action.payload)
            // let newState = {
            //     traininglist:action.payload
            // }
            // trainingappmap = trainingappmap.set('trainings', List(action.payload) )
            // console.log(newState)
            // state = [{ title: "Abbas", shortDescription: "OpenShift is a computer software product from Red …bernetes using Docker containers and DevOps tools"}]
            trainingappmap = trainingappmap.set('loadingtrainings',false)
            if ((<trainingActions.LoadTrainingsSuccess>action).payload == undefined){
                trainingappmap = trainingappmap.set('trainings', undefined)
            }else{
                //trainingappmap = trainingappmap.set('trainings', List(action.payload) )
                trainingappmap = trainingappmap.set('trainings', List((<trainingActions.LoadTrainingsSuccess>action).payload.map((training) => {
                    return Map(training)
                })))
            } 
            return trainingappmap
        default:
            return trainingappmap
    }
}
