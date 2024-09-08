import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    header: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        height: 40,
        alignItems: "center",
    },
    headerText: {
        fontFamily: 'OS-Bold',
        marginLeft: 10,
        fontSize: 18,
        color: '#06c'
    },
    title: {
        fontFamily: 'OS-Bold',
        fontSize: 20,
        textAlign: "center",
        width: '100%',
    },
    nWrapper: {
        width: '90%',
        height: 100,
        alignSelf: "center",
        flexDirection: 'row',
        marginTop: 30,
    },
    vLine: {
        width: '1%',
        height: 100,
        backgroundColor: '#00CC99',
        borderRadius: 10,
    },
    nDesc: {
        width: '99%',
        height: '100%',
        borderRadius: 20,
        flexDirection: 'row'
    },
    nTextWrapper: {
        width: '75%',
        height: '100%',

        justifyContent: "space-around"
    },
    nTitle: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    status: {
        fontFamily: 'OS-Regular',
        fontSize: 20,
    },
    date: {
        fontFamily: 'OS-Regular',
        fontSize: 10,
    },
    details: {
        fontSize: 12,
        fontFamily: 'OS-Regular'
    }
})
export default styles