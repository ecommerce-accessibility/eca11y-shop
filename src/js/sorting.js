import "tinysort";

export function sorting() {
  let sortOption = document.querySelector("#sort"),
      filterLiveRegion = document.querySelector("#filter-live-region"),
      data,
      order;

  sortOption.addEventListener('change', (e) => {
    switch (e.target.value) {
      case "name-desc":
        data = 'name';
        order = 'desc';
        filterLiveRegion.textContent = "Sorted by name, descending";
        break;
      case "name-asc":
        data = 'name';
        order = 'asc';
        filterLiveRegion.textContent = "Sorted by name, ascending";
        break;
      case "price-desc":
        data = 'price';
        order = 'desc';
        filterLiveRegion.textContent = "Sorted by price, descending";
        break;
      case "price-asc":
        data = 'price';
        order = 'asc';
        filterLiveRegion.textContent = "Sorted by price, ascending";
        break;
      default:
        filterLiveRegion.textContent = "No special sort active";
        break;
    }

    tinysort("#product-list li",{ data, order});

  });

}
