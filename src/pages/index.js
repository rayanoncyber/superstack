import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Editor from '../components/Editor';
import Readme from '../components/Readme';

class IndexPage extends React.Component {
  state={
    loaded: true,
    files: [],
    currentFile: false
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/deeja/bing-maps-loader/git/trees/master?recursive=1')
    .then(res => res.json())
    .then(data => {
      console.log(data)

      this.setState({
        loaded: true
      })
    })
  }

  render() {
    return <Layout>
      <SEO title="Home" />
      {!this.state.loaded ? <h1> Loading </h1> : 
        <Grid>
          <Readme style={{flex: 2}}>

          </Readme>
          <Editor style={{flex: 3}} />
        </Grid>
      }
    </Layout>
  }
}

const Grid = styled.div`
  display: flex;
  width: 100%;
`

export default IndexPage
