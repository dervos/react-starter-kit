/**
 * Created by dervos on 5-3-16.
 */
import fetch from '../core/fetch';
import * as types from '../constants/config';

function receiveConfig(data) {
  return {
    type: types.SET_CONFIG,
    config: data,
  };
}

function receiveStrings(data) {
  return {
    type: types.SET_STRINGS,
    strings: data,
  };
}

export function fetchConfig() {
  return dispatch => fetch('./config.json')
      .then(response => response.json())
      .then(json => dispatch(receiveConfig(json)));
}

export function fetchStrings(config) {
  return dispatch => fetch('./locales/' + config.locale + '.json')
      .then(response => response.json())
      .then(json => dispatch(receiveStrings(json)));
}
