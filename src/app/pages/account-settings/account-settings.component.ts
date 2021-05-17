import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {



  constructor( private settingsService: SettingsService ,  private fb: FormBuilder  ) {}
  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme( theme: string ) {
        
    this.settingsService.changeTheme( theme );
    
  }

  

}
