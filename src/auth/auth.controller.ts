import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginRequestDto } from "./dto/request/LoginRequest.dto";
import { Response } from 'express';
import { LoginResponseDTO } from './dto/response/LoginResponse.dto';
import { BaseResponse } from 'src/_base/response/base.response';
import { ResponseMessages } from 'src/_common/enums/ResponseMessages.enum';

@Controller('auth')
export class AuthController {
    @Post("login")
    login(@Body() body: LoginRequestDto, @Res() res: Response<LoginResponseDTO>): void {
        const data = {
            refreshToken: '',
            accessToken: '',
            user: {
                name: "",
                lastname: "",
                pay: ""
            }
        };

        const response = new BaseResponse(data, ResponseMessages.SUCCESS, true);
        res.json(response);
    }

    @Post("register")
    register() { }

    @Post("logout")
    logout() { }

    @Post("refreshToken")
    refreshToken() { }
}
