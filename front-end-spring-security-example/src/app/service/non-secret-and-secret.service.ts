import {Injectable} from "@angular/core";
import {NonSecretModel} from '../model/non-secret.model';
import {SecretModel} from '../model/secret.model';
import {MegaSecretModel} from '../model/mega-secret.model';

@Injectable()
export class NonSecretAndSecretService {

  public getNonSecret(): NonSecretModel {

  }
}
