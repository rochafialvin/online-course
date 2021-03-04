///////////////
/* Init Value*/
///////////////
const products = [
  { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
  { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 430000, stock :8 },
  { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 30000, stock :7 },
  { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];

const categories = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];


/////////////////
/* Render List */
////////////////
const fnRenderList = () => {
  // mapping array of product
  const listProduct = products.map((product) => {
    const {id, category, name, price, stock} = product
    return `
      <tr>
        <td>${id}</td>
        <td>${category}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${stock}</td>
      </tr>`
  })

  // mapping array of category
  const listCategory = categories.map((category) => {
    // category = string like 'All', 'Fast Food', 'Electronic' ...
    return `<option value="${category}">${category}</option>`
  })

  // data products
  document.getElementById("render").innerHTML = listProduct.join("")
  // category
  document.getElementById("catFilter").innerHTML = listCategory.join("")
  document.getElementById("catInput").innerHTML = listCategory.join("")

}

////////////////
/* INPUT DATA */
////////////////
const fnInputData = () => {
  // Get data from html
  const name = document.getElementById("nameInput").value
  const price = document.getElementById("priceInput").value
  const category = document.getElementById("catInput").value
  const stock = document.getElementById("stockInput").value

  // create date object
  const time = new Date()
  const id = time.getTime()

  // Push new data
  products.push({id, name, price, category, stock})

  // Clean all text box
  document.getElementById("nameInput").value = ""
  document.getElementById("priceInput").value = ""
  document.getElementById("stockInput").value = ""

  // Show the list
  fnRenderList()
}









fnRenderList()
