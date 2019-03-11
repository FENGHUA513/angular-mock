import { ValidationErrors, AbstractControl } from "@angular/forms"
export function phoneValidator(control: AbstractControl): ValidationErrors | null {
    const reg = /^1[3456789]\d{9}$/;
    return reg.test(control.value) ? null : { phoneError: '请输入有效手机号'}
}