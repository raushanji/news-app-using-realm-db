import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import NewsCard from '../components/NewsCard';
import {getApiCall} from '../../services/ApiCall';
import {TOP_HEADLINES} from '../../services/ApiEndpoint';

const Headline = props => {
  const [headlines, setHeadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const pageSize = 5;

  const getHeadlines = async page => {
    let url = TOP_HEADLINES + `&pageSize=${pageSize}&page=${page}`;
    let data = await getApiCall(url);
    if (page > 1) {
      setHeadlines(previousValue => [...previousValue, ...data]);
    } else {
      setHeadlines(data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getHeadlines(1);
  }, []);

  const onRefreshCall = () => {
    setIsLoading(true);
    setPageNo(1);
    getHeadlines(1);
  };

  const onLoadMore = () => {
    let newPage = pageNo + 1;
    setIsLoading(true);
    getHeadlines(newPage);
    setPageNo(newPage);
  };

  const renderRowItem = ({item, index}) => {
    return <NewsCard data={item} isBookmark={true} />;
  };

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  const renderEmptyComponent = () => {
    return <Text style={styles.emptyText}>{'Wait news is loading...'}</Text>;
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={headlines}
        renderItem={renderRowItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderItemSeparator}
        onRefresh={onRefreshCall}
        refreshing={isLoading}
        onEndReached={onLoadMore}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
};

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

export default Headline;
