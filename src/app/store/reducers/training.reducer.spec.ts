import {Training} from '../../model/training'
import {trainingsReducer,TrainingsState} from './trainings.reducer'
import * as TrainingActions from '../actions/training.actions'
// import {Map,List} from 'immutable'

// let traininglist = List<Training>([])
// traininglist.size


describe('Training Reducer',()=>{
    it('should store training list', ()=>{
        // const initTrainingsState:TrainingsState = {
        //     trainings:[],
        //     loadingTrainings: false
        // }
        // const loadTrainingsAction = {
        //     type: TrainingActions.LOAD_TRAININGS_SUCCESS,
        //     payload: <Training[]>[
        //         {id: '3', title: "Openshift", shortDescription: "OpenShift is a computer software product from Red …bernetes using Docker containers and DevOps tools" }
        //     ]
        // }
        // const changedState = trainingsReducer(initTrainingsState,loadTrainingsAction)
        // expect(initTrainingsState.trainings.size ).toBeLessThan(changedState.trainings.size )
    })
})