///////////////
/* Init Value*/
///////////////
const products = [
  {
    id: 1579581080923,
    category: "Fast Food",
    name: "Noodle",
    price: 3500,
    stock: 9,
  },
  {
    id: 1579581081130,
    category: "Electronic",
    name: "Headphone",
    price: 430000,
    stock: 8,
  },
  {
    id: 1579581081342,
    category: "Cloth",
    name: "Hoodie",
    price: 30000,
    stock: 7,
  },
  {
    id: 1579581081577,
    category: "Fruit",
    name: "Apple",
    price: 10000,
    stock: 8,
  },
];

const categories = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

/////////////////
/* Render List */
////////////////
const fnRenderList = () => {
  // mapping array of product
  const listProduct = products.map((product) => {
    const { id, category, name, price, stock } = product;
    return `
      <tr>
        <td>${id}</td>
        <td>${category}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${stock}</td>
      </tr>`;
  });

  // mapping array of category
  const listCategory = categories.map((category) => {
    // category = string like 'All', 'Fast Food', 'Electronic' ...
    return `<option value="${category}">${category}</option>`;
  });

  // data products
  document.getElementById("render").innerHTML = listProduct.join("");
  // category
  document.getElementById("catFilter").innerHTML = listCategory.join("");
  document.getElementById("catInput").innerHTML = listCategory.join("");
};

//////////////////
/* RENDER FILTER*/
//////////////////
const fnRenderFilter = (arr) => {
  // mapping array of product
  const listProduct = arr.map((product) => {
    const { id, category, name, price, stock } = product;
    return `
      <tr>
        <td>${id}</td>
        <td>${category}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${stock}</td>
      </tr>`;
  });

  // data products
  document.getElementById("render").innerHTML = listProduct.join("");
};

//////////////////
/* RESET FILTER*/
//////////////////
const fnResetFilter = () => {
  const inputTags = document.getElementsByName("txtFilter");

  for (const input of inputTags) {
    input.value = "";
  }

  fnRenderList();
};

////////////////
/* INPUT DATA */
////////////////
const fnInputData = () => {
  // Get data from html
  const name = document.getElementById("nameInput").value;
  const price = parseInt(document.getElementById("priceInput").value);
  const category = document.getElementById("catInput").value;
  const stock = document.getElementById("stockInput").value;

  // create date object
  const time = new Date();
  const id = time.getTime();

  // Push new data
  products.push({ id, name, price, category, stock });

  // Clean all text box
  document.getElementById("nameInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("stockInput").value = "";

  console.log(products);
  // Show the list
  fnRenderList();
};

////////////////
/* FILTER NAME */
////////////////
const fnFilterName = () => {
  // Get data from user
  // keyword = 'A'
  const keyword = document.getElementById("nameFilter").value;

  // Filtering
  // [{name: "Headphone"}, {name: "Apple"} ]
  const filterResult = products.filter((product) => {
    // product = {name: "Apple"}
    // Turn to lowercase

    // nameLow = 'apple'
    const nameLow = product.name.toLowerCase();

    // keywordLow = 'a'
    const keywordLow = keyword.toLowerCase();

    // true
    return nameLow.includes(keywordLow);
  });

  fnRenderFilter(filterResult);
};

//////////////////
/* Filter Price */
/////////////////
const fnFilterPriceNew = () => {
  const min = parseInt(document.getElementById("min").value); // NaN
  const max = parseInt(document.getElementById("max").value); // NaN

  const filterResult = products.filter((product) => {
    if (min && max) {
      return product.price >= min && product.price <= max;
    } else if (min) {
      return product.price >= min;
    } else if (max) {
      return product.price <= max;
    } else {
      return true;
    }
  });

  fnRenderList(filterResult);
};

//////////////////
/* FILTER PRICE */
//////////////////
const fnFilterPrice = () => {
  // get min value
  const min = document.getElementById("min").value;
  // get max value
  const max = document.getElementById("max").value;

  let filterResult = products;

  // all text boxes don't empty
  if (!(min == "" || max == "")) {
    filterResult = products.filter((product) => {
      const { price } = product;
      return price >= min && price <= max;
    });
  }

  fnRenderFilter(filterResult);
};

/////////////////////
/* FILTER CATEGORY */
/////////////////////
const fnFilterCategory = () => {
  const selectedCategory = document.getElementById("catFilter").value;

  let filterResult = products;

  if (selectedCategory != "All") {
    filterResult = products.filter((product) => {
      return product.category == selectedCategory;
    });
  }

  fnRenderFilter(filterResult);
};

fnRenderList();
