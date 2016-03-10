const PhotoHelper = {
  imgUrlFromPhoto: (photo) =>
    `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`,
};

export default PhotoHelper;
