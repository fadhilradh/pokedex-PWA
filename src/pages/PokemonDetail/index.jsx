import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PokeTabAbout, PokeTabStats, PokeTabEvo, PokeTypeTag } from "../../components";
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
  TypesWrapper,
} from "./PokemonDetail.style";

const PokemonDetail = ({ match }) => {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [pokemonSpecies, setPokemonSpecies] = useState({});
  const [evoChain, setEvoChain] = useState([]);
  const [evoDetail, setEvoDetail] = useState([]);
  const [speciesDataFetched, setSpeciesDataFetched] = useState(false);
  const [evoChainFetched, setEvoChainFetched] = useState(false);

  async function getPokemonDetails() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
    const data = await response.json();
    setPokemonDetail(data);
  }

  async function getPokemonSpecies() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${match.params.id}`);
      const data = await response.json();
      setPokemonSpecies(data);
      setSpeciesDataFetched(true);
    } catch (err) {
      console.error(err);
    }
  }

  async function getEvoData() {
    const response = await fetch(pokemonSpecies.evolution_chain.url);
    const data = await response.json();
    let evoChain = [];
    let evoData = data.chain;

    do {
      // let numberOfEvos = evoData.evolves_to.length;

      evoChain.push({
        species_name: evoData.species?.name,
        min_level: !evoData ? 1 : evoData.evolution_details[0]?.min_level,
        trigger_name: !evoData ? null : evoData.evolution_details[0]?.trigger?.name,
        item: !evoData ? null : evoData.evolution_details[0]?.item?.name,
      });

      // if (numberOfEvos > 1) {
      //   for (let i = 1; i < numberOfEvos; i++) {
      //     evoChain.push({
      //       species_name: evoData.evolves_to[i].species?.name,
      //       min_level: !evoData.evolves_to[i] ? 1 : evoData.evolves_to[i].evolution_details[i].min_level,
      //       trigger_name: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].evolution_details[i].trigger.name,
      //       item: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].evolution_details[i].item.name,
      //     });
      //   }
      // }

      evoData = evoData.evolves_to[0];
    } while (evoData !== undefined && evoData.hasOwnProperty("evolves_to"));
    setEvoChain(evoChain);
    setEvoChainFetched(true);
  }

  async function getEvoDetail() {
    try {
      evoChain.forEach(async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.species_name}`);
        const newData = await response.json();
        setEvoDetail((currentData) => [
          ...currentData,
          {
            id: newData.id,
            name: newData.name,
            src: newData.sprites.other["official-artwork"].front_default,
          },
        ]);
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPokemonDetails();
    getPokemonSpecies();
  }, []);

  useEffect(() => {
    if (speciesDataFetched) {
      getEvoData();
    }
  }, [speciesDataFetched]);

  useEffect(() => {
    if (evoChainFetched) {
      getEvoDetail();
    }
  }, [evoChainFetched]);

  const pokemonPrimaryType = pokemonDetail?.types?.[0]?.type.name;
  const pokemonTypesArray = pokemonDetail?.types?.map((type) => type?.type?.name);
  const [isMultipleEvo, setIsMultipleEvo] = useState(false);
  useEffect(() => {
    if (evoChain.length > 2) setIsMultipleEvo(true);
  }, [evoChain.length]);

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
          <PokemonName className="pokemon-name">{pokemonDetail?.name}</PokemonName>
          <TypesWrapper>
            {pokemonTypesArray?.map((type, index) => (
              <PokeTypeTag key={index} type={type} />
            ))}
          </TypesWrapper>
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
              <PokeTabAbout pokemonDetail={pokemonDetail} pokemonSpecies={pokemonSpecies} />
            </TabPanel>

            <TabPanel>
              <PokeTabStats pokemonDetail={pokemonDetail} />
            </TabPanel>

            <TabPanel>
              <PokeTabEvo evoChain={evoChain} evoDetail={evoDetail} isMultipleEvo={isMultipleEvo} />
            </TabPanel>
          </Tabs>
        </Detail>
      </DetailPage>
    </Container>
  );
};

export default PokemonDetail;
