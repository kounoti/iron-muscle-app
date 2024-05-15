export function ConvertToNum(text: any) {
  const IsNum = isNaN(text);
  if (IsNum) {
    return 0;
  } else {
    return Number(text);
  }
}
