import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class MyController {
  @Get()
  getHelloGorgeousPeople() {
    return 'Hello Gorgeous People!';
  }

  @Get('/amazing')
  getHelloAmazingPeople() {
    return 'Hello Amazing People!';
  }

  @Post('/amazing')
  createamazingpeople(@Body() req) {
    return `New person add ${req.name}`;
  }
}
