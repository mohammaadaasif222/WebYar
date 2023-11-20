import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/image/get");
      const data = await res.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };
  // console.log(images);
  useEffect(() => {
    if (!currentUser) {
      navigate("/sign-in");
    }
    fetchImages();
  }, [navigate]);
  const imageItem = images.slice(1,images.length).map((image) => {
    return (
      <div key={image.url}>
        <img
          class="w-full h-full rounded-lg"
          src={image.url}
          alt=""
        />
      </div>
    );
  });
  return (
    <div class="grid gap-4 py-10 px-5">
      <div className="flex">
        <img
          class="h-auto max-w-full rounded-lg m-auto"
          src={images[0].url}
          alt=""
        />
      </div>
      <div class="grid grid-cols-5 gap-2">
        {imageItem}
      </div>
    </div>
  );
};

export default Gallery;
