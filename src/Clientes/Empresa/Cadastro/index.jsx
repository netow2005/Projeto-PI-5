import { useState } from 'react';
import { Input, FormControl, FormLabel, Button, Heading, Grid, Box, Image, VStack } from '@chakra-ui/react';
import imgCadastro from "/src/imagem/img-cadastro.png";

function CadastroUsuario() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    confirmEmail: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // integração será feita depois
  };

  return (
    <Grid 
      templateColumns={{ base: '1fr', md: '55% 45%' }} 
      minH="100vh" 
      margin="0" 
      padding="0"
    >
      <Box 
        bg="#CED4DA"
        display="flex" 
        justifyContent="center" 
        alignItems="center"
        width="100%" 
        height="100vh" 
      >
        <Image 
          src={imgCadastro} 
          alt="Cadastro" 
          objectFit="cover" 
          width="520" 
          height="560"
        />
      </Box>
      
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        bg="gray.50" 
        p={8} 
        height="100vh"
      >
        <VStack spacing={6} maxW="400px" width="100%">
          <Heading as="h2" size="lg" color="#FA6565" textAlign="center">
            Cadastre-se
          </Heading>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <FormControl p={4} border="1px solid" borderColor="gray.200" borderRadius="md" position="relative" mb={4}>
              <FormLabel
                position="absolute"
                top="-10px"
                left="10px"
                bg="white"
                px={2}
                fontSize="sm"
                color="black"
              >
                Usuario
              </FormLabel>
              <Input 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                placeholder="Digite seu usuário" 
                variant="unstyled"
              />
            </FormControl>

            <FormControl p={4} border="1px solid" borderColor="gray.200" borderRadius="md" position="relative" mb={4} >
              <FormLabel
                position="absolute"
                top="-10px"
                left="10px"
                bg="white"
                px={2}
                fontSize="sm"
                color="black"
              >
                Telefone
              </FormLabel>
              <Input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Digite seu telefone" 
                variant="unstyled"
              />
            </FormControl>

            <FormControl p={4} border="1px solid" borderColor="gray.200" borderRadius="md" position="relative" mb={4} >
              <FormLabel
                position="absolute"
                top="-10px"
                left="10px"
                bg="white"
                px={2}
                fontSize="sm"
                color="black"
              >
                Email
              </FormLabel>
              <Input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Digite seu email" 
                variant="unstyled"
              />
            </FormControl>

            <FormControl p={4} border="1px solid" borderColor="gray.200" borderRadius="md" position="relative" mb={4} >
              <FormLabel
                position="absolute"
                top="-10px"
                left="10px"
                bg="white"
                px={2}
                fontSize="sm"
                color="black"
              >
                Confirmar Email
              </FormLabel>
              <Input 
                type="email" 
                name="confirmEmail" 
                value={formData.confirmEmail} 
                onChange={handleChange} 
                placeholder="Confirme seu email" 
                variant="unstyled"
              />
            </FormControl>

            <FormControl p={4} border="1px solid" borderColor="gray.200" borderRadius="md" position="relative" mb={6} >
              <FormLabel
                position="absolute"
                top="-10px"
                left="10px"
                bg="white"
                px={2}
                fontSize="sm"
                color="black"
              >
                Senha
              </FormLabel>
              <Input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                placeholder="Digite sua senha" 
                variant="unstyled"
              />
            </FormControl>

            <Button type="submit" colorScheme="red" width="100%" borderRadius="lg" size={'md'}>
              Cadastre-se
            </Button>
          </form>
        </VStack>
      </Box>
    </Grid>
  );
}

export default CadastroUsuario;
