document.getElementById("one").addEventListener("click", print());
function print() {
  fetch("abc.txt")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch((error) => console.error(error));
}
document.getElementById("two").addEventListener("click", printjson());
function printjson() {
  fetch("file.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}:${post.body}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((error) => console.error(error));
}

function printApi() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}:${post.id}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((error) => console.error(error));
}
