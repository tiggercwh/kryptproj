import { useEffect, useState } from "react";

const useFetch = (keyword) => {
  const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API;
  console.log(process.env);
  const [gifUrl, setGifUrl] = useState("");
  const fetchGifs = async () => {
    try {
      console.log(keyword.split(" ").join(""));
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      setGifUrl(
        "https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif"
      );
    }
  };

  useEffect(() => {
    if (keyword) {
      console.log(process.env.NEXT_PUBLIC_GIPHY_API);
      fetchGifs();
    }
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
