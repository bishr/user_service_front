// app-store.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Actions, EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]), // Ensure EffectsModule initialization
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
  ],
})
export class AppStoreModule {
    constructor() {

      }
}