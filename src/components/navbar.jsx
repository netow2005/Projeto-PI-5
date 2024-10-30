import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";
import { FaCalendarAlt, FaPhoneAlt, FaBox, FaShoppingCart } from "react-icons/fa";

function NavBar() {

  const location = useLocation();

  return (
    
    <Box p={5}>
      <Flex justify="space-between" mb={5}>
        <Flex gap={5}>
            
            <Link to="/agendamento">
          <Button variant="link" leftIcon={<FaCalendarAlt />} colorScheme={location.pathname === "/agendamento" ? "red" : "gray"}>
            Agenda
          </Button>
          </Link>

          <Link to="/contato">
          <Button variant="link" leftIcon={<FaPhoneAlt />} colorScheme={location.pathname === "/contato" ? "red" : "gray"}>
            Contato
          </Button>
          </Link>

          <Button variant="link" leftIcon={<FaBox />}>
            Estoque
          </Button>
          <Button variant="link" leftIcon={<FaShoppingCart />}>
            Solicitar Peças
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;