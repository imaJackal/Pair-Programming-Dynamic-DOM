const bookmarkList = [];

const inputSection = document.querySelector(`#inputFields`);
const addButton = document.querySelector(`#addBM`);
const delButton = document.querySelector(`#delBM`);
const li = document.querySelector(`bmList`);
let selectedBookmarkIndex = null;

addButton.addEventListener(`click`, () => {
  const bookmarkName = inputSection.querySelector("#bookmarkName").value;
  const linkInput = inputSection.querySelector("#linkInput").value;
  bookmarkList.push(bookmarkName, linkInput);
  li.innerHTML = bookmarkList;
  // addBookmark({ name: bookmarkName, url: linkInput });
  // renderAllBookmarks(bookmarkList);
  console.log(li)
})

// delButton.addEventListener(`click`, () => {
//   if()
//   selectedBookmarkIndex 
// })
