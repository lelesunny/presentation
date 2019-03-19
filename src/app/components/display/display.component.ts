import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../../services/index';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private displayService: DisplayService) { }
  content : any;
  files : string[] = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.json', 'file5.txt'];
  fileIndex :  number = -1;
  progressValue : number = 0;
  ifJSON : boolean = false;
  displayedColumns : string[] = ['studentID', 'name', 'gender', 'grade'];
  dataSource : any;


  ngOnInit() {
    this.content = "Welcome!";
  }

  move(value: boolean) {
    if (value) {
      this.fileIndex += 1;
    } else {
      this.fileIndex -= 1;
    }
    if (this.files[this.fileIndex].indexOf('txt') > -1) {
      this.ifJSON = false;
      this.displayService.getText(this.files[this.fileIndex]).subscribe(
        data => {
          this.content = parseUnderline(parseItalic(parseBold(data, '*'), '`'), '_');
          this.progressValue = (this.fileIndex + 1) / this.files.length * 100;
        },
        (error: HttpErrorResponse) => {
          if(error.status === 404) {
            //add not found error handling
          }
        }
      );
    }
    if (this.files[this.fileIndex].indexOf('json') > -1) {
      this.ifJSON = true;
      this.displayService.getJson(this.files[this.fileIndex]).subscribe(
        data => {
          this.dataSource = data;
          this.progressValue = (this.fileIndex + 1) / this.files.length * 100;
        },
        (error: HttpErrorResponse) => {
          if(error.status === 404) {
            //add not found error handling
          }
        }
      );
    }
  }
}

const parseBold = (content, starMark) => 
  content.split(starMark).map((chunk, index) =>
    (index % 2!== 0) ? `<strong>${chunk}</strong>` : chunk).join('');


const parseItalic = (content, backtickMark) =>
  content.split(backtickMark).map((chunk, index) =>
    (index % 2!== 0) ? `<i>${chunk}</i>` : chunk).join('');

const parseUnderline = (content, underlineMark) =>
  content.split(underlineMark).map((chunk, index) =>
    (index % 2!== 0) ? `<u>${chunk}</u>` : chunk).join('');
