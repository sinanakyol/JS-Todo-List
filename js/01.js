let listDOM = document.querySelector("#list");
let ullength = document.getElementsByTagName("li");
let input = document.querySelector("#input");
let btnDOM = document.querySelector("#btn-add");

//MEVCUT LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI
for (let i = 0; i < ullength.length; i++) {
  let closeBtn = document.createElement("span");
  closeBtn.innerHTML = `<i class="bi bi-x"></i>`;
  closeBtn.classList.add("close");
  closeBtn.onclick = removeButton;
  ullength[i].append(closeBtn);
  ullength[i].onclick = check;
}

btnDOM.addEventListener("click", addElement);

function check() {
  this.classList.toggle("checked");
}

function removeButton() {
  this.parentElement.remove();
}

function addElement() {
  if (input.value) {
    $(".success").toast("show");
    addItem(input.value);
    input.value = "";
  } else {
    //TOAST'ları çalıştırmak için JQUERY kütüphanesi ekledik.
    $(".error").toast("show");
  }
}

const addItem = (value) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = value;
  listDOM.appendChild(liDOM);

  //SONRADAN EKLENEN LİSTEYİ SİLMEK İÇİN
  liDOM.onclick = check;
  let closeBtn = document.createElement("span");
  closeBtn.innerHTML = `<i class="bi bi-x"></i>`;
  closeBtn.classList.add("close");
  closeBtn.onclick = removeButton;

  liDOM.append(closeBtn);
  listDOM.append(liDOM);
};
