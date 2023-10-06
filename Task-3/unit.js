function convert() {
  const length = parseFloat(document.getElementById("length").value);
  const unit = document.getElementById("unit").value;
  let convertedLength;

  switch (unit) {
    case "meters":
      convertedLength = length * 100;
      unitText = 'Meters';
      break;
    case "centimeters":
      convertedLength = length;
      break;
    case "kilometers":
      convertedLength = length * 100000;
      break;
    case "millimeters":
      convertedLength = length * 0.1;
      break;
    default:
      convertedLength = length;
  }

  document.getElementById('result').innerText = `Converted Length: ${convertedLength} ${unitText}
  `;
}
