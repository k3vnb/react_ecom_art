import React, { Component } from 'react'
import { Container, Box, Heading, Card, Image } from 'gestalt'
import Strapi from 'strapi-sdk-javascript/build/main'
import './App.css'

const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    prints: []
  }

  async componentDidMount(){
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            prints {
              _id
              name
              description
              createdAt
              image {
                url
                name
              }
            }
          }`
        }
      });
      // console.log(response);
      this.setState({ prints: response })
    } catch (err){
      console.log(err);
    }
  }


  render(){
    const { prints } = this.state;

    return (
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          marginBottom={2}
          marginTop={12}
        >
        {/* Prints Header */}
        <Heading color="midnight" size="md" >
          Pop Art, Creative Coding, <br />& Random Visualizations
        </Heading>
        </Box>
        <Box>
          {prints.map(print => (
            <Box
              key={print._id}
            >
              <Card 
                image={
                  <Box>
                    <Image 
                      src={`${apiUrl}${print.image.url}`}
                    />
                  </Box>
                }
              > 

              </Card>
            </Box>
          ) )}
        </Box>
      </Container>
    );
  }
}

export default App;