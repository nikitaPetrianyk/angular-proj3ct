import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';

import { BgColouredDirective } from './directives/hovered-background.directive';
import { FocusedBackgroundDirective } from './directives/focused-background.directive';

import { SearchPipe } from './pipes/search.pipe';

import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatInfoComponent } from './components/chat-info/chat-info.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { ContentComponent } from './components/content/content.component';
import { DialogPreviewComponent } from './components/dialog-preview/dialog-preview.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ChatInfoComponent,
    DialogsComponent,
    ContentComponent,
    DialogPreviewComponent,
    BgColouredDirective,
    SearchPipe,
    FocusedBackgroundDirective
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserLayoutComponent
      }
    ])
  ],
  providers: [],
  exports: [RouterModule]
})
export class UserModule {}
