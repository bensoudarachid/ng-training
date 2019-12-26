import { AuthenticationEffects } from './auth.effects'
// import {TrainingEffects} from './trainings.effects'
import { AppEffects } from './app.effects'

export const effects: any[] = [AuthenticationEffects, AppEffects] //,TrainingEffects

// export * from './trainings.effects'
export * from './auth.effects'
export * from './app.effects'
