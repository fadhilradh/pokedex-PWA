import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-tabs/style/react-tabs.css";
import PokeDetailItem from "../../components/PokeDetailItem";
import {
  Container,
  Detail,
  DetailPage,
  Header,
  PokemonID,
  PokemonImage,
  PokemonName,
  Preview,
  Subtitle,
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
              <PokeDetailItem property="Weight" value={`${pokemonDetail.weight / 10} kg`} />
              <PokeDetailItem property="Height" value={`${pokemonDetail.height * 10} cm`} />
              <PokeDetailItem
                property="Abilities"
                value={pokemonDetail.abilities?.map((ability, index) => (
                  <span key={ability.slot}>{(index ? ", " : "") + ability.ability.name}</span>
                ))}
              />

              <Subtitle>Breeding</Subtitle>
              <PokeDetailItem
                property="Gender"
                value={`M : ${100 - (pokemonSpecies.gender_rate / 8) * 100}%  |  F : ${
                  (pokemonSpecies.gender_rate / 8) * 100
                }%`}
              />
              <PokeDetailItem
                property="Egg Group"
                value={pokemonSpecies.egg_groups?.map((group, index) => (
                  <span key={group.name}>{(index ? ", " : "") + group.name}</span>
                ))}
              />
            </TabPanel>

            <TabPanel>
              {pokemonDetail?.stats?.map((stat) => (
                <div key={stat.stat.name}>
                  <p>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</p>
                  <ProgressBar completed={stat.base_stat} labelAlignment="outside" isLabelVisible={true} />
                </div>
              ))}
            </TabPanel>

            <TabPanel>
              <p> {evolutionData?.chain?.evolves_to[0].evolves_to}</p>
            </TabPanel>
          </Tabs>
        </Detail>
      </DetailPage>
    </Container>
  );
};

export default PokemonDetail;
