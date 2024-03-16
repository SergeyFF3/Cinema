export const setDataInLocalStorage = <T>(name: string, value: T) => {
  localStorage.setItem(name, JSON.stringify(value));
};
