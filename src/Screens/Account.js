import { Center, Container, Heading, Text } from 'native-base';

const AccountInfo = () => {
  return (
    <>
      <Center flex={1} bg={'#CCC'}>
        <Container w={"100%"} h={"100%"} p={5} justifyContent="center" alignItems="center" >
            <Heading>
                <Text color="info.600"> Comming soon...</Text>
            </Heading>
        </Container>
      </Center>
    </>
  )
}


export default function Account() {

  return (
    <>
        <AccountInfo />
    </>
  );
}
