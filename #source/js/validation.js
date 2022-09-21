const mainForm = document.forms.subscribe;
const mainFormInput = mainForm.nameInput;
const mainFormInputPlaceholder = mainFormInput.placeholder;
const searchForm = document.forms.search;
const searchFormInput = searchForm.searchInput;
const searchFormInputPlaceholder = searchFormInput.placeholder;
const buttonSubscribe = document.querySelector(".email__button");
const buttonSearch = document.querySelector(".form-body-main__btn");

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

mainFormInput.addEventListener("focus", function (e) {
  mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
  mainFormInput.placeholder = mainFormInputPlaceholder;
});

mainFormInput.addEventListener("focus", function (e) {
  searchFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
  searchFormInput.placeholder = searchFormInputPlaceholder;
});

buttonSubscribe.addEventListener("click", function (event) {
  event.preventDefault();
});

buttonSearch.addEventListener("click", function (event) {
  event.preventDefault();
});
