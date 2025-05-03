import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { CoOrdinatorComponent } from './coordinator/coordinator.component';
import { CoOrdinatorloginComponent } from './coordinatorlogin/coordinatorlogin.component';
import { OurrecurterComponent } from './ourrecurter/ourrecurter.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { UploadupcompanynameComponent } from './uploadupcompanyname/uploadupcompanyname.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { ViewplacedstudentComponent } from './viewplacedstudent/viewplacedstudent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MemberComponent } from './member/member.component';
import { LogoutComponent } from './logout/logout.component';
import { EligibalstudentComponent } from './eligibalstudent/eligibalstudent.component';
import { StudentregistrationformComponent } from './studentregistrationform/studentregistrationform.component';
import { StudentplacedComponent } from './studentplaced/studentplaced.component';
import { studentviewdataComponent } from './studentviewdata/studentviewdata.component';



export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'student',component:StudentComponent},
    {path:'studentlogin',component:StudentloginComponent},
    {path:'coordinator',component:CoOrdinatorComponent},
    {path:'coordinatorlogin',component:CoOrdinatorloginComponent},
    {path:'ourrecurter',component:OurrecurterComponent},
    {path:'updatedata',component:UpdatedataComponent},
    {path:'uploadupcompanyname', component:UploadupcompanynameComponent},
    {path:'viewdata',component:ViewdataComponent},
    {path:'viewplacedstudent',component:ViewplacedstudentComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'member',component:MemberComponent},
    {path:'logout',component:LogoutComponent},
    { path: 'eligiblestudent', component: EligibalstudentComponent },
    {path:'studentregistrationform',component:StudentregistrationformComponent},
    {path:'studentplaced',component:StudentplacedComponent},
    {path:'updatedata',component:UpdatedataComponent},
    {path:'studentviewdata',component:studentviewdataComponent}
    

];
