const url = "./abc.json"; //https://dummyjson.com/products

async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);
}
getapi(url);

function show(data){
    let x = 
    `
    <tr>
    <th>ID</th>
    <th>Image</th>
    <th>Description</th>
    <th>Brand</th>
    <th>Price</th>
    
    </tr>
    `;

    for(let i of data.products){
        x+=  `<tr>
        <td>${i.id}</td>
        <td><img src="${i.images[0]}"></td>
        <td>${i.description}</td>
        <td>${i.brand}</td>
        <td>${i.price}</td>
        </tr>`;
    }

    document.getElementById("phone").innerHTML = x;
}