import  { AuthenticationEffects } from '@/store/authentication/authentication.effects'
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { AuthenticationService } from '@core/services/auth.service'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public autheffect: AuthenticationEffects) {}

  intercept(
    request: HttpRequest<Request>,
    next: HttpHandler
  ): Observable<HttpEvent<Event>> {
    const authenticationService = inject(AuthenticationService)

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          authenticationService.removeSession()
          window.location.reload()
        }

        const error = err.error.message || err.statusText
        return throwError(error)
      })
    )
  }
}
