export const getData = async (setState: Function, userId: any) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch("http://localhost:5000/user-todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    });
    const responseJson = await response.json();
    return setState(responseJson);
  } catch (error) {
    console.error(error);
  }
};
