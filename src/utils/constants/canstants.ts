import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const safearea = useSafeAreaInsets();

export const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window')