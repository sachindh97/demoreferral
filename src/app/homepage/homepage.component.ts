import { Component, OnInit } from '@angular/core';
import { AffiliateServicesService } from '../affiliate-services.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private services: AffiliateServicesService) {}

  sheetData: any;
  filterData: any = [];
  categoriesList:any;
  ngOnInit(): void {
    this.getData();
    this.getCategoriesData();
  }

  getData() {
    // this.services.getSheetData().subscribe((result:any)=>{
    // console.log(result.data,'resres#');
    // this.sheetData = result.data
    this.sheetData = [
      {
        srno: 1,
        site_name: 'godaddy',
        site_description: 'godaddy is providing web hosting,domain register',
        site_url: 'https://www.godaddy.com/en-in/affiliate-programs',
        site_categories: 'hosting',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 2,
        site_name: 'amazon',
        site_description:
          'amazon is ecommerce website to buy online laptop,mobile,books etc',
        site_url: 'https://affiliate-program.amazon.in/',
        site_categories: 'ecommerce',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 3,
        site_name: 'flipkart',
        site_description: 'flipkart is india online shoping webiste',
        site_url: 'https://affiliate.flipkart.com/',
        site_categories: 'ecommerce',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 4,
        site_name: 'lenskart',
        site_description:
          'Shop online for Sunglasses, Eyeglasses, Contact Lenses and Frames for all',
        site_url: 'https://www.lenskart.com/paytm-referral',
        site_categories: 'product',
        type: 'referral',
        status: 1,
      },
      {
        srno: 5,
        site_name: 'razorpay',
        site_description: 'Online payment gateway for India',
        site_url: 'https://razorpay.com/partners/',
        site_categories: 'finance',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 6,
        site_name: 'upstox',
        site_description: 'upstox is online stockbroker',
        site_url: 'https://upstox.com/refer-and-earn/',
        site_categories: 'finance',
        type: 'referral',
        status: 1,
      },
      {
        srno: 7,
        site_name: 'cashfree',
        site_description: 'cashfree online payment gateway',
        site_url: 'https://www.cashfree.com/partner-program/',
        site_categories: 'finance',
        type: 'referral',
        status: 1,
      },
      {
        srno: 8,
        site_name: 'hostinger',
        site_description: 'hostinger providing web hosting,domain register',
        site_url: 'https://www.hostinger.in/affiliates',
        site_categories: 'hosting',
        type: 'referral',
        status: 1,
      },
      {
        srno: 9,
        site_name: 'udemy',
        site_description: 'provides an online learning and teaching platform.',
        site_url: 'https://www.udemy.com/affiliate/',
        site_categories: 'course',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 10,
        site_name: 'grammarly',
        site_description:
          'It reviews spelling, grammar, punctuation, clarity, engagement, and delivery mistakes in English texts, detects plagiarism, and suggests replacements for the identified errors',
        site_url: 'https://www.grammarly.com/affiliates',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 11,
        site_name: 'wix',
        site_description: 'online website builder ',
        site_url: 'https://www.wix.com/about/affiliates',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 12,
        site_name: 'skyscanner',
        site_description: 'online flight booking',
        site_url: 'https://www.partners.skyscanner.net/product/affiliates',
        site_categories: 'travel',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 13,
        site_name: 'agoda',
        site_description: 'online flight booking, hotel booking',
        site_url: 'https://partners.agoda.com/en-gb/index.html',
        site_categories: 'travel',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 14,
        site_name: 'weebly',
        site_description: 'online website builder ',
        site_url: 'https://get.weebly.com/affiliates/',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 15,
        site_name: 'winzo',
        site_description: 'play online games',
        site_url: 'https://www.winzogames.com/superstar',
        site_categories: 'game',
        type: 'referral',
        status: 1,
      },
      {
        srno: 16,
        site_name: 'vidiq',
        site_description:
          'vidIQ helps you acquire the tools and knowledge needed to grow your audience faster on YouTube and beyond',
        site_url: 'https://vidiq.com/affiliate/',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 17,
        site_name: 'digitalocean',
        site_description: 'digitalocean providing cloud services',
        site_url: 'https://www.digitalocean.com/referral-program',
        site_categories: 'hosting',
        type: 'referral',
        status: 1,
      },
      {
        srno: 18,
        site_name: 'zerodha',
        site_description:
          'Online platform to invest in stocks, derivatives, mutual funds, and more',
        site_url: 'https://zerodha.com/refer/',
        site_categories: 'finance',
        type: 'referral',
        status: 1,
      },
      {
        srno: 19,
        site_name: 'invideo',
        site_description: 'online video editor',
        site_url:
          'https://app.impact.com/campaign-promo-signup/InVideo.brand?execution=e1s1',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 20,
        site_name: 'datacamp',
        site_description: 'Learn Data Science & AI online',
        site_url: 'https://www.datacamp.com/affiliates',
        site_categories: 'course',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 21,
        site_name: 'figma',
        site_description:
          'Figma design is for people to create, share, and test designs for websites, mobile apps, and other digital products and experiences',
        site_url: 'https://www.figma.com/affiliate-program/',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 22,
        site_name: 'vista',
        site_description: '',
        site_url: 'https://create.vista.com/affiliates/',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
    ];
    this.filterData = [
      {
        srno: 1,
        site_name: 'godaddy',
        site_description: 'godaddy is providing web hosting,domain register',
        site_url: 'https://www.godaddy.com/en-in/affiliate-programs',
        site_categories: 'hosting',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 2,
        site_name: 'amazon',
        site_description:
          'amazon is ecommerce website to buy online laptop,mobile,books etc',
        site_url: 'https://affiliate-program.amazon.in/',
        site_categories: 'ecommerce',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 3,
        site_name: 'flipkart',
        site_description: 'flipkart is india online shoping webiste',
        site_url: 'https://affiliate.flipkart.com/',
        site_categories: 'ecommerce',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 4,
        site_name: 'lenskart',
        site_description:
          'Shop online for Sunglasses, Eyeglasses, Contact Lenses and Frames for all',
        site_url: 'https://www.lenskart.com/paytm-referral',
        site_categories: 'product',
        type: 'referral',
        status: 1,
      },
      {
        srno: 5,
        site_name: 'razorpay',
        site_description: 'Online payment gateway for India',
        site_url: 'https://razorpay.com/partners/',
        site_categories: 'finance',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 6,
        site_name: 'upstox',
        site_description: 'upstox is online stockbroker',
        site_url: 'https://upstox.com/refer-and-earn/',
        site_categories: 'finance',
        type: 'referral',
        status: 1,
      },
      {
        srno: 7,
        site_name: 'cashfree',
        site_description: 'cashfree online payment gateway',
        site_url: 'https://www.cashfree.com/partner-program/',
        site_categories: 'finance',
        type: 'referral',
        status: 1,
      },
      {
        srno: 8,
        site_name: 'hostinger',
        site_description: 'hostinger providing web hosting,domain register',
        site_url: 'https://www.hostinger.in/affiliates',
        site_categories: 'hosting',
        type: 'referral',
        status: 1,
      },
      {
        srno: 9,
        site_name: 'udemy',
        site_description: 'provides an online learning and teaching platform.',
        site_url: 'https://www.udemy.com/affiliate/',
        site_categories: 'course',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 10,
        site_name: 'grammarly',
        site_description:
          'It reviews spelling, grammar, punctuation, clarity, engagement, and delivery mistakes in English texts, detects plagiarism, and suggests replacements for the identified errors',
        site_url: 'https://www.grammarly.com/affiliates',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 11,
        site_name: 'wix',
        site_description: 'online website builder ',
        site_url: 'https://www.wix.com/about/affiliates',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 12,
        site_name: 'skyscanner',
        site_description: 'online flight booking',
        site_url: 'https://www.partners.skyscanner.net/product/affiliates',
        site_categories: 'travel',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 13,
        site_name: 'agoda',
        site_description: 'online flight booking, hotel booking',
        site_url: 'https://partners.agoda.com/en-gb/index.html',
        site_categories: 'travel',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 14,
        site_name: 'weebly',
        site_description: 'online website builder ',
        site_url: 'https://get.weebly.com/affiliates/',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 15,
        site_name: 'winzo',
        site_description: 'play online games',
        site_url: 'https://www.winzogames.com/superstar',
        site_categories: 'game',
        type: 'referral',
        status: 1,
      },
      {
        srno: 16,
        site_name: 'vidiq',
        site_description:
          'vidIQ helps you acquire the tools and knowledge needed to grow your audience faster on YouTube and beyond',
        site_url: 'https://vidiq.com/affiliate/',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 17,
        site_name: 'digitalocean',
        site_description: 'digitalocean providing cloud services',
        site_url: 'https://www.digitalocean.com/referral-program',
        site_categories: 'hosting',
        type: 'referral',
        status: 1,
      },
      {
        srno: 18,
        site_name: 'zerodha',
        site_description:
          'Online platform to invest in stocks, derivatives, mutual funds, and more',
        site_url: 'https://zerodha.com/refer/',
        site_categories: 'finance',
        type: 'referral',
        status: 1,
      },
      {
        srno: 19,
        site_name: 'invideo',
        site_description: 'online video editor',
        site_url:
          'https://app.impact.com/campaign-promo-signup/InVideo.brand?execution=e1s1',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 20,
        site_name: 'datacamp',
        site_description: 'Learn Data Science & AI online',
        site_url: 'https://www.datacamp.com/affiliates',
        site_categories: 'course',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 21,
        site_name: 'figma',
        site_description:
          'Figma design is for people to create, share, and test designs for websites, mobile apps, and other digital products and experiences',
        site_url: 'https://www.figma.com/affiliate-program/',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
      {
        srno: 22,
        site_name: 'vista',
        site_description: '',
        site_url: 'https://create.vista.com/affiliates/',
        site_categories: 'product',
        type: 'affiliate',
        status: 1,
      },
    ];
    // });
  }

  getCategoriesData()
  {
    this.categoriesList =this.services.getCategories()
  }

  onChgCategories(event: any) {
    let getCatName = event.target.value;
    console.log(getCatName, 'getCatId#2');

    if (getCatName != 'All') {
      this.filterData = [];
      this.sheetData.filter((res: any) => {
        if (res.site_categories == getCatName) {
          console.log('eee#');

          this.filterData.push(res);
        }
      });
    } else {
      this.filterData = this.sheetData;
    }
  }
}
