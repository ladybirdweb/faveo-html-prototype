import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Switch } from "react-native";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Images from "../../constants/Images";
import ButtonComponent from "../ButtonComponent";

const LogTime = () => {
    const[isTimer, setIsTimer] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.allLogWrapper}>
        <View style={{width:"100%"}}>
      <Text style={styles.headingStyle}>Log Time</Text>

    {/* for timer */}
    {isTimer ?
     <View style={{marginVertical:30}}>
     <TouchableOpacity onPress={()=>{setIsTimer(false)}}>
         <Text style={styles.link}>Switch to timer</Text></TouchableOpacity>
 </View>:
  <View style={{marginVertical:30}}>
  <TouchableOpacity onPress={()=>{setIsTimer(true)}}>
      <Text style={styles.link}>Switch to manual entry</Text></TouchableOpacity>
</View>}
   

        <Text style={styles.text}>Agent</Text>
        <View style={styles.flexRow}>
            <Text style={[styles.text, {fontFamily:FontFamily.PTSansBold}]}>Divyendu Mandlik</Text>
            <Image source={Images.BackArrow} style={styles.backIcon} />
        </View>

        <View style={styles.horizontalLine}></View>

        <View style={[styles.flexRow, {marginBottom:20}]}>
            <Text style={styles.text}>Billable</Text>
            <View style={styles.toggleContainer}>
            <Switch
        trackColor={{false: '#767577', true: COLORS.primary}}
        thumbColor={COLORS.white}
        ios_backgroundColor={COLORS.primary}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
        </View>

        <View style={styles.horizontalLine}></View>
        <Text style={styles.text}>Date</Text>
        <View style={styles.flexRow}>
            <Text style={[styles.text, {fontFamily:FontFamily.PTSansBold}]}>27 Dec, 2022</Text>
            {/* <Image source={Images.BackArrow} style={styles.backIcon} /> */}
        </View>

        <View style={styles.horizontalLine}></View>
        <Text style={styles.text}>Notes</Text>
      </View>
      <ButtonComponent
        title={isTimer?"Save Log":"Start Timer"}
        customStyle={[styles.addLogButton, {backgroundColor:isTimer?COLORS.grey:COLORS.primary }]}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  allLogWrapper: {
    height: "100%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 36,
    alignItems: "center",
    padding:20
  },
  link:{
    textAlign:"center",
    fontSize:18,
    color: COLORS.primary,
    fontFamily:FontFamily.PTSansBold
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.secondary,
    marginBottom:15
},
  headingStyle: {
    textAlign: "center",
    marginTop: 5,
    fontFamily: FontFamily.NunitoExtraBold,
    color: COLORS.secondary,
    fontSize: 20,
  },
  flexRow:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    // marginTop:20,
    marginBottom:8
  },
  text:{
    fontSize:15,
    color: COLORS.secondary,
    fontFamily:FontFamily.PTSansRegular,
    marginTop:8
  },
  addLogButton: {
    width: "80%",
  },
  backIcon:{
    width:6,
    height:10
  },
  toggleContainer:{
    // flex: 1,
    // paddingBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LogTime;
