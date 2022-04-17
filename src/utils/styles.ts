import { Platform, StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container:{
        flex: 1,
    
        marginTop: Platform.OS === 'ios' ? 40 : 20
    }
})

