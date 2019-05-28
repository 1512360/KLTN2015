import { Routes, RouterModule } from '@angular/router';

import { editorRoutes } from './editor/editor.routing';


export const routes: Routes = [
    { path: '', redirectTo: '/editor', pathMatch: 'full' },
    editorRoutes
];

export const appComponents: any[] = [
];

export const appRouting = RouterModule.forRoot(routes);