import { Component, OnInit, Input } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {
  array: number[];
  time: Observable<Date>;
  constructor(private route: ActivatedRoute) {
    this.array = [1, 2, 3];
    this.time = interval(1000).pipe(map(
      _ => new Date()
    ));
  }
  ngOnInit() {
    this.route.params.subscribe(
      res => {
        console.log(this.route.snapshot.paramMap.get('id'));
        console.log(res.id, 'id');
      }
    );
  }
}
