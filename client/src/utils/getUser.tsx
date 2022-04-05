import { fetchUser } from "./fetchUser";

export const getUser = async (username: string, cb: Function) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch("http://localhost:5000/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    });
    const responseJson = await response.json();
    if (responseJson[0]) {
      return cb({ username: responseJson[0].username, id: responseJson[0].id });
    }
    fetchUser(username);
  } catch (error) {
    console.error(error);
  }
};
