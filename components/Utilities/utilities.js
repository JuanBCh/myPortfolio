export function SaveOnLS(sgName, sgData) {
  const old = JSON.parse(localStorage.getItem(sgName));
  const newOne = JSON.stringify([sgData]);

  console.log(old);

  if (!old) {
    localStorage.setItem(sgName, newOne);
  } else localStorage.setItem(old.length, JSON.stringify(old.push(sgData)));
  return;
}
