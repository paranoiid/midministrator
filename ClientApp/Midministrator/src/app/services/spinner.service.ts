import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { distinctUntilChanged, tap } from 'rxjs/operators'
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spin$ = new BehaviorSubject<boolean>(false);

  constructor(private spinner: NgxSpinnerService) {
    this.spin$
      .asObservable()
      .pipe(distinctUntilChanged())
      .subscribe(
        { next: res => {
          if (res) this.spinner.show();
          else (this.spinner.hide());
        }
      }
      );
  }
}
