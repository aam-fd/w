import { Observable, of } from 'rxjs';

const cards: ICard[] = [
  {
    img: 'assets/img/decor/guest-list/1.png',
    category: 'decor',
    subcategory: 'guest-list',
    info: {
      title: '',
      price: 2000,
      company: '',
      contacts: {
        name: '',
        instagram: '',
        vk: '',
        site: '',
        phone: '',
        address: ''
      }
    }
  },
  {
    img: 'assets/img/decor/guest-list/2.png',
    category: 'decor',
    subcategory: 'guest-list',
    info: {
      title: '',
      price: 2000,
      company: '',
      contacts: {
        name: '',
        instagram: '',
        vk: '',
        site: '',
        phone: '',
        address: ''
      }
    }
  },
  {
    img: 'assets/img/decor/guest-list/3.png',
    category: 'decor',
    subcategory: 'guest-list',
    info: {
      title: '',
      price: 2000,
      company: '',
      contacts: {
        name: '',
        instagram: '',
        vk: '',
        site: '',
        phone: '',
        address: ''
      }
    }
  },
  {
    img: 'assets/img/decor/guest-list/4.png',
    category: 'decor',
    subcategory: 'guest-list',
    info: {
      title: '',
      price: 2000,
      company: '',
      contacts: {
        name: '',
        instagram: '',
        vk: '',
        site: '',
        phone: '',
        address: ''
      }
    }
  },
  {
    img: 'assets/img/decor/guest-list/5.png',
    category: 'decor',
    subcategory: 'guest-list',
    info: {
      title: '',
      price: 2000,
      company: '',
      contacts: {
        name: '',
        instagram: '',
        vk: '',
        site: '',
        phone: '',
        address: ''
      }
    }
  },
  {
    img: 'assets/img/decor/chair/1.png',
    category: 'decor',
    subcategory: 'chair',
    info: {
      title: '',
      price: 2000,
      company: '',
      contacts: {
        name: '',
        instagram: '',
        vk: '',
        site: '',
        phone: '',
        address: ''
      }
    }
  },
  {
    img: 'assets/img/decor/rings/1.png',
    category: 'rings',
    subcategory: 'rings',
    info: {
      title: '',
      price: 2000,
      company: '',
      contacts: {
        name: '',
        instagram: '',
        vk: '',
        site: '',
        phone: '',
        address: ''
      }
    }
  },
];

export const cards$: Observable<ICard[]> = of(cards);
