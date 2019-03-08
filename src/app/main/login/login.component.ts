import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servers/login.service';
import { NzMessageService } from 'ng-zorro-antd';
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
    // use FormBuilder to create a form group
    this.validateForm = this.fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
    // 登陆接口参数
    // [disabled]="!validateForm.valid"
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
