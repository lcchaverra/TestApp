import { Center } from "native-base";
import { WebView } from 'react-native-webview';

export default function ElementDetails () {
    return (
        <>
            <Center flex={1}>
                <WebView
                    source={{ uri: 'https://www.google.com' }}
                    style={{ marginTop: 20 }}
                />
            </Center>
        </>
    )
}