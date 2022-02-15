import {NonSecretModel} from './non-secret.model';

export interface SecretModel extends NonSecretModel{
  secret: string;
}
