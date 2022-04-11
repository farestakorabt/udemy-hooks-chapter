import React, { useState, useEffect } from "react";

export default function UseCatImg() {
  const [dataImg, setDataImg] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();

      setDataImg(data[0].url);
    };

    fetchData();
  }, []);

  return dataImg;
}
