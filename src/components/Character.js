import React from "react";
import styled from 'styled-components';
// Write your Character component here
export default function Character({ character }) {
    // console.log(props.character, "hello");

    const Container = styled.div`
        margin: 5% auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%; 
    `
    const Boxes = styled.div `
        background-color: black;
        margin-top: 5%;
    `

    const H2 = styled.h2`
        color: white;
    `

    return (
    <Container>
        {character.map((p) => (
            <Boxes>
                <img src={p.image} alt="Rick And Morrty Character" />
                <H2 key={p.id}>{p.name}</H2>
                <H2>{p.status}</H2>
                <H2>{p.gender}</H2>
            </Boxes>
        ))}
        </Container>
    );
}