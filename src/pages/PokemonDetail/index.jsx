import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PokeAboutTab, PokeStatsTab, PokeTypeTag } from "../../components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IconContext } from "react-icons";
import {
  Container,
  Detail,
  DetailPage,
  Header,
  PokemonID,
  PokemonImage,
  PokemonName,
  Preview,
} from "./PokemonDetail.style";

const PokemonDetail = ({ match }) => {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [pokemonSpecies, setPokemonSpecies] = useState({});
  const [evolutionData, setEvolutionData] = useState({});
  const [nextEvolution, setNextEvolution] = useState({});

  async function getPokemonDetails() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
    const data = await response.json();
    setPokemonDetail(data);
  }

  async function getPokemonSpecies() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${match.params.id}`);
    const data = await response.json();
    setPokemonSpecies(data);
  }

  async function getEvolutionData() {
    const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${match.params.id}`);
    const data = await response.json();
    setEvolutionData(data);
  }

  async function getNextEvolution() {
    const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${match.params.id}`);
    const data = await response.json();
    setEvolutionData(data);
  }
  useEffect(() => {
    getPokemonDetails();
    getPokemonSpecies();
    getEvolutionData();
  }, []);

  const pokemonPrimaryType = pokemonDetail?.types?.[0]?.type.name;
  const pokemonTypesArray = pokemonDetail?.types?.map((type) => type?.type?.name);

  return (
    <Container>
      <DetailPage pokemonType={pokemonPrimaryType}>
        <Header>
          <a href="/">
            <IconContext.Provider value={{ size: "2rem" }}>
              <AiOutlineArrowLeft />
            </IconContext.Provider>
          </a>
        </Header>
        <Preview>
          <PokemonID>#00{pokemonDetail?.id}</PokemonID>
          <PokemonName>{pokemonDetail?.name}</PokemonName>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {pokemonTypesArray?.map((type, index) => (
              <PokeTypeTag key={index} type={type} />
            ))}
          </div>
          <PokemonImage src={pokemonDetail.sprites?.other["official-artwork"].front_default} alt="pokemon" />
        </Preview>
        <Detail>
          <Tabs>
            <TabList>
              <Tab>About</Tab>
              <Tab>Base Stats</Tab>
              <Tab>Evolution</Tab>
            </TabList>

            <TabPanel>
              <PokeAboutTab pokemonDetail={pokemonDetail} pokemonSpecies={pokemonSpecies} />
            </TabPanel>

            <TabPanel>
              <PokeStatsTab pokemonDetail={pokemonDetail} />
            </TabPanel>

            <TabPanel>{/* <p> {evolutionData?.chain?.evolves_to[0].evolves_to}</p> */}</TabPanel>
          </Tabs>
        </Detail>
      </DetailPage>
    </Container>
  );
};

export default PokemonDetail;
