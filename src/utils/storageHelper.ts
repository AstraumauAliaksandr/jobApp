const storageHelper = (id: number) => {
  const stringId = id.toString();
  if (localStorage.getItem("ids") === null) {
    localStorage.setItem("ids", JSON.stringify([]));
  }
  let storage: Array<string> = JSON.parse(localStorage.getItem("ids")!);

  if (storage.indexOf(stringId) !== -1) {
    storage = storage.filter((item) => item !== stringId);
  } else {
    storage.push(stringId);
  }

  localStorage.setItem("ids", JSON.stringify(storage));
};

export default storageHelper;
