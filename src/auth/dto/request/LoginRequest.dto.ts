import { IsNotEmpty, IsStrongPassword, MaxLength, MinLength } from "class-validator"
import { DtoPrefix, getValidationMessage, ValidationType } from "src/_common/enums/ValidationMessages.enum"

export class LoginRequestDto {
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.EMAIL_OR_PHONE, ValidationType.NOT_EMPTY) })
    @MinLength(6, { message: getValidationMessage(DtoPrefix.EMAIL_OR_PHONE, ValidationType.MIN_LENGTH, 6) })
    @MaxLength(25, { message: getValidationMessage(DtoPrefix.EMAIL_OR_PHONE, ValidationType.MAX_LENGTH, 25) })
    emailOrPhone: string
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.PASSWORD, ValidationType.NOT_EMPTY) })
    @MinLength(6, { message: getValidationMessage(DtoPrefix.PASSWORD, ValidationType.MIN_LENGTH, 6) })
    @MaxLength(25, { message: getValidationMessage(DtoPrefix.PASSWORD, ValidationType.MAX_LENGTH, 25) })
    // @IsStrongPassword({},{message:getValidationMessage(DtoPrefix.PASSWORD,ValidationType.NOT_STRONG)})
    password: string
}