import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    goBack: {
        flexDirection: "row",
        height: 30,
        alignItems: "center",
        paddingLeft: 10,
    },
    bookWrapper: {
        flexDirection: 'row',
        width: '90%',
        height: 200,
        alignSelf: "center",
        alignItems: "center",
        marginTop: 20,
    },
    bookImg: {
        width: '50%',
        height: '100%',
    },
    infoWrapper: {
        height: 50,
        width: "auto",
        justifyContent: "space-between"
    },
    bookName: {
        fontFamily: 'OS-Bold',
        fontSize: 16,
    },
    bookAuthor: {
        color: '#616A7D',
        fontFamily: 'OS-Light',
    },
    buttonWrapper: {
        width: '100%',
        height: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    button: {
        width: 30,
        height: 30,
        backgroundColor: '#348BEF',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    }
})
export default styles