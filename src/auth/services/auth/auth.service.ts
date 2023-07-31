import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/users.service';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtTokenService: JwtService){}

    async validateUserCredentials(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUsersByEmail(email);
        console.log(user.email.toLowerCase())
        console.log(email.toLowerCase())

        if (user && user.password === password && user.email.toLowerCase()==email.toLowerCase()) {
            const {password, ...result} = user;            
            return result;
        }
        return null;
    }

    async loginWithCredentials(user: any) {
        const payload = { username: user.username, sub: user.id, email: user.email, isAdmin: user.isAdmin};     
        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
}