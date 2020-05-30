// javscript http request
"use strict";
const ajax = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";

ajax.open("GET", url, true);

ajax.onreadystatechange = function (e) {
  console.log(ajax.readyState);
  if (ajax.readyState === 4) {
    switch (ajax.status) {
      // Successful responses
      case 200:
        console.log;
        "OK, the request has been successfully completed", ajax.status;
        shoDetails(ajax.responseText);
        break;
      case 201:
        console.log;
        "Created, the request has succeeded and a new resource has been created",
          ajax.status;
        break;
      // Redirection messages
      case 300:
        console.log;
        "Multiple Choice, This request has more than one possible response.",
          ajax.status;
        break;
      case 302:
        console.log;
        "Found, The response code means that the URI of requested resource has been changed temporarily.",
          ajax.status;
        break;
      case 304:
        console.log;
        "Not modified, This is used for caching purposes.", ajax.status;
        break;

      //Client error responses
      case 400:
        console.log;
        "Bad request, the server could not understand the request due to invalid syntax.",
          ajax.status;
        break;
      case 401:
        console.log;
        "Unauthorized, Although the HTTP standard specifies 'unauthorized'.",
          ajax.status;
        break;
      case 403:
        console.log;
        "Forbidden, the client does not have access rights to the content;",
          ajax.status;
        break;
      case 404:
        console.log;
        "Not found, the server can not find the requested resource",
          ajax.status;
        break;
      // Server error responses
      case 500:
        console.log;
        "Server error request, the server has encountered a situation it doesn't know how to handle.",
          ajax.status;
        break;
      default:
        console.log;
        "Check some more: ", ajax.status, ajax.status;
    }
  }
};

ajax.onerror = function (error) {
  console.log(error);
};

ajax.send(null);

//Show data
function shoDetails(user) {
  const data = JSON.parse(user);
  const main = document.querySelector("container");
  data.forEach((item) => {
    let p = document.createElement("p");
    p.innerHTML = `
   <span> ${item.email} </span>

     <span>${item.name} </span>`;
    main.appendChild(p);
  });
}
