import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Gallery.scss';

function Gallery({ title, photos }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        {photos.map}
        <p>...</p>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.string,
};

export default withStyles(Gallery, s);
