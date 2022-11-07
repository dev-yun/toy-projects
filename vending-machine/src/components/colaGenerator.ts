interface colaItem {
  image: string;
  type: string;
  price: number;
  count?: number;
}

class ColaGenerator {
  itemList: HTMLUListElement | null;

  constructor() {
    this.itemList = document.querySelector('.cola-list');
  }

  setup() {
    this.loadData((data: any) => {
      this.colaFactory(data.items);
    });
  }

  async loadData(callback: any) {
    const response = await fetch('src/items.json');

    if (response.ok) {
      callback(await response.json());
    }
  }

  colaFactory(data: any) {
    data.forEach((colaData: colaItem) => {
      const item = document.createElement('li');
      const itemTemplate = `
          <button class="vending-cola-button" data-item=${colaData.type} data-count=${colaData.count} data-price=${colaData.price} data-img=${colaData.image}>
            <img src=${colaData.image} alt=${colaData.type} class="vending-cola_img" />
            <span class="base-font-small cola-type">${colaData.type}</span>
            <span class="base-font-normal cola-price">${colaData.price}원</span>
          </button>`;

      item.innerHTML = itemTemplate;
      if (this.itemList !== null) {
        this.itemList.appendChild(item);
      }
    });
  }
}

export default ColaGenerator;
