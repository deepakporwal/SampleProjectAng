import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Subscription, from, of, Observable } from 'rxjs';

@Component({
  selector: 'app-samplerxjs',
  templateUrl: './samplerxjs.component.html',
  styleUrls: ['./samplerxjs.component.css']
})
export class SamplerxjsComponent implements OnInit {

  objsub : Subscription;
  constructor() { }

  ngOnInit(): void {
    const source= interval(1000);
    let count = 0 ;
    this.objsub  =  source.subscribe(res=>{
      //console.log(res);
      let el= document.createElement('li');
        el.innerText = "Video " + count++;
        document.getElementById('myul').append(el);
      if(res >=5){
        this.objsub.unsubscribe();
        }
    })

    var mysub1 = of("deepak","arpit","pratik");
    mysub1.subscribe(res =>{
      console.log(res);
    });

    fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

    // console.log('timer observalbe start')
    // timer(5000,1000).subscribe((res) =>{
    //   console.log(res);
    // });

    const obs1 = new Observable(subscriber =>{
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next(4);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    obs1.subscribe(res =>{
      console.log(res)
    });
  }

  FetchDataFromService() {
    const data = from(fetch('https://jsonplaceholder.typicode.com/users'));
    data.subscribe({
      next(res) {
        console.log(res)
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('completed');
      }
    })
  }


}
