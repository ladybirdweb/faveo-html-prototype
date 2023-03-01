import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Images from "../../constants/Images";
import ButtonComponent from "../ButtonComponent";
import SearchComponent from "../SearchComponent";

const MergeTicket = () => {
  return (
    <View style={Styles.wrapper}>
      <View>
        <Text style={Styles.headingStyle}> Merge Ticket</Text>
        <TouchableOpacity>
        <View style={Styles.main}>
          <View style={Styles.searchContact}>
            <Image source={Images.Group5} />
            <Text style={Styles.contact}> Email address change #1</Text>
          </View>
          <View>
            <Image source={Images.Group464} />
          </View>
        </View>
        <View style={Styles.mergeTicketContent}>
            <Text style={Styles.mergeText}>Group <Text style={Styles.mergeTicketBottom}>: Escalation</Text> </Text>
            <Text style={Styles.mergeTextRight}>Agenit: </Text>
        </View>
        <View>
            <Text style={Styles.mergeTicketBottom}>Agent responded 2 months</Text>
        </View>
        </TouchableOpacity>
      </View>
      <ButtonComponent
        title="Next"
        customStyle={Styles.addLogButton}
        onPress={() => {}}
      />
    </View>
  );
};

export default MergeTicket;

const Styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
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
  main:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  searchContact: {
    flexDirection: "row",
    alignItems:"center",
  },
  contact: {
    fontFamily:FontFamily.NunitoExtraBold,
    color: COLORS.secondary,
    fontSize: 18,
  },
  addLogButton: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: COLORS.grey,
  },
  mergeTicketContent:{
    flexDirection:"row",
    marginTop:10,
    alignItems:"center"
  },
  mergeTicketBottom:{
    fontSize:13,
    color:COLORS.secondary,
    fontFamily:FontFamily.PTSansRegular,
    marginTop:10,
  },
  mergeText:{
    fontSize:13,
    fontFamily:FontFamily.PTSansRegular,
    color:COLORS.grey,
  },
  mergeTextRight:{
    marginLeft:20,
    color:COLORS.secondary,
  }
});
