import { Component, OnInit } from '@angular/core';
import{ROUTE_ANIMATIONS_ELEMENTS} from '@app/core';
@Component({
  selector: 'anms-orbi-team',
  templateUrl: './orbi-team.component.html',
  styleUrls: ['./orbi-team.component.css']
})
export class OrbiTeamComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  public persons: any[] = [{
    'img': 'https://pbs.twimg.com/profile_images/2858870778/f4d7cd48c55b728f3a76b5ad709a6b5b_400x400.png',
    'title': 'CEO',
    'name': 'Sanjay Dwivedi',
    'qualification': 'Phd. Agriculture',
    'contact': 9899077645,
    'whatsapp': 9899077645,
    'email': "nagendra.shuk@gmail.com",
    'twitter': 'https://twitter.com/NagShukl',
    'facebook': 'https://www.facebook.com/nagendra.shukla.984',
    'youtube': 'https://www.youtube.com/channel/UCVFj19zXDGkiMOwMl-lhWpQ?view_as=subscriber',
    'linkedin': 'https://www.linkedin.com/in/nagendra-shukla-5902b118/',
    'summary': 'Experience Summary Here!!'
  },{
    'img': 'https://pbs.twimg.com/profile_images/2858870778/f4d7cd48c55b728f3a76b5ad709a6b5b_400x400.png',
    'title': 'CTO',
    'name': 'Sanjay Dwivedi',
    'qualification': 'Phd. Agriculture',
    'contact': 9899077645,
    'whatsapp': 9899077645,
    'email': "nagshukl@gmail.com",
    'twitter': 'https://twitter.com/NagShukl',
    'facebook': 'https://www.facebook.com/nagendra.shukla.984',
    'youtube': 'https://www.youtube.com/channel/UCVFj19zXDGkiMOwMl-lhWpQ?view_as=subscriber',
    'linkedin': 'https://www.linkedin.com/in/nagendra-shukla-5902b118/',
    'summary': 'Experience Summary Here!!'
  },{
    'img': 'https://pbs.twimg.com/profile_images/2858870778/f4d7cd48c55b728f3a76b5ad709a6b5b_400x400.png',
    'title': 'CFO',
    'name': 'Sanjay Dwivedi',
    'qualification': 'Phd. Agriculture',
    'contact': 9899077645,
    'whatsapp': 9899077645,
    'email': "nagshukl@gmail.com",
    'twitter': 'https://twitter.com/NagShukl',
    'facebook': 'https://www.facebook.com/nagendra.shukla.984',
    'youtube': 'https://www.youtube.com/channel/UCVFj19zXDGkiMOwMl-lhWpQ?view_as=subscriber',
    'linkedin': 'https://www.linkedin.com/in/nagendra-shukla-5902b118/',
    'summary': 'Experience Summary Here!!'
  }];
  constructor() { }

  ngOnInit() {
  }
  public getImgPath(img: string): string {
    if(img.indexOf('http') !== -1)
      return img;
    return '../../assets/imgs/'+img;
  }
}