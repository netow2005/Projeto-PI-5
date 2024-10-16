import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    FormControl,
    FormHelperText,
    InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function LoginEmpresa() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    return (
        <Flex
            flexDirection="column"
            width="100vw"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Heading color="red.400">Login</Heading>
                <Box minW={{ base: "90%", md: "400px" }} minH="300px">
                    <form>
                        <Stack
                            spacing={6}
                            p="2rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="Email" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Senha"
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button
                                            h="0.5rem"
                                            size="md"
                                            onClick={handleShowClick}
                                            variant="link"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                    <Link to="#">Esqueceu a senha?</Link>
                                </FormHelperText>
                            </FormControl>
                            <Flex justifyContent="center">
                                <Link to="#">
                                    <Button
                                        borderRadius="1em"
                                        type="submit"
                                        variant="solid"
                                        colorScheme="red"
                                        width="8em"
                                        height="2em"
                                        size="lg"
                                    >
                                        Entrar
                                    </Button>
                                </Link>
                            </Flex>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                Não possui uma conta?{" "}
                <Link style={{ color: 'red' }} to="/cadastro">
                    Cadastre-se!
                </Link>
            </Box>
        </Flex>
    );
}

export default LoginEmpresa;
