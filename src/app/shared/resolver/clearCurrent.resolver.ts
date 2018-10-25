import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromRoot from '../../app.reducer';
import * as Obj from '../actions/object.actions';

@Injectable()

export class ClearCurrentResolver implements Resolve<any> {
    constructor(private store: Store<fromRoot.State>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.store.dispatch(new Obj.RemoveSelected());
    }
}