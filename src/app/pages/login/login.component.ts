import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/servers/login.service';
import { NzMessageService } from 'ng-zorro-antd';
import { phoneValidator } from 'src/app/validators/phone.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private message: NzMessageService,
    private router: Router,
    private title: Title,
    private activatedRoute: ActivatedRoute
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
    this.title.setTitle(this.activatedRoute.snapshot.data.title)
  }
  get userName(): AbstractControl {
    return this.validateForm.get('userName')
  }
  submitForm() {
    this.router.navigateByUrl('/');
    // 登陆接口参数
    // [disabled]="!validateForm.valid"
    console.log(this.validateForm)
    if (this.validateForm.valid) {
      let parame = this.validateForm.value
      this.loginService.login(parame).subscribe(
        res => {
          this.router.navigateByUrl('/');
        }
      )
    } else {
      this.message.create('error', '用户名、密码必填！！！')
    }
  }

}
