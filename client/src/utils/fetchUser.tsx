export const fetchUser = async (
  username: string
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch("http://localhost:5000/users", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    });
    const responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error);
  }
};
