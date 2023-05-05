import React, { useState } from "react";
import { View } from "react-native";
import * as ExpoImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";


const ImgPicker = () => {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ExpoImagePicker.launchImageLibraryAsync({
            mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if(!result.canceled) {
            setImage(result.assets[0]);
        }
    };
    return (
        <TouchableOpacity
         onPress={pickImage}
         style={StyleSheet.container}></TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
    },
});

export default ImgPicker;