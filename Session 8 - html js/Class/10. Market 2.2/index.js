///////////////
/* Init Value*/
///////////////
let products = [
  { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
  { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 430000, stock :8 },
  { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 30000, stock :7 },
  { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];

const categories = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

let carts = []


/////////////////
/* Render List */
////////////////
const fnRenderList = (index) => {
  // mapping array of product
  const listProduct = products.map((product) => {
    const {id, category, name, price, stock} = product

    if(id != index){
      return `
      <tr>
        <td>${id}</td>
        <td>${category}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${stock}</td>

        <td><input type="button" value="Add" onclick="fnAdd(${id})" ></td>
        <td><input type="button" value="Delete" onclick="fnDelete(${id})" ></td>
        <td><input type="button" value="Edit" onclick="fnEdit(${id})"></td>
      </tr>`
    }

    return `
      <tr>
        <td>${id}</td>
        <td>${category}</td>
        <td><input value="${name}" type="text" id="nameEdit"></td>
        <td><input value="${price}" type="text" id="priceEdit"></td>
        <td><input value="${stock}" type="text" id="stockEdit"></td>
        <td><input type="button" value="Add" disabled ></td>
        <td><input type="button" value="Save" onclick = "fnSave(${id})" ></td>
        <td><input type="button" value="Cancel" onclick="fnCancel()"></td>
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

/////////
/* ADD */
/////////
const fnAdd = (index) => {
  const selectedProduct = products.find((product) => { return product.id == index})

  carts.push(selectedProduct)

  fnRenderCart()
}


//////////
/* EDIT */
//////////
const fnEdit = (index) => {
  fnRenderList(index)
}

////////////
/* CANCEL */
////////////
const fnCancel = (index) => {
  fnRenderList()
}

//////////
/* SAVE */
//////////

const fnSave = (index) => {
  // Get all new data from text box
  const name = document.getElementById("nameEdit").value
  const price = document.getElementById("priceEdit").value
  const stock = document.getElementById("stockEdit").value

  // Found index
  const found = products.findIndex((product) => {return product.id == index })

  // Change data
  products[found] = {...products[found], name, price , stock }

  fnRenderList()
}

////////////
/* DELETE */
////////////

// [ {id: 01}, {id: 02}, {id: 03} ]
// index : 02
const fnDelete = (index) => {

  // [{id: 01}, {id: 03}]
  products = products.filter((product) => {
    // product : {id: 03}
    return product.id != index
  })

  fnRenderList()
}

/////////////////
/* DELETE CART */
/////////////////
const fnDeleteCart = (index) => {

  carts = carts.filter((cart) => {

    return cart.id != index
  })

  fnRenderCart()
}

/////////////////
/* RENDER CARTS*/
/////////////////
const fnRenderCart = () => {
  const listCart = carts.map((cart) => {
    const {id, category, name, price, stock} = cart
    return `
      <tr>
        <td>${id}</td>
        <td>${category}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${stock}</td>
        <td><input type="button" value="Delete" onclick = "fnDeleteCart(${id})" ></td>
      </tr>
    `
  })

  document.getElementById("carts").innerHTML = listCart.join("")
}


//////////////////
/* RENDER FILTER*/
//////////////////
const fnRenderFilter = (arr) => {
  // mapping array of product
  const listProduct = arr.map((product) => {
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

  // data products
  document.getElementById("render").innerHTML = listProduct.join("")
}

//////////////////
/* RESET FILTER*/
//////////////////
const fnResetFilter = () => {
  const inputTags = document.getElementsByName("txtFilter")

  for(const input of inputTags){
    input.value = ""
  }

  fnRenderList()
}

////////////////
/* INPUT DATA */
////////////////
const fnInputData = () => {
  // Get data from html
  const name = document.getElementById("nameInput").value
  const price = parseInt(document.getElementById("priceInput").value)
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

  console.log(products)
  // Show the list
  fnRenderList()
}

////////////////
/* FILTER NAME */
////////////////
const fnFilterName = () => {
  // Get data from user
  // keyword = 'A'
  const keyword = document.getElementById("nameFilter").value


  // Filtering
  // [{name: "Headphone"}, {name: "Apple"} ]
  const filterResult = products.filter((product) => {
    // product = {name: "Apple"}
    // Turn to lowercase

    // nameLow = 'apple'
    const nameLow = product.name.toLowerCase()

    // keywordLow = 'a'
    const keywordLow = keyword.toLowerCase()

    // true
    return nameLow.includes(keywordLow)
  })

  fnRenderFilter(filterResult)
}

//////////////////
/* FILTER PRICE */
//////////////////
const fnFilterPrice = () => {
  // get min value
  const min = document.getElementById("min").value
  // get max value
  const max = document.getElementById("max").value

  let filterResult = products

  // all text boxes don't empty
  if(!(min == "" || max == "")){
    filterResult = products.filter((product) => {
      const {price} = product
      return price >= min && price <= max
    })
  }


  fnRenderFilter(filterResult)

}

/////////////////////
/* FILTER CATEGORY */
/////////////////////
const fnFilterCategory = () => {
  const selectedCategory = document.getElementById("catFilter").value

  let filterResult = products

  if(selectedCategory != "All"){
    filterResult = products.filter((product) => {
      return product.category == selectedCategory
    })
  }

  fnRenderFilter(filterResult)
}

fnRenderList()
