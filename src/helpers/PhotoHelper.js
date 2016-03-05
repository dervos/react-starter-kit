const PhotoHelper = {
  imgUrlFromPhoto: (photo, size) =>
    `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`,
};

export default PhotoHelper;
