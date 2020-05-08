import React from 'react';
import styled from 'styled-components';

import Card from './Card';

class Readme extends React.Component {
    state = {
        cards: [
            {title: 'Create index layout with components', file: 'index.js', start: '4', end: '10', description: 'One of the most important things about Firebase is that you absolutely need to import config from its console or it wont work at all', active: false},
            {title: 'Set up some shared action to re render readme and editor', description: 'Add the credentials received in Firebase portal', active: false},
            {title: 'Set up Editor with Prismjs', description: 'Add the credentials received in Firebase portal', active: false},
            {title: 'Connect firebase config', description: 'Add the credentials received in Firebase portal', active: false}
        ]
    }

    toggleCard(index) {
        let newCards = this.state.cards;
        newCards[index].active = !newCards[index].active;
        this.setState({
            cards: newCards
        })
    }

    render() {
        return <Container style={this.props.style}>
            <Title> How I programmed all this.</Title>
            <Description>
                {this.state.cards.map((card, i) => <Card key={i} onClick={(card) => this.props.openCard(card)} onMouseEnter={() => this.toggleCard(i)} onMouseLeave={() => this.toggleCard(i)} {...card} /> )}
            </Description>
        </Container>
    }
}

const Container = styled.div`
    padding: 20px;
    max-height: 100vh;
`

const Title = styled.h1`
    font-family: 'RobotoMono';
`

const Description = styled.div`
    // max-height: 100vh;
    // overflow-x: scroll;
`


export default Readme;