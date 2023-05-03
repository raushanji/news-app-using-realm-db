import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {NewsRealmContext} from '../../data/realm-models';
import NewsCard from '../components/NewsCard';

function Bookmark() {
  const [newsData, setNewsData] = useState([]);
  const {useQuery} = NewsRealmContext;
  const news = useQuery('News');

  useEffect(() => {
    setNewsData(news);
  }, []);

  const renderRowItem = ({item, index}) => {
    return <NewsCard data={item} isBookmark={false} />;
  };

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  const renderEmptyComponent = () => {
    return (
      <Text style={styles.emptyText}>
        {'No news has been added to your bookmark!'}
      </Text>
    );
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={newsData}
        renderItem={renderRowItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderItemSeparator}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSeparator: {
    height: 10,
  },
  emptyText: {
    margin: 20,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Bookmark;
