/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
/* jscs:disable maximumLineLength */

export const port = process.env.PORT || 5000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const analytics = {

  // https://analytics.google.com/
  google: { trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X' },

};

export const auth = {

  flickr: {
    api_key: process.env.flickr_api_key || 'af4d24cd27e197422dfacb2d7f318ffb',
    secret: process.env.flickr_secret || 'bc51224771c35897',
    user_id: process.env.flickr_user_id || '42020927@N04',
  },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.facebook_id || '183246425378777',
    secret: process.env.facebook_secret || 'cb2b201f0249d15454221cbf00d6ff99',
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
  },

};
