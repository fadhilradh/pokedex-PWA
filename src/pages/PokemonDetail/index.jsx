import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-tabs/style/react-tabs.css";
import {
  Container,
  Header,
  Preview,
  Detail,
  DetailItem,
  DetailPage,
  PokemonImage,
  PokemonID,
  PokemonName,
} from "./PokemonDetail.style";

const PokemonDetail = ({ match }) => {
  console.log("🚀 ~ file: index.jsx ~ line 18 ~ PokemonDetail ~ match", match);

  const [pokemonDetail, setPokemonDetail] = useState({});
  const [pokemonSpecies, setPokemonSpecies] = useState({});
  const [evolutionData, setEvolutionData] = useState({});

  async function getPokemonDetails() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`);
    const data = await response.json();
    setPokemonDetail(data);
  }

  async function getPokemonSpecies() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${match.params.name}`);
    const data = await response.json();
    setPokemonSpecies(data);
  }

  async function getEvolutionData() {
    const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${match.params.name}`);
    const data = await response.json();
    setEvolutionData(data);
  }
  useEffect(() => {
    getPokemonDetails();
    getPokemonSpecies();
    getEvolutionData();
  }, []);
  return (
    <Container>
      <DetailPage>
        <Header>
          <a href="/">
            <p>Back</p>
          </a>
        </Header>
        <Preview>
          <PokemonID>#00{pokemonDetail?.id}</PokemonID>
          <PokemonName>{pokemonDetail?.name}</PokemonName>
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
              <p>{pokemonSpecies?.flavor_text_entries?.[0]?.flavor_text}</p>
              <DetailItem>Height : {pokemonDetail.height}</DetailItem>
              <DetailItem>Weight : {pokemonDetail.weight}</DetailItem>
              <DetailItem>
                Abilities :{" "}
                {pokemonDetail.abilities?.map((ability, index) => (
                  <span>{(index ? ", " : "") + ability.ability.name}</span>
                ))}
              </DetailItem>{" "}
            </TabPanel>

            <TabPanel>
              <ProgressBar completed={60} labelAlignment="outside" isLabelVisible={true} />
            </TabPanel>

            <TabPanel>
              <p>{evolutionData?.chain}</p>
            </TabPanel>
          </Tabs>
        </Detail>
      </DetailPage>
    </Container>
  );
};

export default PokemonDetail;
