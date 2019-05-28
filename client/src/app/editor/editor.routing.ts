import { Routes, RouterModule } from '@angular/router';

import { EditorComponent } from './editor.component';
import { PageComponent } from './page/page.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { SectionComponent } from './section/section.component';



export const editorRoutes = {
    path: 'editor',
    component: EditorComponent
};



export const editorRoutingProviders: any[] = [

];

export const editorComponents: any[] = [
    EditorComponent,
    PageComponent,
    TextComponent,
    ButtonComponent,
    ImageComponent,
    SectionComponent,
    InventoryComponent
];
