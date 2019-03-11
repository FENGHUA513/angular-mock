import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/servers/login.service';
import { NzMessageService } from 'ng-zorro-antd';
import { phoneValidator } from 'src/app/validators/phone.validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  @Output() loginListen = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private message: NzMessageService
  ) { 
    // this.validateForm = this.fb.group({
    //   'userName': ['', Validators.required, Validators.maxLength(11)],
    //   'password': ['', Validators.required]
    // });
    this.validateForm = new FormGroup({
      'userName': new FormControl('', [Validators.required, Validators.maxLength(11), phoneValidator]),
      'password': new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {   
  }
  get userName(): AbstractControl {
    return this.validateForm.get('userName')
  }
  submitForm() {
    // 登陆接口参数
    // [disabled]="!validateForm.valid"
    console.log(this.validateForm)
    if (this.validateForm.valid) {
      let parame = this.validateForm.value
      this.loginService.login(parame).subscribe(
        res => {
          this.loginListen.emit(res)
        }
      )
    } else {
      this.message.create('error', '用户名、密码必填！！！')
    }
  }

}
