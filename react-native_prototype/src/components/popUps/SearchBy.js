import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Images from "../../constants/Images";
// import {searchBy} from "../../constants/String";
const SearchBy = ({list, heading, isTick}) => {
    const [isSelected, setIsSelected] = useState({1:true});
    const handleClick = (id) => {
        console.log("handleClick", id);
        setIsSelected({ [id]: true })
    }

    console.log("setIsSelected", isSelected)
    return (
        <View style={styles.allLogWrapper}>
            {heading && <>
                <Text style={styles.headingStyle}>{heading}</Text>
            <View style={styles.horizontalLine}></View>
            </>}
            

            {list.map((elm) => <TouchableOpacity key={elm.id} style={styles.searchBy} onPress={() => handleClick(elm.id)}>
                <View style={styles.row}>
                {elm.image && <Image source={elm.image} style={{marginRight:20}}/>}
                {heading==="Property" && <View style={[styles.propertyDots, {backgroundColor: elm.color}]}></View>}
                <Text style={[styles.text, { color: isSelected[elm.id] ? COLORS.primary : COLORS.secondary }]}>{elm.name}</Text>
                </View>
                {isSelected[elm.id] && !isTick && <Image source={Images.Check} style={styles.check} />}
            </TouchableOpacity>)}

        </View>
    );
}

const styles = StyleSheet.create({
    allLogWrapper: {
        position: "absolute",
        // bottom: 0,
        width: "100%",
        justifyContent: "space-between",
        paddingVertical: 36,
        paddingHorizontal: 20,

    },
    horizontalLine: {
        width: "100%",
        height: 1,
        backgroundColor: COLORS.secondary
    },
    headingStyle: {
        textAlign: "left",
        marginTop: 5,
        marginBottom: 15,
        fontFamily: FontFamily.NunitoExtraBold,
        color: COLORS.secondary,
        fontSize: 20,
    },
    searchBy: {
        width: "100%",
        marginVertical: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        fontSize: 15
    },
    selected: {
        color: COLORS.primary
    },
    check: {
        width: 21,
        height: 16,
    },
    row:{
        flexDirection:"row",
        alignItems:"center"
    },
    propertyDots:{
        width:18,
        height:18,
        borderRadius:41,
        marginRight:15
    }
});

export default SearchBy;