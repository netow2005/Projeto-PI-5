import React from "react";
import {ChakraProvider, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Menu, MenuButton, MenuList, MenuItem,
  } from "@chakra-ui/react";
  import NavBar from "../../../components/navbar";
  import { ChevronDownIcon } from "@chakra-ui/icons";

function Agendamento() {
    return (
        <ChakraProvider>
          <Box p={5}>
            
            <NavBar/>
                
            {/* Tabs */}

            <Tabs variant="enclosed">
              <TabList>
                <Tab>Pendentes</Tab>
                <Tab color="red.500">Confirmadas</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Tabela />
                </TabPanel>
                <TabPanel>
                  <Tabela />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </ChakraProvider>
      );
    };
    
    const Tabela = () => (
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Nome</Th>
            <Th>Veículo</Th>
            <Th>Serviços</Th>
            <Th>Data</Th>
            <Th>Finalizar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array(4)
            .fill("")
            .map((_, index) => (
              <Tr key={index}>
                <Td>
                  <Checkbox />
                </Td>
                <Td>Jailson Mendes</Td>
                <Td>Fusca Preto</Td>
                <Td>Troca de Óleo</Td>
                <Td>xx/xx/xxxx</Td>
                <Td>
                  <Menu>
                    <MenuButton as={IconButton} icon={<ChevronDownIcon />} />
                    <MenuList>
                      <MenuItem>Finalizar</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    );
    


export default Agendamento;