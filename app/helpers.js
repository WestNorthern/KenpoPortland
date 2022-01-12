import colors from "./config/colors";

export function beltToColor(belt) {
  let color = colors.white;
  switch(belt) {
    case "Yellow":
      color = colors.yellowBelt;
      break;
    case "Orange":
      color = colors.orangeBelt;
      break;
    case "Purple":
      color = colors.purpleBelt;
      break;
    case "Blue":
      color = colors.blueBelt;
      break;
    case "Green":
      color = colors.greenBelt;
      break;
    case "3rd Brown":
      color = colors.brownThreeBelt;
      break;
    case "2nd Brown":
      color = colors.brownTwoBelt;
      break;
    case "1st Brown":
      color = colors.brownOneBelt;
      break;
    default:
      color = colors.white;
  }
  return color;
}