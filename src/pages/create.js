import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Editor from '../components/Editor';
import Readme from '../components/Readme';

class CreatePage extends React.Component {
  state={
    loaded: false,
    files: [],
    currentFile: false,
    start: null, 
    end: null
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/deeja/bing-maps-loader/git/trees/master?recursive=1')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        files: data.tree.map((file, i) => {
          return {path: file.path, active: i == 0, url: file.url }
        }),
      })
      this.setTab(data.tree[0])
    })
  }

  setTab(currentFile, start, end) {
    fetch(currentFile.url)
    .then(res => res.json())
    .then(file => {
        this.setState({
            currentFile: {content: atob(file.content), path: currentFile.path},
            files: this.state.files.map((file, i) => {
                return {path: file.path, active: file.path == currentFile.path, url: file.url }
            }),
            start,
            end,
            loaded: true
        })
    })
  }

  openCard(card) {
    // window.scrollY(100);
    const currentFile = this.state.files[1];
    this.setTab(currentFile, 5, 10);
  }

  render() {
    const { files, currentFile, start, end } = this.state;
    return <Layout>
      <SEO title="Home" />
      {!this.state.loaded ? <h1> Loading </h1> : 
        <Grid>
          <Readme openCard={(card) => this.openCard(card)} style={{flex: 2}} />
          <Editor setTab={(file) => this.setTab(file)} start={start} end={end} files={files} currentFile={currentFile} style={{flex: 3}} />
        </Grid>
      }
    </Layout>
  }
}

const Grid = styled.div`
  display: flex;
  width: 100%;
`

export default CreatePage
