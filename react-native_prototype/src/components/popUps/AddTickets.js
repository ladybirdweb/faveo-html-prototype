import { View, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import ButtonComponent from "../ButtonComponent";
import SearchComponent from "../SearchComponent"

const AddTickets = () =>{
    return(
        <View style={Styles.wrapper}>
            <View>
            <Text style={Styles.headingStyle}> Add Tickets</Text>
            <View style={Styles.searchContact}>
            <Text style={Styles.contact}> Contact</Text>
            <View style={{flex:1}}>
            <SearchComponent placeholder="Search"/>
            </View>
            </View>
            </View>
        <ButtonComponent
        title="Add Tickets"
        customStyle={Styles.addLogButton}
        onPress={() => {}}
      />
        </View>
    )
}

export default AddTickets;

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
    headingStyle: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 30,
        fontFamily: FontFamily.NunitoExtraBold,
        color: COLORS.secondary,
        fontSize: 20,
    },
    searchContact:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%"
    },
    contact:{
        fontFamily: FontFamily.NunitoExtraBold,
        color: COLORS.secondary,
        fontSize: 18,
        marginRight:20
    },
    addLogButton: {
        width: "80%",
        alignSelf:"center",
        backgroundColor:COLORS.grey
      },
})