const form = document.getElementById("form");
form.addEventListener("submit", (e) => submit(e));

const submit = (e) => {
  e.preventDefault();
  for (const iterator of e.target) {
    if (iterator.id != "btSubmit")
      localStorage.setItem(iterator.id, iterator.value);
  }
  window.location.href = "./history.html";
};
