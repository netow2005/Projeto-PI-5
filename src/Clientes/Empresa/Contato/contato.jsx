import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  chakra,
  Image,
} from "@chakra-ui/react";
import { FaUserAlt } from "npm install react-icons --save";
import imgIconeChat from "/src/imagens/Ellipse.png"; 
import { CiSearch } from "react-icons/ci";

const CFaUserAlt = chakra(FaUserAlt);

function Contato() {
  return (
    <Flex
      flexDirection="row"
      width="100vw"
      height="100vh"
      backgroundColor="gray.200"
      p={3}
    >
      {/* coluna da esquerda */}
      <Box
        width="30%"
        p={4}
        backgroundColor="white"
        borderRadius="lg"
        boxShadow="md"
        mr={4}
      >
        <Heading as="h2" size="lg" color="red.400" ps={4} mb={6}>
          Contatos
        </Heading>
        <InputGroup mb={9}>
          <InputLeftElement pointerEvents="none">
            <CiSearch color="gray.500" /> {/* Adicionando o ícone da lupa aqui */}
          </InputLeftElement>
          <Input type="text" placeholder="Pesquisar" />
        </InputGroup>
        <Stack spacing={4}>
          {/* lista de contatos*/}
          <Flex
            p={6}
            borderRadius="lg"
            backgroundColor="gray.100"
            alignItems="center"
            cursor="pointer"
          >
            <Image
              src={imgIconeChat}
              alt="Chat Icon"
              objectFit="cover"
              width="40px"
              height="40px"
              borderRadius="50%"
            />
            <Text ml={3}>Jonas Brother</Text>
          </Flex>
          {/* contato */}
          <Flex
            p={6}
            borderRadius="lg"
            backgroundColor="gray.100"
            alignItems="center"
            cursor="pointer"
          >
            <Image
              src={imgIconeChat}
              alt="Chat Icon"
              objectFit="cover"
              width="40px"
              height="40px"
              borderRadius="50%"
            />
            <Text ml={3}>Jonas Brother 2</Text>
          </Flex>
        </Stack>
      </Box>

      {/* coluna da direita */}
      <Box
        flex="1"
        backgroundColor="white"
        p={6}
        borderRadius="lg"
        boxShadow="md"
      >
        <Stack spacing={4}>
          <Heading as="h2" size="lg" color="red.400">
            Cliente
          </Heading>
          <Box>
            <Text fontWeight="bold">Nome: </Text>
            <Text>Jonas Brother</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Celular: </Text>
            <Text>(XX) XXXX - XXXX</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Gmail: </Text>
            <Text>jonasBrother@gmail.com</Text>
          </Box>

          <Heading as="h2" size="lg" color="red.400" mt={6}>
            Veículo
          </Heading>
          <Box>
            <Text fontWeight="bold">Marca: </Text>
            <Text>Fiat</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Modelo: </Text>
            <Text>Uno de Escada</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Placa: </Text>
            <Text>KGL-3340</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Chassi: </Text>
            <Text>4Ke PvrkLn xh ve1275</Text>
          </Box>

          <Flex justifyContent="flex-start" mt={6}>
            <Button colorScheme="red" size="md" mr={4}>
              Verificar Histórico
            </Button>
            <Button colorScheme="red" size="md">
              Entrar em Contato
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Contato;
