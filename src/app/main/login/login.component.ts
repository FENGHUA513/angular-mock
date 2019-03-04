import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servers/login.service';
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
    private loginService: LoginService
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
    let parame = this.validateForm.value
    this.loginService.login(parame).subscribe(
      res => {
        this.loginListen.emit(res)
      }
    )
  }

}
