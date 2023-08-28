import { Controller, Get,Body, Post, Request, UseGuards, UnauthorizedException, Delete } from '@nestjs/common';
import { LoginDto } from 'src/auth/dtos/login.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';


@Controller('api/auth')
export class AuthController {

  constructor(private authService: AuthService){}
  

  @Post('login')
  async login(@Body() logintDto: LoginDto) {
    const { email, password } = logintDto;
    const user = await this.authService.validateUserCredentials(email, password);
    
    if (!user) {
      throw new UnauthorizedException();
    }
    return await this.authService.loginWithCredentials(user);
 
  }


  @Delete('logout')
  async logout(@Body() logintDto: LoginDto) {
    
    return true;
 
  }


}
