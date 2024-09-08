import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 50,
        flex: 1,
    },
    calendar: {
        flex: 0,
    },
    cardWrapper: {
        width: '85%',
        alignSelf: "center",
        borderRadius: 15,
        backgroundColor: '#FF9A23',
        height: 100,
        marginTop: 10,
    },
    titleWrapper: {
        width: '90%',
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        height: 30,
    },
    line: {
        height: .4,
        width: '100%',
        backgroundColor: '#fff'
    },
    dateWrapper: {
        height: 35,
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingLeft: 10,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    time: {
        color: '#fff',
        fontFamily: 'OS-Bold',
        fontSize: 18,
        marginRight: 10,
    },
    day: {
        color: '#fff',
        fontFamily: 'OS-Light',
        fontSize: 14,
    },
    meetingWrapper: {
        height: 200,
        width: '85%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        backgroundColor: '#fff',
        borderRadius: 15,
        alignSelf: "center",
        marginTop: 10,
    }
})
export default styles