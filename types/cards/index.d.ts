interface ICard {
  img: string,
  category: string,
  subcategory: string,
  info: {
    title: string,
    price: number,
    company: string,
    contacts: {
      name: string,
      instagram: string,
      vk: string,
      site: string,
      phone: string,
      address: string
    }
  }
}