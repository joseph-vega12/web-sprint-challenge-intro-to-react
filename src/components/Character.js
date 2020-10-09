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
    const Boxes = styled.div`
        background-color: black;
        margin-bottom: 5%;
        animation: wiggle 2.5s infinite ease-in-out;
        @keyframes wiggle {
        0% { transform: rotate(0deg); }
        80% { transform: rotate(0deg); }
        85% { transform: rotate(5deg); }
        95% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
}
    `

    const H2 = styled.h2`
        color: white;
    `

    return (
        <Container>
            {character.map((p) => (
                <Boxes key={p.id}>
                    <img src={p.image} alt="Rick And Morrty Character" />
                    <H2>{p.name}</H2>
                    <H2>{p.status}</H2>
                    <H2>{p.gender}</H2>
                </Boxes>
            ))}
        </Container>
    );
}