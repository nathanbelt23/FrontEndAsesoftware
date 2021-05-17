import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';

// Material
import{ MatDatepickerModule , MatDatepickerToggle }   from  '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule }  from '@angular/material/input';
import {MatSelectModule }  from '@angular/material/select';
import {MatIconModule }  from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';






import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';






@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
   AgendamientoComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    AgendamientoComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,

    //--Mis moduilos
    
    SharedModule,
    ComponentsModule,



    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkStepperModule,
    CdkTableModule

  ],
  providers:[
    {
        provide:MAT_DATE_LOCALE, useValue:'es'
    }

  ] 
})
export class PagesModule { }
