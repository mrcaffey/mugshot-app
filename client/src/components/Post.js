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
    posts: []
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then( ({ data: posts }) => this.setState({ posts }) )
  }

  newPost = (post) => {
    this.setState({
      posts: [post, ...this.state.posts]
    })
  }

  displayPosts = () => {
    const user = {}
    return this.state.posts.map(post => {
        axios.get(`api/user/${post.user_id}`)
          .then(res => user = res)
        return(
        <Segment>
             <Feed.Event>
              <Feed.Label image='/images/avatar/small/joe.jpg' />
              <Feed.Content>
                <Feed.Summary>
                  <a>Should be user making post here</a> posted on his page
                </Feed.Summary>
                <Feed.Extra text>
                  {post.body}
                </Feed.Extra>
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
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
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
