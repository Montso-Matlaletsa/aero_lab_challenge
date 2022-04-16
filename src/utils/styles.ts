import { Platform, StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container:{
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: Platform.OS === 'ios' ? 40 : 20
    }
})