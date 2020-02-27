import React from 'react';
import {useSelector} from 'react-redux';
import styled from "styled-components";

const colors = {
  bug: {
    background: "linear-gradient(#a8b820, #8d9a1b)",
    border: "#616B13"
  },
  dark: {
    background: "linear-gradient(#705848, #513f34)",
    border: "#362A23"
  },
  dragon: {
    background: "linear-gradient(#7038f8, #4c08ef)",
    border: "#3D07C0"
  },
  electric: {
    background: "linear-gradient(#f8d030, #f0c108)",
    border: "#C19B07"
  },
  fairy: {
    background: "linear-gradient(#F98CFF, #F540FF)",
    border: "#C1079B"
  },
  fighting: {
    background: "linear-gradient(#c03028, #9d2721)",
    border: "#82211B"
  },
  fire: {
    background: "linear-gradient(#f08030, #dd6610)",
    border: "#B4530D"
  },
  flying: {
    background: "linear-gradient(#a890f0, #9180c4)",
    border: "#7762B6;"
  },
  ghost: {
    background: "linear-gradient(#705898, #554374)",
    border: "#413359"
  },
  grass: {
    background: "linear-gradient(#78c850, #5ca935)",
    border: "#4A892B"
  },
  ground: {
    background: "linear-gradient(#e0c068, #d4a82f)",
    border: "#AA8623"
  },
  ice: {
    background: "linear-gradient(#98d8d8, #69c6c6)",
    border: "#45B6B6"
  },
  normal: {
    background: "linear-gradient(#a8a878, #8a8a59)",
    border: "#79794E"
  },
  poison: {
    background: "linear-gradient(#a040a0, #803380)",
    border: "#662966"
  },
  psychic: {
    background: "linear-gradient(#f85888, #f61c5d)",
    border: "#D60945"
  },
  rock: {
    background: "linear-gradient(#b8a038, #93802d)",
    border: "#746523"
  },
  steel: {
    background: "linear-gradient(#b8b8d0, #9797ba)",
    border: "#7A7AA7"
  },
  water: {
    background: "linear-gradient(#6890f0, #386ceb)",
    border: "#1753E3"
  }
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Image = styled.img`
  display: flex;
  align-items: stretch;
  width: 150px;
  height: 150px;
  border: 2px solid #999;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 2px 2px 3px #ccc;
`;

const Type = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  text-shadow: 1px 1px 1px #333;
  width: 5em;
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: border-box;
  border-color: ${({type}) => (colors[type]["border"])};
  background: ${({type}) => (colors[type]["background"])};
  color: white;
  
  :not(:only-child):not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  :not(:only-child):not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

function Pokemon() {
  const [data, isLoading, error] = useSelector(({data, isLoading, error}) => [data, isLoading, error]);

  if (isLoading) return <Container>Loading...</Container>;
  console.log(error);
  if (error) return <Container>Invalid Pokemon</Container>;
  if (Object.entries(data).length === 0) return <Container>Input Pokemon</Container>;

  const {name, sprites: {front_default}, abilities, types, stats} = data;
  return (
    <Container>
      <Image src={front_default} alt={`${name} sprint`} />
      <div>
        <h3>Abilities</h3>
        <div>
          {abilities.reverse().map(({ability: {name}}) => <p key={name}>{name}</p>)}
        </div>
      </div>
      <div>
        <h3>Type</h3>
        <div>
          {types.reverse().map(({type: {name}}) => <Type key={name} type={name}>{name}</Type>)}
        </div>
      </div>
      <div>
        <h3>Stats</h3>
        <div>
          {stats.reverse().map(({base_stat, stat: {name}}) => <p key={name}>{name}: {base_stat}</p>)}
        </div>
      </div>
    </Container>
  );
}

export default Pokemon;
