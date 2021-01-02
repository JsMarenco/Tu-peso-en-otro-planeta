document.querySelector(".planets__btn-form").addEventListener("click", pesoplaneta)

function msj(texto, ico) {
  Swal.fire({
    icon: `${ico}`,
    text: `${texto}`,
    background: "rgba(255, 255, 255, 0.9)",
    showConfirmButton: true,
    timer: 5000
  })
}

function pesoplaneta() {
  let peso = parseFloat(document.querySelector(".planets__peso").value);
  let planet = document.querySelector(".planets__op").value.toLowerCase().trim()

  const tierra = 9.8;
  let mercurio = 3.7;
  let venus = 8.87;
  let marte = 3.711;
  let jupiter = 24.79;
  let saturno = 10.44;
  let neptuno = 11.15;
  let urano = 8.87;
  let pluton = 0.62;
  let pesoFinal = 0;

  if (peso < 0) {
    msj("No puedes incluir números negativos", "error");
    return false
  }
  if (peso == 0) {
    msj("No puedes pesar 0 kilos", "error");
    return false
  }
  if (planet == "") {
    msj("Ups debes elegir un planeta", "error");
    return false;
  }
  if (peso.length > 3 ) {
    msj("Ese no es un peso válido", "error");
    return false
  }

  switch (planet) {
    case "mercurio":
      pesoFinal = Math.round(peso * mercurio / tierra, 1);
      msj(`Tu peso en Mercurio es de ${pesoFinal} kilos`, "success");
      break;
    case "venus":
      pesoFinal = Math.round(peso * venus / tierra, 1);
      msj(`Tu peso en Venus es de ${pesoFinal} kilos`, "success");
      break;
    case "marte":
      pesoFinal = Math.round(peso * marte / tierra, 1);
      msj(`Tu peso en Marte es de ${pesoFinal} kilos`, "success");
      break;
    case "jupiter" || "júpiter":
      pesoFinal = Math.round(peso * jupiter / tierra, 1);
      msj(`Tu peso en Júpiter es de ${pesoFinal} kilos`, "success");
      break;
    case "saturno":
      pesoFinal = Math.round(peso * saturno / tierra, 1);
      msj(`Tu peso en Saturno es de ${pesoFinal} kilos`, "success");
      break;
    case "urano":
      pesoFinal = Math.round(peso * urano / tierra, 1);
      msj(`Tu peso en Urano es de ${pesoFinal} kilos`, "success");
      break;
    case "neptuno":
      pesoFinal = Math.round(peso * neptuno / tierra, 1);
      msj(`Tu peso en Neptuno es de ${pesoFinal} kilos`, "success");
      break;
    case "pluton" || "plutón":
      pesoFinal = Math.round(peso * pluton / tierra, 1);
      msj(`Tu peso en Plutón es de ${pesoFinal} kilos`, "success");
      break;
    default:
      msj("Ese no es un planeta", "error");
  }
}