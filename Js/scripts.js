document.addEventListener("DOMContentLoaded", function () {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  if (cpf) {
    cpf.addEventListener("input", function () {
      cpf.value = cpf.value.replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    });
  }

  if (telefone) {
    telefone.addEventListener("input", function () {
      telefone.value = telefone.value.replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .substring(0, 15);
    });
  }

  if (cep) {
    cep.addEventListener("input", function () {
      cep.value = cep.value.replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .substring(0, 9);
    });
  }
});
