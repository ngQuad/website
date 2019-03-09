import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { config } from '../config/config';
import { IEmail } from '../interfaces/email.interface';

@Injectable()
export class AppService {

  private emailUrl = config.apiEmailEndpoint + '/send-email';  // URL to ngQuad mail web api
  private wakeUpUrl = config.apiEmailEndpoint + '/wake-up';  // URL to ngQuad wake up Heroku Server web api

  constructor(private httpService: HttpService) {
  }

  sendEmail(email: IEmail) {

    return this.httpService.post(`${this.emailUrl}`, JSON.stringify(email));
  }

  wakeUpServer() {

    return this.httpService.get(`${this.wakeUpUrl}`).subscribe((res) => {
    });
  }
}
