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
import { FaUserAlt } from "react-icons/fa";
import imgIconeChat from "/src/imagens/Ellipse.png"; 
import { CiSearch } from "react-icons/ci";
import NavBar from "../../../components/navbar";

const CFaUserAlt = chakra(FaUserAlt);

function Contato() {
  return (
    <>
      <NavBar />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        width="100vw"
        height="100vh"
        backgroundColor="gray.200"
        p={3}
      >
        {/* Coluna da Esquerda */}
        <Box
          width={{ base: "100%", md: "35%", lg: "30%" }}
          maxWidth="400px"
          p={4}
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="md"
          mr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading as="h2" size="lg" color="red.400" ps={4} mb={6}>
            Contatos
          </Heading>
          <InputGroup mb={9}>
            <InputLeftElement pointerEvents="none">
              <CiSearch color="gray.500" />
            </InputLeftElement>
            <Input type="text" placeholder="Pesquisar" />
          </InputGroup>
          <Stack spacing={4}>
            {/* Lista de Contatos */}
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

        {/* Coluna da Direita */}
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

            <Heading as="h2" size="lg" color="red.400" mt={2}>
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
            <Flex
              direction={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={4} 
              margin={0}

            >
              <Button colorScheme="red" size="md">
                Verificar Histórico
              </Button>
              <Button colorScheme="red" size="md">
                Entrar em Contato
              </Button>
            </Flex>
            
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

export default Contato;
