import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [ ],
  templateUrl: './about.component.html',
  styleUrl:'./about.component.css'
})
export class AboutComponent {
  size = 200;
  initialYear = 2024;
  copyrightYear = 2025;
  developerName = 'Taweesak N.';
  address = 'Ratchaburi, Thailand';
  telephone = '093-918-7154';

  displayContactInfo() {
    return  'Developer: ' + this.developerName + '\n' +
            'Address: ' + this.address + '\n' +
            'Telephone: ' + this.telephone;
  }
  aboutImageInfo(){
    return 'About Image - Size: ' + this.size + 'x' + (this.size * 0.8);
  }
  alertImageInfo(){
    alert(this.aboutImageInfo());
  }
}
