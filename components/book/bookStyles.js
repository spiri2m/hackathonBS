import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        width: '50%',
        marginTop: 50,
        height: 30,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: 10,
    },
    input: {
        width: '90%',
        alignSelf: 'center',
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: "center",
    },
    buttonWrapper: {
        width: '33%',
        height: 40,
        borderWidth: 1,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        marginTop: 10,
        borderRadius: 15,
        borderColor: '#0373F3',
    }
})
export default styles