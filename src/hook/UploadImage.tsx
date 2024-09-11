import axios from "axios";

export const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);

    const apiKey = "85c8731da646b31b05291de72ca2b2ad";
    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        formData
      );
      return response.data.data.display_url;
    } catch (error) {
      console.error("Image upload failed", error);
      return null;
    }
  };
