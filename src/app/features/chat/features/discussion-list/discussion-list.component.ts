import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-discussion-list',
  standalone: true,
  imports: [
    CommonModule,

    //Material
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss'],
})
export default class DiscussionListComponent {}
