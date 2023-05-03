import {Realm} from '@realm/react';
export class News extends Realm.Object {
  static schema = {
    name: 'News',
    properties: {
      _id: 'objectId',
      author: {type: 'string', optional: true},
      content: {type: 'string', optional: true},
      description: {type: 'string', optional: true},
      publishedAt: 'string',
      source: '{}',
      title: {type: 'string', optional: true},
      url: 'string',
      urlToImage: {type: 'string', optional: true},
    },
    primaryKey: 'publishedAt',
  };
}
