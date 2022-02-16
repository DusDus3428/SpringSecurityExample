import { Component, OnInit } from '@angular/core';
import {NonSecretAndSecretService} from "../../service/non-secret-and-secret.service";

@Component({
  selector: 'app-non-secret',
  templateUrl: './non-secret.component.html',
  styleUrls: ['./non-secret.component.scss']
})
export class NonSecretComponent implements OnInit {

  nonSecretText: string = '';

  constructor(private nonSecretAndSecretService: NonSecretAndSecretService) { }

  ngOnInit(): void {
    this.nonSecretAndSecretService.getNonSecret().subscribe(nonSecret => this.nonSecretText = nonSecret.nonSecretText)
  }

}
