import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vminputs';
  textfields = 'Text Field';
  numfields = 'Number Field';
  checkfield = 'Checkbox';
  dropfield = 'DropDown';
  multifield = 'Multiple Options';
  txtareafield = 'Text Area';
  filefield = 'File Input Field';
  radiofield = 'Radio Buttons';
  passfield = 'Password Field';
  datefield = 'Date Field';
  datetfield = 'Date Time Field';
  timefield = 'Time Field';
  weekfield = 'Week Field';
  monthfield = 'Month Field';
  imagefield = 'Image Field';
  colorfield = 'Color Picker';
  rangefield = 'Range Field';
}
