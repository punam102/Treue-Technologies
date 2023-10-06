function convert() {
  const length = parseFloat(document.getElementById("length").value);
  const unit = document.getElementById("unit").value;
  let convertedLength;

  switch (unit) {
    case "meters":
      convertedLength = length * 100;
      unitText = "Meters";
      break;
    case "centimeters":
      convertedLength = length;
      unitText = "Centimeters";
      break;
    case "kilometers":
      convertedLength = length * 100000;
      unitText = "Kilometers";
      break;
    case "millimeters":
      convertedLength = length * 0.1;
      unitText = "Millimeters";
      break;
    default:
      convertedLength = length;
      unitText = "Unknown Unit";
  }

  document.getElementById(
    "result"
  ).innerText = `Converted Length: ${convertedLength} ${unitText}
  `;
}
