import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import ButtonComponent from "../ButtonComponent";
import InputComponent from "../InputComponent";
import { editTicket } from "../../constants/String";
import { ScrollView } from "native-base";

const EditTicket = () => {
    return (
        <View style={Styles.wrapper}>
            <View>
                <Text style={Styles.headingStyle}>Edit Tickets</Text>
                <ScrollView style={{ height: "65%" }}>
                    {editTicket.map((elm, idx) => {
                        return (
                            <View key={idx} style={{ marginTop: 20 }}>
                                <Text style={Styles.contact}> {elm.label}</Text>
                                <View
                                    style={{
                                        width: elm.height ? "90%" : "96%",
                                        alignItems: "center",
                                        alignSelf: "center",
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            borderBottomColor: COLORS.secondary,
                                            borderBottomWidth: 1,
                                            height: 40,
                                        }}
                                    >
                                        <InputComponent
                                            variant="unstyled"
                                            placeHolder={elm.placeholder}
                                            customStyles={{
                                                fontSize: 15,
                                                color: COLORS.secondary,
                                                fontFamily: FontFamily.PTSansBold,
                                            }}
                                        />
                                        <TouchableOpacity>
                                            <Image style={{ height: elm.height ?? 10, width: elm.width ?? 6, marginRight: 10 }} source={elm?.image} resizeMode="contain"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>

            </View>
            <ButtonComponent
                title="Update"
                customStyle={Styles.addLogButton}
                onPress={() => { }}
            />
            <Text style={Styles.contact}>Here is the order number <Text style={{ fontFamily: FontFamily.PTSansBold }}>FD07062010</Text>
                {"\n\n"}
                Thanks,{"\n"}
                Sarah
            </Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    wrapper: {
        height: "100%",
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
        paddingVertical: 36,
    },
    headingStyle: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 30,
        fontFamily: FontFamily.NunitoExtraBold,
        color: COLORS.secondary,
        fontSize: 20,
    },
    searchContact: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    contact: {
        fontFamily: FontFamily.PTSansRegular,
        color: COLORS.secondary,
        fontSize: 15,
    },
    addLogButton: {
        width: "80%",
        alignSelf: "center",
        backgroundColor: COLORS.grey,
    },
});

export default EditTicket;
