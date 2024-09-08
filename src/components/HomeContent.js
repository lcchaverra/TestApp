import { Center, Container, Heading, Text } from 'native-base';
export default function HomeContent() {

  return (
    <>
        <Center flex={1} bg={'#CCCC'}>
        <Container w={"100%"} h={"100%"} p={5} justifyContent="center" alignItems="center" >
            <Heading>
                Pantalla principal de la aplicacion realizada con
                <Text color="info.600"> React native</Text>
            </Heading>
            <Text mt="5" fontSize="xl" fontWeight="medium">
                No me toquen estoy chocha :D
            </Text>
            <Text mt="10" fontSize="sm" fontWeight="medium">
                att: Lucas
            </Text>
        </Container>
        </Center>
    </>
  );
}
