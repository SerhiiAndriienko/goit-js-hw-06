const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const imageList = document.querySelector(".gallery");

// const makeImageList = images.map((imageItem) => {
//   const imageMarkup = document.createElement("li");
//   const image = document.createElement("img");
//   imageMarkup.appendChild(image);
//   image.classList.add("image");
//   image.src = imageItem.url;
//   image.alt = imageItem.alt;
//   return imageMarkup;
// });
// imageList.append(...makeImageList);

const makeImageItem = ({ url, alt }) => {
  return `<li><img src=${url} alt=${alt} class = 'image'>
  </li > `;
};
const makeImageList = images.map(makeImageItem).join("");
console.log(makeImageList);
imageList.insertAdjacentHTML("beforeend", makeImageList);
