import { Component } from '@angular/core';

@Component({
  selector: 'app-verbi2',
  templateUrl: './verbi2.component.html',
  styleUrl: './verbi2.component.css'
})
export class Verbi2Component {

  cards = [
    {
      languages: ['German-C1', 'Italain-B2', 'French-C1'],
      name: 'Prajakta',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dignissimos earum consequatur eius maiores exercitationem accusantium, eos placeat quaerat tempora pariatur, quam suscipit quidem quod provident recusandae beatae ad nihil!'
    },
  ];


  slickConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    fade: true,
    speed: 2000,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false
        }
      }
    ]
  };

  // afterChange(e) {
  //   console.log('afterChange');
  // }

}
