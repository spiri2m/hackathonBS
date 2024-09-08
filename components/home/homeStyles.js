import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        marginTop: 60,
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-evenly",
    },
    topText: { 
        fontFamily: 'OS-Regular',
        fontWeight: 'bold',
        fontSize: 18,
    },
    dummy: {
        marginTop: 10,
        marginLeft: 30,
        fontFamily: 'OS-Regular',
        fontSize: 16,
        color: '#818181'
    },
    dummy2: {
        marginTop: 10,
        marginLeft: 30,
        fontFamily: 'OS-Regular',
        fontWeight: 'bold',
        fontSize: 28,
    },
    dummy3: {
        marginTop: 30,
        marginLeft: 30,
        fontFamily: 'OS-Regular',
        fontWeight: 'bold',
        fontSize: 24,
    },
    searchBar: {
        width: '90%',
        height: 50,
        borderWidth: .2,
        alignSelf: "center",
        borderRadius: 15,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        flexDirection: "row",
        elevation: 2,
        backgroundColor: '#fff',
        alignItems: "center",
        padding: 2,
        paddingLeft: 10,
    },
    searchWrapper: {
        width: '100%',
    },
    card: {
        height: 140,
        marginLeft: 30,
        justifyContent: "space-between"
    },
    imageCard: {
        width: '70%',
        height: 140,
        borderRadius: 15,
    }
})
export default styles