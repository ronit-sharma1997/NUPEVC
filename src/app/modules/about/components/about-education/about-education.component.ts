import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about-education',
  templateUrl: './about-education.component.html',
  styleUrls: ['./about-education.component.scss']
})
export class AboutEducationComponent implements OnInit {
  faSpinner = faCircleNotch
  urls: string[]
  isLoading: boolean[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.urls = []
    this.isLoading = []
    this.urls.push('https://docs.google.com/presentation/d/e/2PACX-1vS7oHG1jGrn-nfPF2iw1YD6Gl_g1g8fPswmETDuLNPRzeQMJRSTZ2hC8R1IgWVVaA/embed?start=false&loop=false&delayms=3000')
    this.urls.push('https://docs.google.com/presentation/d/e/2PACX-1vQ0gURyccC3ozP7FeQB6zcChikSyBPMgqv9ELGilTo-xwvQ9buOHRiOwkGhTi_fuZHbn56vqeF0HHog/embed?start=false&loop=false&delayms=3000')
    this.urls.push('https://docs.google.com/presentation/d/e/2PACX-1vRpk20kIUe2lTkThQYCUoGnKKuYQ2P_MJtr-gkfgajDpnCNmpUU7uxBWaqln_Wlwg/embed?start=false&loop=false&delayms=3000')
    this.urls.push('https://docs.google.com/presentation/d/e/2PACX-1vQww_nT9x7RYLYT3m2boLMvyxvO6KN7kuEABcJwKdWJEg9ZPK05pWKSez9YoVoxzrQipJqFy6SI0kjC/embed?start=false&loop=false&delayms=3000')

    for(let i = 0; i < this.urls.length; i++) {
      this.isLoading.push(true)
    }

    this.messageService.sendMessage('/about/education')
  }

  loading(index: number): void {
    this.isLoading[index] = false
  }
}
