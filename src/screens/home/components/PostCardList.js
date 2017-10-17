import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Card, CardItem, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './styles/PostCardList';

export default class PostCardList extends React.Component {
  static defaultProps ={
    posts: [],
  }

  render() {
    // for (let index = 0; index < this.props.posts.length; index++) {
    //   const post = this.props.posts[index];
    //   return (<Text> {post.id} </Text>);
    // }
    // console.log("[posts length]"+this.props.posts.length);

    // const listItems = this.props.posts.map((post) =>
    //   <Text>{post.id}</Text>
    // );
    return (<View><Text>Hello</Text></View>);
  }
}

// const PostCardList = ({ posts }) => (

//   <Container>
//     <Content>
//       <Card style={styles.root}>
//         <CardItem header style={styles.header}>
//           <Left>
//             <Body>
//               <Text>NativeBase</Text>
//               <Text note>GeekyAnts</Text>
//             </Body>
//           </Left>
//         </CardItem>
//         <CardItem cardBody style={styles.body}>
//           <Text>Want to have something more with Card Lists?
// Include image with CardItem within Card along with some text before and after image to create a card with lists.
// Here is your Card Image ready !</Text>
//         </CardItem>
//         <CardItem footer style={styles.footer}>
//           <Left>
//             <Button transparent>
//               <Icon active name="thumbs-up" />
//               <Text>12 Likes</Text>
//             </Button>
//             <Button transparent>
//               <Icon active name="chatbubbles" />
//               <Text>1 Comments</Text>
//             </Button>
//           </Left>
//           <Right>
//             <Text>11h ago</Text>
//           </Right>
//         </CardItem>
//       </Card>
//     </Content>
//   </Container>
// );
// export default PostCardList;
