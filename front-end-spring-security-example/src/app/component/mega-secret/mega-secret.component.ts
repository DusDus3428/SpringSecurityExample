import { Component, OnInit } from '@angular/core';
import {NonSecretAndSecretService} from '../../service/non-secret-and-secret.service';

@Component({
  selector: 'app-mega-secret',
  templateUrl: './mega-secret.component.html',
  styleUrls: ['./mega-secret.component.scss']
})
export class MegaSecretComponent implements OnInit {

  megaSecretText: string = '';

  constructor(private nonSecretAndSecretService: NonSecretAndSecretService) { }

  ngOnInit(): void {
    this.nonSecretAndSecretService.getMegaSecret().subscribe(megaSecret => this.megaSecretText = megaSecret.megaSecretText)
  }

}
