import { Component, Input } from '@angular/core';
import { DiagnosticItem } from '../../../../patient.service';

@Component({
  selector: 'list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  @Input() diagnostic_list: DiagnosticItem[] = [];
}
