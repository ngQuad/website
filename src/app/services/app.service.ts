import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { config } from '../config/config';
import { IEmail } from '../interfaces/email.interface';

@Injectable()
export class AppService {

  private emailUrl = config.apiEmailEndpoint + '/send-email';  // URL to ngQuad mail web api


  constructor(private httpService: HttpService) {
  }

  sendEmail(email: IEmail) {

    return this.httpService.post(`${this.emailUrl}`, JSON.stringify(email));
  }
}
