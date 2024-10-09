import React from "react";
import { useSelector } from "react-redux";

function ImageSearch() {
  const images = useSelector((state) => state.images);

  return (
    <div className="image-search">
      <h2>Tìm kiếm hình ảnh</h2>
      <input type="text" placeholder="Tìm kiếm hình ảnh" />
      <button>Tìm</button>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image} alt="Search result" />
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default ImageSearch;
