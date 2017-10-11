import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/PostList';

const PostList = ({ posts }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Post List</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        { posts.map((post,i) => (
          <View key={i} style={styles.postCard}>
            <View style={styles.postCardTopContainer}>
              <Text style={styles.postName}>
                {post.postName}
              </Text>
            </View>
            <View style={styles.postCardBottomContainer}>
              <Text style={styles.postContent}>
                {post.postContent}
              </Text>
              <Text style={styles.postDate} >
                Mar 2m 6:00pm
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default PostList;
