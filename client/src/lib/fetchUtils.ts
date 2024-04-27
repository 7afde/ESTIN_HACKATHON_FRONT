// fetchUtils.ts

import axios from "axios";

const posttrash = async (data: any) => {
  try {
    const response = await axios.post(
      "http://172.20.10.2:8080/postTrach",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting trash:", error);
    throw error;
  }
};

export { posttrash };
