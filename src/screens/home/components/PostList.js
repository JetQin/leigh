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
                {post.title}
              </Text>
            </View>
            <View style={styles.postCardBottomContainer}>
              <Text style={styles.postContent}>
                {post.content}
              </Text>
              <Text style={styles.postDate} >
                {post.date}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default PostList;
