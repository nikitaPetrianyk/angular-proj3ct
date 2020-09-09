import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import { DialogsService } from '../../services/dialogs.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Dialog, UserDialogs } from '../../models/models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit, OnDestroy {
  private dialogs: Dialog[] = [];
  private searchingProcessInfo$: Subject<string>;
  private destroy$: Subject<void> = new Subject<void>();
  public searchingStr: string;
  public isDialogsLoaded: boolean = false;

  constructor(
    private authService: AuthService,
    private dialogsService: DialogsService
  ) {}

  private initSearchingProcessAsyncValue(): void {
    this.searchingProcessInfo$ = this.dialogsService.searchingProcessInfo$;
  }

  public get dialogsEntity(): Dialog[] {
    return this.dialogs;
  }

  public get searchingProcessAsyncEntity(): Subject<string> {
    return this.searchingProcessInfo$;
  }

  ngOnInit(): void {
    this.initSearchingProcessAsyncValue();

    this.authService.localId$
      .pipe(
        switchMap((localId: string) => {
          return this.dialogsService.getDialogsByUserId(localId);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((userDialogs: UserDialogs) => {
        this.dialogs = userDialogs.allDialogs;
        this.isDialogsLoaded = true;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
