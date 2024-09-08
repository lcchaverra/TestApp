import { VStack, Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert } from 'react-native';

export default function Searchbar ({onDataEntered}) {
    const [value, setValue] = useState('');

    const handledInputChange = (text) => {
        setValue(text)
        onDataEntered(value);
    }

    return (
        <>
            <VStack w="100%" space={5} alignSelf="center">
                <Input onChangeText={handledInputChange} value={value} placeholder="Buscador" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} onPress={() => Alert.alert('Search Icon Pressed')} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
            </VStack>
        </>
        )
}