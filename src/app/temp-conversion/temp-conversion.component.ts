import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-temp-conversion',
  templateUrl: './temp-conversion.component.html',
  styleUrls: ['./temp-conversion.component.scss']
})
export class TempConversionComponent {
  temperatureConverter: FormGroup<any> = new FormGroup({});
  result: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.temperatureConverter = new FormGroup({
      celsius: new FormControl(),
      fahren: new FormControl()
    })
  }
  celToFah(data: any) {
    // F = C*9/5 + 32
    console.log("data=>", data);
    this.result = data.celsius * 9 / 5 + 32;
    this.temperatureConverter.controls['fahren'].setValue(this.result);

  }

  fahToCel(data: any) {
    // C = (F − 32) × 5/9
    this.result = (data.fahren - 32) * 5 / 9;
    this.temperatureConverter.controls['celsius'].setValue(this.result);
  }

}

