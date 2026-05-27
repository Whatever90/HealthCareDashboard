import { Component, Input } from '@angular/core';

export type VitalStatus = 'normal' | 'lower' | 'higher';

export interface VitalInfoData {
  title: string;
  iconName: string;
  value: string;
  backgroundColor: string;
  status: VitalStatus;
}

@Component({
  selector: 'app-vital-info',
  imports: [],
  templateUrl: './vital-info.html',
  styleUrl: './vital-info.css',
})
export class VitalInfo {
  @Input() vital: VitalInfoData = {
    title: '',
    iconName: '',
    value: '',
    backgroundColor: '#FFFFFF',
    status: 'normal',
  };

  get iconSrc(): string {
    return `/icons/${this.vital.iconName}`;
  }

  get statusLabel(): string {
    if (this.vital.status === 'higher') {
      return 'Higher than Average';
    }

    if (this.vital.status === 'lower') {
      return 'Lower than Average';
    }

    return 'Normal';
  }

  get statusIconSrc(): string | null {
    if (this.vital.status === 'higher') {
      return '/icons/ArrowUp.svg';
    }

    if (this.vital.status === 'lower') {
      return '/icons/ArrowDown.svg';
    }

    return null;
  }
}
