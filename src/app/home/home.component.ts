import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild('skills') skills!: ElementRef
  @ViewChild('background') background!: ElementRef
  @ViewChild('projects') projects!: ElementRef
  @ViewChild('contact') contact!: ElementRef

  spanish:boolean = false

  darkMode:boolean = false

  cv: boolean = false

  cvEng: boolean = false

  ngOnInit(): void {
    if(localStorage.getItem('dark')) {
      this.darkMode = JSON.parse(localStorage.getItem('dark')!)
    } return
  }

  darkModeSwitch():void{
    this.darkMode = !this.darkMode
    localStorage.setItem('dark', JSON.stringify(this.darkMode))
  }

  cvFunc(): void {
    this.cv = true
    this.cvEng = false
  }

  cvEngFunc(): void {
    this.cvEng = true
    this.cv = false
  }

  clickOut() {
    this.cv = false
    this.cvEng = false
  }

  toSpanish():void {
    this.spanish = true
  }

  toEnglish():void {
    this.spanish = false
  }

  skillsFunction():void {
    this.skills.nativeElement.scrollIntoView({block:"center"})
  }

  aboutFunction():void {
    this.background.nativeElement.scrollIntoView({block:"center"})
  }

  projectsFunction():void {
    this.projects.nativeElement.scrollIntoView({block:"center"})
  }

  contactFunction():void {
    this.contact.nativeElement.scrollIntoView({block:"center"})
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 10,
    navSpeed: 700,
    autoHeight: false,

    navText: ['<i class="fa-solid fa-angle-left"></i>',
     '<i class="fa-solid fa-angle-right"></i>'
    ],
    responsive: {
      100: {
        items: 1
      },
      350: {
        items: 1.5
      },
      500: {
        items: 2
      },
      740: {
        items: 2.5
      },
      940: {
        items: 3.5
      },
      1160: {
        items: 4.5
      }
    },
    nav: true
  }


}
