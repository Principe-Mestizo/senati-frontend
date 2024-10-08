import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideNzConfig } from 'ng-zorro-antd/core/config';

import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptorHttpService } from './core/interceptors/api.interceptor';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
		provideNzIcons(),
		provideNzI18n(en_US),
		importProvidersFrom(FormsModule),
		provideAnimationsAsync(),
		provideNzConfig({
			message: {
				nzTop: 24,
				nzDuration: 3000,
				nzMaxStack: 7,
				nzPauseOnHover: true,
				nzAnimate: true,
				nzDirection: 'ltr',
			},
		}),
		provideHttpClient(withInterceptors([AuthInterceptorHttpService])),
	],
};
