import { View, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import ButtonComponent from "../ButtonComponent";
import SearchComponent from "../SearchComponent"

const SelectScenario = () =>{
    return(
        <View style={Styles.wrapper}>
            <View>
            <Text style={Styles.headingStyle}> Select Scenario</Text>
        <SearchComponent placeholder="Search for scenario"/>

        <Text style={Styles.subHeadingStyle}> Assign to the Escalation team</Text>
        <Text style={Styles.description}>Issues related to login will be assigned to the Escalation team</Text>

        <View style={Styles.horizontalLine}></View>
        </View>
        <ButtonComponent
        title="Execute"
        customStyle={Styles.addLogButton}
        onPress={() => {}}
      />
        </View>
    )
}

export default SelectScenario;

const Styles = StyleSheet.create({
    wrapper: {
        height: "100%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding:20,
    justifyContent: "space-between",
    paddingVertical: 36,
    // alignItems: "center",

    },
    horizontalLine: {
        width: "100%",
        height: 1,
        backgroundColor: COLORS.secondary,
        marginTop:20
    },
    headingStyle: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 15,
        fontFamily: FontFamily.NunitoExtraBold,
        color: COLORS.secondary,
        fontSize: 20,
    },
    subHeadingStyle: {
        textAlign: "left",
        marginTop: 20,
        marginBottom: 20,
        fontFamily: FontFamily.NunitoExtraBold,
        color: COLORS.secondary,
        fontSize: 18,
    },
    description:{
        fontSize:18,
        fontFamily: FontFamily.PTSansRegular,
        color: COLORS.secondary,
    },
    addLogButton: {
        width: "80%",
        alignSelf:"center"
      },
})