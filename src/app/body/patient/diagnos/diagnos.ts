import { Component, Input } from '@angular/core';
import { History } from './history/history';
import { List } from './list/list';
import { DiagnosisHistory, DiagnosticItem } from '../../../patient.service';
@Component({
  selector: 'diagnos',
  imports: [History, List],
  templateUrl: './diagnos.html',
  styleUrl: './diagnos.css',
})
export class Diagnos {
  @Input() diagnostic_list: DiagnosticItem[] = [];
  @Input() diagnosis_history: DiagnosisHistory[] = [];
}
