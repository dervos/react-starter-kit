import React from 'react';
import Gallery from './Gallery';

export const path = '/gallery';
export const action = async (state) => {
  const title = 'Gallery';
  const photos = '';
  state.context.onSetTitle(title);
  return <Gallery photos={photos} title={title} />;
};
