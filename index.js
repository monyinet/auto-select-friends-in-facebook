let getRawData = document.querySelector('[aria-label^="Invita a tus amigos a indicar que les gusta"]');
let getFriendsList = getRawData.childNodes[2].children[4].childNodes[0].childNodes[0];
let rowHeight = getFriendsList.firstChild.scrollHeight;
let getTotalFriends = parseInt(getElementsByTextIncluded('span', 'No invitados ')[0].innerHTML.split("(")[1]);
let totalHeight = rowHeight * getTotalFriends;

function getElementsByTextIncluded (selector, text) {
  let elements = document.querySelectorAll(selector);
  return Array.prototype.filter.call(elements, (element) => {
    return RegExp(text).test(element.textContent);
  });
};

function scrollToBottom () {
  getFriendsList.scrollIntoView({ block: "end", behavior: "smooth" });
};

function selectAllFriends () {
  getFriendsList.childNodes.forEach(item => {
    item.firstChild.click();
  });
};

function getAllFriends() {
  scrollToBottom();
  console.log(getFriendsList.scrollHeight);
  setTimeout(validateHeight, 2000);  
};

function validateHeight () {
  let actualHeight = getFriendsList.scrollHeight;
  if (actualHeight <= (totalHeight / 2)) {
    setTimeout(getAllFriends, 2000);    
  } else {
    scrollToBottom();
    setTimeout(selectAllFriends, 2000);  
    
  };
};

validateHeight();