import React from "react";

function ThumbnailList({ thumbnails, onSelect }) {
  function selectThumbnail(thumbnailIdx) {
    onSelect(thumbnailIdx);
  }

  return (
    <ul className="m-4 grid grid-cols-8 gap-2">
      {thumbnails.map((thumbnail, idx) => (
        <li onClick={() => selectThumbnail(idx)} key={thumbnail.id}>
          <img alt={thumbnail.title} src={thumbnail.images.fixed_height.url} />
        </li>
      ))}
    </ul>
  );
}

export default ThumbnailList;
