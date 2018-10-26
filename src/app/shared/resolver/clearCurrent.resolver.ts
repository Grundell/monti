import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromRoot from '../../app.reducer';
import * as Obj from '../actions/object.actions';
import {take, map} from 'rxjs/operators'

@Injectable()

export class ClearCurrentResolver implements Resolve<any> {
    constructor(private store: Store<fromRoot.State>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.store.select(fromRoot.getRouterState).pipe(
          map(data => data)
        );
        this.store.dispatch(new Obj.RemoveSelected());
    }
}