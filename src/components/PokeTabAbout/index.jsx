import { PokeDetailItem } from "..";
import { Container, Description, Subtitle } from "./PokeAboutTab.style";

const PokeAboutTab = ({ pokemonSpecies, pokemonDetail }) => {
  return (
    <Container>
      <Description>{pokemonSpecies?.flavor_text_entries?.[0]?.flavor_text}</Description>
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
        property="Gender Ratio"
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
    </Container>
  );
};

export default PokeAboutTab;
