import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";
import { FaCalendarAlt, FaPhoneAlt, FaBox, FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <Box p={5}>
      <Flex justify="space-between" mb={5}>
        <Flex gap={5}>
            
          <Button variant="link" leftIcon={<FaCalendarAlt />} colorScheme="red">
            Agenda
          </Button>
          <Link to="/contato">
          <Button variant="link" leftIcon={<FaPhoneAlt />}>
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