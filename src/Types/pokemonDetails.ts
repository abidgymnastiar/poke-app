//dimasukkan ke types
export interface PokemonDetail {
    id: number;
    name: string;
    sprites: {
      front_default: string;
      other?: {
        ["official-artwork"]?: {
          front_default: string;
        };
      };
    };
    abilities: {
      ability: {
        name: string;
      };
    }[];
    types: {
      type: {
        name: string;
      };
    }[];
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
  }
  
export  interface usePokemonDetailsProps {
    pokemonData: { url: string }[];
  }