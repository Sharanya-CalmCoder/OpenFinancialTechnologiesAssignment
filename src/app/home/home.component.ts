import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardData = Array();
  constructor() { }

  ngOnInit() {
    this.cardData = [
      {
        image_url:'assets/images/Get Paid Instantly.png',
        title:'assets/images/Quick cash disbursem.svg',
        text:'assets/images/Get terms loans that.svg'
      },
      {
        image_url:'assets/images/Low interest rate.png',
        title:"assets/images/Low-interest rate.svg",
        text:"assets/images/Achieve your financi.svg"
      },
      {
        image_url:'assets/images/Secure Payments.png',
        title:"assets/images/Zero Paperwork.svg",
        text:"assets/images/Get started instantl.svg"
      },
      {
        image_url:'assets/images/freelancer_feature_icon_6@1.5x.png',
        title:"assets/images/Ace your business fi.svg",
        text:"assets/images/Manage banking, acco.svg"
      },
      {
        image_url:'assets/images/Covid.png',
        title:"assets/images/Loans to fight COVID.svg",
        text:"assets/images/Zero EMI for first 3.svg"
      }
    ];
  }
}
