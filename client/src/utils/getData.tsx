export const getData = async (setState: Function) => {
  try {
    const response = await fetch("http://localhost:5000/todos");
    const responseJson = await response.json();
    console.log(responseJson);
    return setState(responseJson);
  } catch (error) {
    console.error(error);
  }
};
