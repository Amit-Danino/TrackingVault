import { loggedInUser } from "./UserPersist";
const fetchStats = async (data) => {
  const { url, method, headers = null, body } = data;
  try {
    const response = await fetch(`http://localhost:5000/api/stats/${url}`, {
      method: method,
      headers: headers
        ? headers
        : {
            "Content-Type": "application/json",
          },
      body: method !== "GET" ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch stats");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
};

const addStats = async (data) => {
  try {
    const user = await loggedInUser();
    const userId = user.decodedToken.id;
    const statsDataToAdd = { userId, data }; // userid: ???, data: [name, datatype]
    const fields = await fetchStats({
      url: "addStats",
      method: "POST",
      body: statsDataToAdd,
    });
    console.log("added stats successfully to userid ", userId);
    return fields;
  } catch (error) {
    console.log("error:", error);
  }
};

const getStats = async () => {
  try {
    const user = await loggedInUser();
    const userId = user.decodedToken.id;
    const stats = await fetchStats({
      url: "getStats",
      headers: {
        userid: `${userId}`,
      },
      method: "GET",
    });
    console.log("stats returned successfully from userId: ", userId);
    return stats.fields;
  } catch (error) {
    console.log("error:", error);
  }
};

export { addStats, getStats };
