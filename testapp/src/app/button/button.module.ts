import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsComponent } from './button.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ButtonsComponent],
  exports: [ButtonsComponent],
})
export class ButtonModule {}
