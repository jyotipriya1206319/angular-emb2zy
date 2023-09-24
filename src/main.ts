import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ParentComponent, FormsModule],
  template: `
  <h1>ng-template will work only with  presence of structural directives, </h1>
  <h2>ngif with else implemetations </h2>
  <div *ngIf="students.length>0; else noStudentTemplate">
    These are students
  </div>
  <ng-template #noStudentTemplate>
    No Student is present
  </ng-template>

  <h1>ng-container is an extremely simple directive that allows you to group elements in a template that doesn’t interfere with styles or layout because Angular doesn’t put it in the DOM
  This is helpful if you don’t want any extra div on DOM, you can simply use
  ng-container.  </h1>
  <h2>Esample </h2>

  <ng-container *ngIf="students.length>0">
    <div *ngFor="let student of students">
    {{student}}
    </div>
  </ng-container>

  <app-parent></app-parent>
------------------------
<label for="test">Enter a Number</label>
<input type="number" [(ngModel)]="enteredNum" id="test">
<div [ngSwitch]="enteredNum">
  <div *ngSwitchCase="0"> 0 is printed</div>
  <div *ngSwitchCase="1"> 1 is printed</div>
  <div *ngSwitchCase="2"> 2 is printed</div>
  <div *ngSwitchCase="3"> 3 is printed</div>
  <div *ngSwitchDefault>printedted thers than  0, 1, 2,3</div>
</div>

  `,
})
export class App {
  students = ['john'];
  enteredNum: number = 0;
}

bootstrapApplication(App);
