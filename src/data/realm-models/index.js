import {createRealmContext} from '@realm/react';
import {News} from './News';

export const NewsRealmContext = createRealmContext({
  schema: [News],
});
