import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class HttpErrorInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(error => this.handleError(error, req, next))
        );
    }

    private handleError(err: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<any> {

        // if token has expired
        if (err.status == 401) {
            // refresh JWT token
        }
        // server error
        else if (err.status == 500) {
            //  handle your server error here
        }
        // rethrow Error
        return throwError(() => new Error(err.message));
    }

}