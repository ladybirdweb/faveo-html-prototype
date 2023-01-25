// import { View, Text } from 'react-native'
// import React from 'react'

// const InboxGroupDropdown = () => {
//   return (
//     <View>
//       <Text>InboxGroupDropdown</Text>
//     </View>
//   )
// }

// export default InboxGroupDropdown
import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Images from "../../constants/Images";
import {searchBy} from "../../constants/String";
const InboxGroupDropdown = () => {
    const [isSelected, setIsSelected] = useState({});
    const handleClick = (id) => {
        console.log("handleClick", id);
        setIsSelected({ [id]: true })
    }

    console.log("setIsSelected", isSelected)
    return (
        <View style={styles.allLogWrapper}>
            <Text style={styles.headingStyle}>Search By</Text>
            <View style={styles.horizontalLine}></View>

            {searchBy.map((elm) => <TouchableOpacity key={elm.id} style={styles.searchBy} onPress={() => handleClick(elm.id)}>
                <Text style={[styles.text, { color: isSelected[elm.id] ? COLORS.primary : COLORS.secondary }]}>{elm.name}</Text>
                {isSelected[elm.id] && <Image source={Images.Check} style={styles.check} />}
            </TouchableOpacity>)}

        </View>
    );
}

const styles = StyleSheet.create({
    allLogWrapper: {
        position: "absolute",
        bottom: 0,
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
    }
});

export default InboxGroupDropdown;