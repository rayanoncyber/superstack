import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Prism from 'prismjs';
import './prism.css'
import './editor.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'


class Editor extends React.Component {
    state = {
        currentFile: {},
        tabs: [],
        content:  ``
    }

    componentDidMount() {
        Prism.highlightAll();
    }
    
    componentDidUpdate() {
        document.getElementById('code').innerHTML = this.props.currentFile.content;
        Prism.highlightAll();
        document.getElementById('pre').scrollTop = this.props.start*15;
        // highlight right thing, jump to
    }

    render() {
        const { files, currentFile } = this.props;
        // if (this.state.currentFile.path && this.state.currentFile.path != this.props.currentFile.path) this.setTab(this.props.currentFile);
        return <Container {...this.props}>
            <Bar>
                <Dots>
                    <Dot />
                    <Dot />
                    <Dot />
                </Dots> 
                {files.map((tab, i) => 
                <Tab key={i} onClick={() => this.props.setTab(tab)} active={tab.active}>
                    <Label> {tab.path}</Label>
                </Tab>)}
                <Tab>
                    <Label> add </Label>
                </Tab>
            </Bar>
            <Body>
                <pre id="pre" data-line={`${this.props.start}-${this.props.end}`} className="line-numbers">
                    <code id="code" className="language-javascript"> { currentFile.content } </code>
                </pre>
            </Body>
        </Container> 
    }
}

const Container = styled.div`
    display: block;
    border-radius: 10px 10px 0 0;
    background: #0d0d0d;
    max-height: 95vh;
    max-width: 60vw;
    font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New;
`

const Bar = styled.div`
    width: 100%;
    display: flex;
    background: #212121;
    font-size: 15px;
    padding: 4px 0 0 0;
    border-radius: 10px 10px 0 0;
`

const Tab = styled.div`
    flex: 1;
    max-width: 120px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    background: ${props => props.active ? '#0d0d0d' : '#212121'}
`

const Label = styled.span`
    color: white;
    text-align: center;
`

const Body = styled.code`
    width: 100%;
    overflow: scroll;
    background: #0d0d0d;
`

const Dots = styled.div`
    display: inline-block;
    margin: auto 10px;
    padding: 10px 20px 0 0;
    height: 100%;
`

const Dot = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.5);
    margin-left: 5px;
`

export default Editor;