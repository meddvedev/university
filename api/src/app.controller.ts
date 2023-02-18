import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('signup')
  test() {
    return "Hello world";
  }
}
