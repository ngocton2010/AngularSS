import { Component, OnInit } from '@angular/core';
import { Section } from './section.model';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  sections : Section[] =[
    new Section('Xây dựng đội mạnh nhất',
    'Đời người chỉ có một lần, làm cái gì cũng quan trọng nhưng mà làm vì ai và hơn tất cả làm điều đó cùng với ai đó mới là điều quan trọng nhất.Những việc không thể làm một người thì hãy chia sẻ và hợp sức với đồng đội để đạt được mục tiêu. Tạo ra một đội như vậy là chủ đề quan trọng nhất.'
    ,'assets/image/doimanhnhat.png'),
    new Section('Học tập và làm việc theo hiến chương Sorimachi Group',
    'Đời người chỉ có một lần, làm cái gì cũng quan trọng nhưng mà làm vì ai và hơn tất cả làm điều đó cùng với ai đó mới là điều quan trọng nhất.Những việc không thể làm một người thì hãy chia sẻ và hợp sức với đồng đội để đạt được mục tiêu. Tạo ra một đội như vậy là chủ đề quan trọng nhất.'
    ,'assets/image/doimanhnhat.png'),
  ]
  constructor() { }
  
  ngOnInit(): void {
  }

}
