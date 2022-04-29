import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokemon(await resp.json());
    }
    getPokemon();
  });

  return (
    <Flex direction="column" alignItems={"center"}>
      {pokemon.map((pokemon) => (
        <Box key={pokemon.id}>
          <Link href={`/pokemon/${pokemon.id}`}>
            <a>
              <h3>{pokemon.name}</h3>
            </a>
          </Link>
        </Box>
      ))}
    </Flex>
  );
}
