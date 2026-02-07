import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { ShapeComponent } from './shape/shape.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { ApiGetComponent } from './api-get/api-get.component';
import { ApiPostComponent } from './api-post/api-post.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'student', component: StudentComponent },
    { path: 'shape', component: ShapeComponent },
    { path: 'form-template', component: FormTemplateComponent  },
    { path: 'form-reactive', component: FormReactiveComponent  },
    { path: 'api-get', component: ApiGetComponent  },
    { path: 'api-post', component: ApiPostComponent  },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];