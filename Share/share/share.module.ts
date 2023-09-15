import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/Component/footer/footer.component';
import { CardComponent } from 'src/app/Component/card/card.component';
import { IonicModule } from '@ionic/angular';
import { MyPipe } from 'src/app/Pipe/mypipe.pipe';


@NgModule({
  declarations: [FooterComponent,CardComponent,MyPipe],
  imports: [
    CommonModule,
    IonicModule

  ],
  exports:[FooterComponent,CardComponent,MyPipe]

})
export class ShareModule {
 
 }
