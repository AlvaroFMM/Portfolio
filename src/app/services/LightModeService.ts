import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightModeService {
  isLightMode = false;
  modeChanged = new EventEmitter<boolean>();

  toggleMode(): void {
    this.isLightMode = !this.isLightMode;
    this.modeChanged.emit(this.isLightMode);
  }
}
