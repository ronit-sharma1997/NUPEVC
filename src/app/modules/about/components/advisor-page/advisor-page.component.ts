import { Component, OnInit } from '@angular/core';
import { AdvisorMember } from '../../../../models/advisor';

@Component({
  selector: 'app-advisor-page',
  templateUrl: './advisor-page.component.html',
  styleUrls: ['./advisor-page.component.scss']
})
export class AdvisorPageComponent implements OnInit {
  advisors: AdvisorMember[] = [];

  constructor() { }

  ngOnInit(): void {
    this.advisors = [
      {
      name: 'Andrew Ghannam',
      title: 'EVP, Head of East Coast Tech Venture Banking at Pacific Western Bank',
      description: 'Andrew is currently managing Pacific Western Bank\'s (formerly Square 1) Venture Banking practice on the east coast. Pacific Western Bank specializes in providing creative financing solutions to venture capital and private equity backed companies. He has worked with companies in a variety of sectors including fintech, healthcare IT, education, B2B SaaS, ad tech, and consumer products among others and engages with company CEOs, CFOs, and venture capital firm partners & associates to learn about their business and debt needs.',
      linkedIn: 'https://www.linkedin.com/in/andrew-ghannam-1bbbb21b/',
      img: '../../../../../assets/andrew_ghannam.png'
      },
      {
        name: 'Lizzy Goldman',
        title: 'Venture Capital Investor at Samsung Next',
        description: 'Lizzy is currently an investor at Samsung Next.  Prior to Samsung Next, Lizzy was an Investment Analyst at Olive Tree Ventures, specializing in mid to growth stage digital health investments. She also has experience at Morgan Stanley and Goldman Sachs.',
        linkedIn: 'https://www.linkedin.com/in/lizzy-goldman-93792b45/',
        img: '../../../../../assets/lizzy_goldman.png'
      },
      {
        name: 'Helene Servillon',
        title: 'Partner at JourneyOne Ventures',
        description: 'Helene is a Founding Partner at JourneyOne Ventures. She is passionate about investing in  underestimated markets such as the plant-based movement, have hunger for challenge, think with a childlike curiosity, and loves to build partnerships and outcomes that are meaningful and drive returns. Helene has previous experience in content management across a variety of fitness apparel corporations and later served as the Chief Strategy Officer of GRTR, a consumer brand accelerator.',
        linkedIn: 'https://www.linkedin.com/in/hservillon/',
        img: '../../../../../assets/helene_servillon.png'
      },
      {
        name: 'Ken Graham',
        title: 'Investment Associate at a.k.a Brands',
        description: 'Ken is a current Investment Associate at a.k.a. Brands, a global, direct-to-consumer platform focused on fashion brands offering a curated assortment of on-trend, affordably-priced fashion apparel and accessories. Prior to joining a.k.a. Brands, Ken was an Investor at Summit Partners, a leading growth equity firm.',
        linkedIn: 'https://www.linkedin.com/in/grahamk3/',
        img: '../../../../../assets/ken_graham.png'
      }
    ]
  }

}