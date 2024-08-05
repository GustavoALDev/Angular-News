import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { ENVIROMENT } from '../environments/environments.firebase';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
export const appConfig: ApplicationConfig = {
  providers:
    [
      provideFirebaseApp(() => initializeApp(ENVIROMENT.firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideClientHydration(),
    ]
};


