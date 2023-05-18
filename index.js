const bookmarkList = [];

const inputSection = document.getElementById(`#inputFields`);

const addButton = document.querySelector(`.addBm`);

const delButton = document.querySelector(`.delBm`);
const bookmarkName = document.querySelector(".bookmarkName");
const linkInput = document.querySelector(".linkInput");
const ul = document.querySelector(`.bmList`);
let selectedBookmarkIndex = null;

addButton.addEventListener(`click`, () => {
  const book = bookmarkName.value;
  const link = linkInput.value;
  const listItem = document.createElement(`li`);
  if (book === null || link === null){
    return;
  }else{
  listItem.textContent = book
  bookmarkList.push({book, link});
  ul.append(listItem);
  }
  // addBookmark({ name: bookmarkName, url: linkInput });
  // renderAllBookmarks(bookmarkList);
  console.log(bookmarkList)
})

// delButton.addEventListener(`click`, () => {
//   if()
//   selectedBookmarkIndex 
// })
