import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PhotoHelper from '../../helpers/PhotoHelper';
import s from './Gallery.scss';

function Gallery({ photoset }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>tieten</h1>
          {photoset.photo.map(photo => (<img key={photo.id} src={PhotoHelper.imgUrlFromPhoto(photo)} />))};
        <p>...</p>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  title: PropTypes.string,
  photoset: PropTypes.object,
};

export default withStyles(Gallery, s);
