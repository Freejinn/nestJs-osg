import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'Jen is signed up!!!';
  }

  login() {
    return 'Jen is logged in';
  }
}
