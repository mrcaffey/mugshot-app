import React from 'react';
import {
  Container,
  Grid,
  Card,
  Sticky,
  Icon,
  Segment,
  Feed,
  Divider,
} from 'semantic-ui-react';
import axios from 'axios';
import FeedPost from './FeedPost';

class Post extends React.Component {

  state = {
    posts: [],
    users: [],
  }

  componentDidMount() {
    axios.get('/api/posts/')
      .then( ({ data: posts }) => this.setState({ posts }) )
  }


  newPost = (post) => {
    this.setState({
      posts: [post, ...this.state.posts]
    })
  }

  addLike = (post, likes) => {
    const like = likes + 1;
    axios.put(`/api/posts/${post}`, {
      likes: like
    })
    .then(response => {
      console.log(response);
      this.forceUpdate()
      this.setState({ state: this.state })
    })
    .catch(error => {
      console.log(error);
    })    
  }

  addDislike = (post, dislikes) => {
    const dislike = dislikes + 1;
    axios.put(`/api/posts/${post}`, {
      dislikes: dislike
    })
    .then(response => {
      console.log(response);
      this.forceUpdate()
      this.setState({ state: this.state })
    })
    .catch(error => {
      console.log(error);
    })    
  }

//   displayUser = () => {
//     let user = {}
//     return this.state.posts.map(post => {
//       axios.get(`api/users/${post.user_id}`)
//         .then(res => user = res)
//         return (
//           <p>{user.name}</p>
//         )
//   }
// }

  displayPosts = () => {
    return this.state.posts.map(post => {
        return(
        <Segment>
             <Feed.Event>
              <Feed.Label/>
              <Feed.Content>
                <Feed.Summary>
                  {/* {this.displayUser()} */}
                </Feed.Summary>
                <Feed.Extra text>
                  {post.body}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='thumbs up' onClick={() => this.addLike(post.id, post.likes)} />                     
                    {post.likes}
                  </Feed.Like>
                  <Feed.Like>
                    <Icon name='thumbs down' onClick={() => this.addDislike(post.id, post.dislikes)}/>
                    {post.dislikes}
                  </Feed.Like>
                  </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
        </Segment>
        )
      })
  }

  render() {
    return (
      <Container>
        <Divider/>
        <Grid columns='equal'>
          <Grid.Column>
          <Sticky>
            <Card>
              <Card.Content>
                <Card.Header>Should be current user here</Card.Header>
                <Card.Description>User</Card.Description>
              </Card.Content>
              <Card.Content extra>
              </Card.Content>
            </Card>
          </Sticky>
          </Grid.Column>
          <Grid.Column width={8}>
            <Grid.Row>
              <FeedPost newPost={this.newPost}/>
            </Grid.Row>
            <Feed>
              {this.displayPosts()}
            </Feed>
          </Grid.Column>
          <Grid.Column>
            <Segment>3</Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Post;
