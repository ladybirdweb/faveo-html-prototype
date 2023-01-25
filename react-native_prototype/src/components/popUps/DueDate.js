import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Images from "../../constants/Images";
import { dueDate } from "../../constants/String";

const DueDate = () => {
    return (
        <View style={styles.allLogWrapper}>
            <Text style={styles.headingStyle}>Due Date</Text>

            <ScrollView style={{ width: "90%" }} showsVerticalScrollIndicator={false}>
                {dueDate.map((elm) =>
                    <View style={styles.dateContainer}>
                        <Image style={{marginRight:20}} source={Images.Calender} />
                        <View>
                            <Text style={[styles.dayDateText, {fontFamily: FontFamily.PTSansBold}]}>{elm.day}</Text>
                            {elm.date && <Text style={[styles.dayDateText, {fontFamily: FontFamily.PTSansRegular}]}>{elm?.date}</Text>}
                        </View>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    allLogWrapper: {
        height: "100%",
        position: "absolute",
        bottom: 0,
        width: "100%",
        justifyContent: "space-between",
        paddingVertical: 36,
        alignItems: "center",
    },
    headingStyle: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 15,
        fontFamily: FontFamily.NunitoExtraBold,
        color: COLORS.secondary,
        fontSize: 20,
    },
    dateContainer: {
        background: COLORS.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        width: "100%",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    dayDateText: {
        color:COLORS.secondary,
        fontSize: 16,
        lineHeight: 21
    },
});

export default DueDate;