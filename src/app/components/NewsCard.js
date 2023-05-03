import react, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Images from '../../utils/images';

import Realm from 'realm';
import {NewsRealmContext} from '../../data/realm-models';
import {getFullDate} from '../../utils/date';

const {width, height} = Dimensions.get('screen');

function NewsCard({data, isBookmark}) {
  const {useRealm} = NewsRealmContext;
  const realm = useRealm();

  const onBookmarkClicked = () => {
    // console.log('onBookmarkClicked: ', data?.title);
    // console.log('realm ...', realm);

    const {
      author,
      content,
      description,
      publishedAt,
      source,
      title,
      url,
      urlToImage,
    } = data;

    try {
      realm.write(() => {
        realm.create('News', {
          author,
          content,
          description,
          publishedAt,
          source,
          title,
          url,
          urlToImage,
          _id: new Realm.BSON.ObjectId(),
        });
      });

      alert('Added to bookmark!');
    } catch (err) {
      alert('Already added!');
    }

    // const news = realm.objects('News');

    // console.log('News....', news);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.newsTitle}>{data?.title}</Text>
      <Image
        source={{uri: data?.urlToImage}}
        defaultSource={Images.DEFAULT_NEWS}
        style={styles.newsImage}
      />
      <Text>{data?.content}</Text>
      <View style={styles.bottomCard}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.sourceText}>{`Source: ${data?.source?.name}`}</Text>
        <Text>{`Published At: ${getFullDate(data?.publishedAt)}`}</Text>
      </View>
      {isBookmark ? (
        <Pressable onPress={onBookmarkClicked} style={styles.iconButton}>
          <Image source={Images.BOOKMARK_ICON} style={styles.bookmarkIcon} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    zIndex: 1,
    padding: 10,
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  newsImage: {
    marginVertical: 5,
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  bottomCard: {
    width: width - 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    zIndex: 10,
  },
  sourceText: {
    width: width / 2.2,
  },
  iconButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  bookmarkIcon: {
    width: 32,
    height: 32,
  },
});

export default NewsCard;
