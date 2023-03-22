import { ModalComponent } from './components/Util/modal/modal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ngmaterialmodule';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';
import { UsersReadComponent } from './components/users/users-read/users-read.component';
import { NgxMaskModule }  from  'ngx-mask';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersCreateUpdateComponent } from './components/users/users-create-update/users-create-update.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    UsersCrudComponent,
    UsersReadComponent,
    ModalComponent,
    UsersCreateUpdateComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule, 
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }), 
    MatTableModule, 
    MatPaginatorModule, 
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule, 
    MatIconModule, 
    MatButtonModule, 
    LayoutModule, 
    GoogleChartsModule
   ],

  providers: [],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
