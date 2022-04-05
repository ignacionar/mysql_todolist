export const fetchData = async (
  method: string,
  todoText: string | null,
  id: number | null,
  userId: number | null
) => {
  if (method === "POST") {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch("http://localhost:5000/todos", {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todoText: todoText,
          userId: userId
        }),
      });
    } catch (error) {
      console.error(error);
    }
  } else if (method === "DELETE") {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch("http://localhost:5000/todos", {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  } else if (method === "PUT") {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch("http://localhost:5000/todos", {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todoText: todoText,
          id: id,
        }),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }
};
