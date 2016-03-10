import React from 'react';
import fetch from '../../core/fetch';
import Gallery from './Gallery';

export const path = '/gallery';

export const action = async (state) => {
  const title = 'Gallery';
  state.context.onSetTitle(title);

  const url = 'http://localhost:3001/services/rest/?method=flickr.photosets.getPhotos&api_key=48c548e1e49409599d8077ceae200efb&photoset_id=72157665265633261&user_id=42020927%40N04&format=json&nojsoncallback=1';
  const url2 = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=48c548e1e49409599d8077ceae200efb&photoset_id=72157665265633261&user_id=42020927%40N04&format=json&nojsoncallback=1&auth_token=72157665520385175-c4d28777a547053c&api_sig=db927a63328eef7fe7bf078f1767f845';
  const response = await fetch(url, {
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  });
  const { data } = await response.json();

  console.log(data);
  return <Gallery photoset={data.photoset} />;
};
