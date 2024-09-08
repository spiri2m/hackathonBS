import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mainWrapper: {
        width: '90%',
        alignSelf: "center",
        marginTop: 50,
        height: 700,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#fff'
    },
    helloWrapper: {
        width: '100%',
        backgroundColor: '#348BEF',
        height: 150,
        borderRadius: 16,
        justifyContent: "center",

    },
    hello: {
        alignSelf: "center",
        width: '100%',
        flexDirection: "row",
        height: 60,
        justifyContent: "space-evenly"
    },
    helloText: {
        height: 50,
        alignSelf: "center",
    },
    helloHello: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'OS-Bold',
    },
    helloWelcome: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'OS-Regular',
        letterSpacing: 1,
    },
    helloImg: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    levelLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#6b6b6b',
    },
    progressBarContainer: {
        flex: 1,
        height: 10,
        backgroundColor: '#e0e0e0', // background of the progress bar
        borderRadius: 5,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4a90e2', // Color of the progress
        borderRadius: 5,
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        width: '100%',
        alignSelf: "center"
    },
    levels: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        alignSelf: "center",
    },
    catalogue: {
        backgroundColor: "#FCFCFC",
        borderRadius: 10,
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 10,
        alignSelf: "center",
        flexDirection: 'row',
        marginTop: 20,
        alignItems: "center",
        height: 40,
        justifyContent: "space-between",
    },
    statsWrapper: {
        width: '90%',
        alignSelf: "center",
        height: 250,
        marginTop: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
    },
    stats: {
        borderBottomWidth: .2,
        width: '90%',
        alignSelf: "center",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
    },
    logOutButton: {
        width: '45%',
        height: 30,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 80,
    }
})
export default styles