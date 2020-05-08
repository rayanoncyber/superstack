import React, { useEffect } from 'react';
import styled from 'styled-components';

const CardComponent = (props) => {
    // useEffect();
    return <Card {...props}>
        <Title active={props.active}> {props.title} </Title>
        <Text> {props.description} </Text>
    </Card>
}

const Card = styled.div`
    width:100%;
    min-height:100px;
    padding: 10px;
    box-shadow: 0px 1px 1px rgba(10,10,10,0.1), 0px 1px 2px rgba(10,10,10,0.1), 0px 0px 1px rgba(10,10,10,0.8);
    border-radius: 3px;
    margin-bottom: 12px;
    background: ${props => props.active ? 'white' : 'transparent'};
    cursor: pointer;
`

const Title = styled.h4`
    font-size: 18px;
    font-family: 'RobotoMono';
    margin: 0 0 7px 0;
    color: ${props => props.active ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)' }
`

const Text = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
`

export default CardComponent;