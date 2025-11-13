import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material-module';
import { NgFor, NgIf } from '@angular/common';
import * as globals from '../../shared/globals';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, NgFor, NgIf, ReactiveFormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  advance_level = globals.advance_level;
  bggineer_level = globals.bggineer_level;
  aboutus = 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzCGeE67HcBbKxE4Lk55hwr7HQ-Sc1a6YRhn9c-ryuQ0NtZKxEn__hwIFgrTpt0bzabJfmvVIWkjghBEiIvF6pHMcM830NcMyJH5fvjs_Zc-k7ZHrLSTfyv3FqRDt8nyZHVyTPrrPv3LegW=s680-w680-h510-rw';
  slides = [
    {
      title: 'Innovate Your Digital Experience',
      description:
        'We craft visually stunning and user-focused designs that elevate your brand identity and captivate your audience.',
    },
    {
      title: 'Design That Speaks for Your Brand',
      description:
        'From concept to creation, we help your business stand out with engaging visuals and modern aesthetics.',
    },
    {
      title: 'Building Interfaces That Inspire',
      description:
        'We blend creativity with functionality to deliver seamless, interactive user experiences.',
    },
    {
      title: 'Delivering Seamless User Journeys',
      description:
        'Every design we craft focuses on usability, ensuring effortless navigation and impactful storytelling.',
    },
  ];

  features = [
    {
      img: globals.img_1,
      title: 'Simulator Workshop',
      description:
        'Experience driving in real-world conditions before you hit the road.',
    },
    {
      img: globals.img_2,
      title: '1-on-1 Individual Training',
      description:
        'Dedicated attention for faster learning and personal confidence.',
    },
    {
      img: globals.img_3,
      title: 'Unlimited KMs Every Hour',
      description:
        'No limits, no rush — drive as much as you can within your session.',
    },
    {
      img: globals.img_4,
      title: 'Comfortable AC Cars',
      description:
        'Learn to drive in modern, fully air-conditioned vehicles.',
    },
    {
      img: globals.img_5,
      title: 'License Assistance',
      description:
        'End-to-end support from learner’s license to permanent license.',
    },
    {
      img: globals.img_6,
      title: 'Well-Trained Instructors',
      description:
        'Patient, experienced professionals focused on safety and skill-building.',
    },
  ];

  courses = [
    {
      title: 'Advanced Driving Course',
      description:
        'Perfect for Learners who want complete confidence and extended practice.',
      img: this.advance_level,
      features: [
        { property: 'Duration', value: '21 Days' },
        { property: 'Simulator Training', value: '5 Days' },
        { property: '1-on-1 On-Road Practical Training', value: '15 Hours (Unlimited Kilometers)' },
        { property: 'Demo Class', value: '1 Hour' },
        { property: 'Includes', value: 'End-to-end RTO documentation and support' },
      ],
    },
    {
      title: 'Beginner Driving Course',
      description:
        'Perfect for Beginners who want to get started quickly and learn the essentials.',
      img: this.bggineer_level,
      features: [
        { property: 'Duration', value: '14 Days' },
        { property: 'Simulator Training', value: '53 Days' },
        { property: '1-on-1 On-Road Practical Training', value: '10 Hours (Unlimited Kilometers)' },
        { property: 'Demo Class', value: '1 Hour' },
        { property: 'Includes', value: 'End-to-end RTO documentation and support' },
      ],
    }

  ];

  coaches = [
    {
      name: 'Ravi Kumar',
      role: 'Senior Driving Instructor',
      image: this.advance_level,
    },
    {
      name: 'Priya Sharma',
      role: 'Defensive Driving Specialist',
      image: this.advance_level,
    },
  ];

  gallery = [
    { type: 'image', src: 'https://lh3.googleusercontent.com/p/AF1QipO0Gca2csvTT-pDSQ8V0fzJGLCCPWHvcBjt9CuX=s680-w680-h510-rw' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy4zIsczGSx532IUsn97Rs_UFkkZtQBPGu48pkkOsXWL9ASnLnSHbYBetk93pR_qXHrqhxX_NJ_GKhk83QX-5fpqLu2Oz_fWFV-5YQ0IzbTJhZ2hbLM04FOlBUNTIRbXpPUV0O1xQ=s680-w680-h510-rw' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxzWgrmu5EyatxZVR4AZVWz1eoMZWjO3Ve-Z6Zorf6ECNoKSTorOA8WxP7bhQlgdp9f14ECY6EkdRGd9g8TbbiUFfshWR1-Um6xNqeYuMdKFTI1-_MWqZFGGWM_st1vFQ5cMgQVcJQ6G-Pf=s680-w680-h510-rw' },
    { type: 'video', src: 'https://rr1---sn-h557sn66.googlevideo.com/videoplayback?expire=1763014362&ei=uloVaY72DtS6rtoP4OSfsAI&ip=117.196.191.186&id=98827d9d03719d43&itag=18&source=picasa&begin=0&requiressl=yes&xpc=Eghoy-b0JXoBAQ==&met=1763007162,&mh=9i&mm=32&mn=sn-h557sn66&ms=su&mv=m&mvi=1&pl=22&rms=su,su&sc=yes&susc=ph&app=fife&ic=945&pcm2=yes&mime=video/mp4&vprv=1&prv=1&rqh=1&dur=13.165&lmt=1736668044159344&mt=1763006722&txp=0000224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,app,ic,pcm2,mime,vprv,prv,rqh,dur,lmt&sig=AJfQdSswRAIgB8LBdXkJZCrbN7jfJId5XVcg25l71orJusskwMUc0KQCID7BbOmB1M58FX0_3fxmsV_Vmn_Px3cBclHXmLbKGmJn&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=APaTxxMwRAIgGqaPgV1byuohSD7PLqSB6ImNlVgbTzlMpkq-rlF0tlwCIAKLmLQYt9VKswUs80uebTE6ZExSb3IbY2n8VFViOQ6F' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/p/AF1QipO0Gca2csvTT-pDSQ8V0fzJGLCCPWHvcBjt9CuX=s680-w680-h510-rw' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy4zIsczGSx532IUsn97Rs_UFkkZtQBPGu48pkkOsXWL9ASnLnSHbYBetk93pR_qXHrqhxX_NJ_GKhk83QX-5fpqLu2Oz_fWFV-5YQ0IzbTJhZ2hbLM04FOlBUNTIRbXpPUV0O1xQ=s680-w680-h510-rw' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxzWgrmu5EyatxZVR4AZVWz1eoMZWjO3Ve-Z6Zorf6ECNoKSTorOA8WxP7bhQlgdp9f14ECY6EkdRGd9g8TbbiUFfshWR1-Um6xNqeYuMdKFTI1-_MWqZFGGWM_st1vFQ5cMgQVcJQ6G-Pf=s680-w680-h510-rw' },
    { type: 'video', src: 'https://rr1---sn-h557sn66.googlevideo.com/videoplayback?expire=1763014362&ei=uloVaY72DtS6rtoP4OSfsAI&ip=117.196.191.186&id=98827d9d03719d43&itag=18&source=picasa&begin=0&requiressl=yes&xpc=Eghoy-b0JXoBAQ==&met=1763007162,&mh=9i&mm=32&mn=sn-h557sn66&ms=su&mv=m&mvi=1&pl=22&rms=su,su&sc=yes&susc=ph&app=fife&ic=945&pcm2=yes&mime=video/mp4&vprv=1&prv=1&rqh=1&dur=13.165&lmt=1736668044159344&mt=1763006722&txp=0000224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,app,ic,pcm2,mime,vprv,prv,rqh,dur,lmt&sig=AJfQdSswRAIgB8LBdXkJZCrbN7jfJId5XVcg25l71orJusskwMUc0KQCID7BbOmB1M58FX0_3fxmsV_Vmn_Px3cBclHXmLbKGmJn&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=APaTxxMwRAIgGqaPgV1byuohSD7PLqSB6ImNlVgbTzlMpkq-rlF0tlwCIAKLmLQYt9VKswUs80uebTE6ZExSb3IbY2n8VFViOQ6F' },
  ];

  isPreviewOpen = false;
  currentIndexs = 0;

  currentIndex = 0;
  interval: any;
  contactForm: FormGroup;


  // ✅ Inject FormBuilder first using constructor
  constructor(private fb: FormBuilder) {
    // ✅ Initialize form inside constructor (after fb is ready)
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: [''],
      message: [''],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Thank you! Your message has been submitted.');
      this.contactForm.reset();
    }
  }
  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  openPreview(index: number) {
    this.currentIndexs = index;
    this.isPreviewOpen = true;
  }

  closePreview() {
    this.isPreviewOpen = false;
  }

  nextItem() {
    this.currentIndexs = (this.currentIndexs + 1) % this.gallery.length;
  }

  prevItem() {
    this.currentIndexs =
      (this.currentIndexs - 1 + this.gallery.length) % this.gallery.length;
  }
}