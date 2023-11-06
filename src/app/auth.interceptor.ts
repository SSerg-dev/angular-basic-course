import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(
    //   '🚀 ~ file: auth.interceptor.ts:7 ~ AuthInterceptor ~ intercept ~ request:',
    //   request
    // );
    const cloned = request.clone({
      headers: request.headers.append('Auth', 'SOME RANDOM TOKEN')
    })

    return next.handle(cloned).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log("🚀 ~ file: auth.interceptor.ts:26 ~ AuthInterceptor ~ tap ~ event:", event)

        }
      })
    )
  }
}
