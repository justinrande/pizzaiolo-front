import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Allergene } from '../models/allergene';
import { AllergenesService } from '../services/allergenes.service';

@Component({
  selector: 'app-selection-allergenes',
  templateUrl: './selection-allergenes.component.html',
  styleUrls: ['./selection-allergenes.component.css'],
})
export class SelectionAllergenesComponent {
  allergenes$?: Observable<Allergene[]>;

  constructor(private allergenesService: AllergenesService) {}

  ngOnInit() {
    this.allergenes$ = this.allergenesService.getAllergenes();
  }
}
