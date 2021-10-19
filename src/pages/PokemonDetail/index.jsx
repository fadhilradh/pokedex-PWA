import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IconContext } from "react-icons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsBookmarkPlus, BsBookmarkPlusFill } from "react-icons/bs";
import { PokeTabAbout, PokeTabStats, PokeTabEvo, PokeTypeTag } from "../../components";
import {
  Container,
  Detail,
  DetailPage,
  Header,
  PokemonID,
  PokemonImage,
  PokemonName,
  Preview,
  StyledIcon,
  TypesWrapper,
} from "./PokemonDetail.style";
import { getEvoDetail } from "../../services/getEvolutions";
import { getPokeByIdUrl, getPokeSpeciesUrl } from "../../services/baseUrls";
import useStore from "../../zustand/store";
import shallow from "zustand/shallow";

const PokemonDetail = ({ match }) => {
  const { id } = match.params;
  const bookmarkPokemon = useStore((state) => state.bookmarkPokemon);

  const [pokemonSpecies, setPokemonSpecies] = useState({});
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [evolutionChain, setEvoChain] = useState([]);
  const [evolutionDetail, setEvoDetail] = useState([]);
  const [speciesDataFetched, setSpeciesDataFetched] = useState(false);
  const [evolutionChainFetched, setEvoChainFetched] = useState(false);
  const [hasMultipleEvo, setHasMultipleEvo] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const pokemonPrimaryType = pokemonDetail?.types?.[0]?.type.name;
  const pokemonTypesArray = pokemonDetail?.types?.map((type) => type?.type?.name);
  const pokemonImg = pokemonDetail?.sprites?.other["official-artwork"].front_default;
  const pokemonObject = {
    id: pokemonDetail.id,
    img: pokemonImg,
    name: pokemonDetail.name,
    types: pokemonDetail.types,
  };

  async function getPokemonDetails() {
    const response = await fetch(getPokeByIdUrl + id);
    const data = await response.json();
    setPokemonDetail(data);
  }

  async function getPokemonSpecies() {
    try {
      const response = await fetch(getPokeSpeciesUrl + id);
      const data = await response.json();
      setPokemonSpecies(data);
      setSpeciesDataFetched(true);
    } catch (err) {
      console.error(err);
    }
  }

  async function getEvolutionList() {
    const response = await fetch(pokemonSpecies.evolution_chain.url);
    const data = await response.json();
    let evolutionChain = [];
    let evoData = data.chain;
    let evoDetail = evoData.evolution_details?.[0];

    do {
      evolutionChain.push({
        species_name: evoData.species?.name,
        min_level: !evoData ? 1 : evoDetail?.min_level,
        trigger_name: !evoData ? null : evoDetail?.trigger?.name,
        item: !evoData ? null : evoDetail?.item?.name,
      });

      evoData = evoData.evolves_to[0];
    } while (evoData !== undefined && evoData.hasOwnProperty("evolves_to"));
    setEvoChain(evolutionChain);
    setEvoChainFetched(true);
  }

  useEffect(() => {
    getPokemonDetails();
    getPokemonSpecies();
  }, []);

  useEffect(() => {
    if (speciesDataFetched) {
      getEvolutionList();
    }
  }, [speciesDataFetched]);

  useEffect(() => {
    if (evolutionChainFetched) {
      getEvoDetail(evolutionChain, setEvoDetail);
    }
  }, [evolutionChainFetched]);

  useEffect(() => {
    if (evolutionChain.length > 2) setHasMultipleEvo(true);
  }, [evolutionChain.length]);

  return (
    <Container>
      <DetailPage pokemonType={pokemonPrimaryType}>
        <Header>
          <a href="/">
            <IconContext.Provider value={{ size: "2rem" }}>
              <AiOutlineArrowLeft />
            </IconContext.Provider>
          </a>
          <StyledIcon
            onClick={() => {
              bookmarkPokemon(pokemonObject);
              setBookmarked(true);
            }}
          >
            <IconContext.Provider value={{ size: "2rem" }}>
              {bookmarked ? <BsBookmarkPlusFill /> : <BsBookmarkPlus />}
            </IconContext.Provider>
          </StyledIcon>
        </Header>
        <Preview>
          <PokemonID>#00{pokemonDetail?.id}</PokemonID>
          <PokemonName className="pokemon-name">{pokemonDetail?.name}</PokemonName>
          <TypesWrapper>
            {pokemonTypesArray?.map((type, index) => (
              <PokeTypeTag key={index} type={type} />
            ))}
          </TypesWrapper>
          <PokemonImage src={pokemonImg} alt="pokemon" />
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
              <PokeTabStats stats={pokemonDetail.stats} />
            </TabPanel>

            <TabPanel>
              <PokeTabEvo evolutionDetail={evolutionDetail} hasMultipleEvo={hasMultipleEvo} />
            </TabPanel>
          </Tabs>
        </Detail>
      </DetailPage>
    </Container>
  );
};

PokemonDetail.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default PokemonDetail;
