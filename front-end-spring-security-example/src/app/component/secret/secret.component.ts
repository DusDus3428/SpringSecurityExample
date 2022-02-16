import { Component, OnInit } from '@angular/core';
import {NonSecretAndSecretService} from "../../service/non-secret-and-secret.service";

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  secretText: string = '';

  constructor(private nonSecretAndSecretService: NonSecretAndSecretService) { }

  ngOnInit(): void {
    this.nonSecretAndSecretService.getSecret().subscribe(secret => this.secretText = secret.secretText)
  }

}
