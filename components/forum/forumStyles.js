import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    searchBar: {
        width: '90%',
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: '#0373F3',
        borderRadius: 10,
        height: 70,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "space-evenly",
        elevation: 5,
        marginBottom: 15,
    },
    input: {
        width: '50%',
        fontFamily: 'OS-Regular',
        borderRadius: 6,
        backgroundColor: '#4A99FD',
        height: 35,
        paddingLeft: 5,
    },
    submitButton: {
        width: '25%',
        height: 35,
        backgroundColor: '#CC65DD',
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    submitText: {
        color: '#fff',
        fontFamily: 'OS-Regular',
        fontSize: 14
    },
    topicWrapper: {
        width: '90%',
        height: 85,
        flexDirection: "row",
        backgroundColor: '#0373F3',
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 15,
        alignSelf: "center"
    },
    topicDescWrapper: {
        width: '80%'
    },
    karim: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        height: 50,
    },
    img: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    statsWrapper: {
        flexDirection: "row",
        width: '100%',
        height: 20,
        justifyContent: "space-evenly",
        marginTop: 5
    },
    statsText: {
        color: '#C5D0E6',
        fontSize: 10,
        fontFamily: 'OS-Regular'
    }
})
export default styles