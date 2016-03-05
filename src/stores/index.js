/**
 * Created by dervos on 4-3-16.
 */

import { createStore } from 'redux';
import { rootReducer } from '../reducers';

export const store = createStore(rootReducer);
