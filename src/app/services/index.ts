import {AuthService} from './auth/auth.service'
import {TrainingsService} from './trainings/trainings.service'
import { CookieService } from 'ngx-cookie-service'

export const services = [AuthService,CookieService] //TrainingsService

export * from './auth/auth.service'
// export * from './trainings/trainings.service'