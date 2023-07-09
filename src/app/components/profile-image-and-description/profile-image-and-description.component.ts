import { Component, OnInit } from '@angular/core';
import { IConfiguration } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'profile-image-and-description',
  templateUrl: './profile-image-and-description.component.html',
})
export class ProfileImageAndDescriptionComponent implements OnInit {
  public profileImgPath: string = '';

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService.getConfigurations().subscribe((result: IConfiguration) => {
      this.profileImgPath = result.profileImagePath;
    });
  }
}
