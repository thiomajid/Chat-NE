import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-discussion-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss'],
})
export default class DiscussionListComponent {}
