import { StyleSheet } from 'react-native';
import { clockRunning, RotateInDownLeft } from 'react-native-reanimated';

/**
 * Style sheet for Feed.js and Profile.js
 * 
 * @author Vivian Zhang and Jillian Genova
 * @version 2022.12.12 (Clean ups)
 */
export default StyleSheet.create({

    ////////////////////////////////////////
    ////    Profile Component Styles    ////
    ////////////////////////////////////////
    // @ Vivian Zhang

    /**
     * Styles for Containers
     */
    ///// START OF CONTAINERS
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardContainer: {
        width: '92%',
        height: '82%',
    },

    profileContainer: {
        flex: 1,
        marginTop: 10, // distance around edge (outside)
        padding: 20, // distance from egde to content inside
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 13,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.07,
        shadowRadius: 3.3,

    },
    ///// END OF SYLES OF CONTAINERS


    ///// START OF HEADER SECTION OF THE PROFILE PAGE
    image: {
        borderWidth: 2,
        borderColor: "#20232a",
        width: 150,
        height: 150,
        borderRadius: 400 / 2
    },
    name: {
        color: "#20232a",
        textAlign: "right",
        fontSize: 50,
        fontWeight: "bold"
    },
    text: {
        color: "#20232a",
        textAlign: "left",
        fontSize: 30,
        fontWeight: "bold"
    },
    ///// END OF HEADER SECTION OF THE PROFILE PAGE

    /**
     * title: List Bubbles
     * section: Bubble
     * For the flatList's bubble container
     */
    ///// START OF THE SWIPPING SECTION OF THE PROFILE PAGE: BUBBLES
    bubbleItem: {
        backgroundColor: '#add8e6',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10
    },
    bubbleTitle: {
        fontSize: 18,
    },
    ///// END OF THE SWIPPING SECTION OF THE PROFILE PAGE: BUBBLES


    ////////////////////////////////////////
    /////     Setting Screen Styles    /////
    ////////////////////////////////////////
    // @ Jillian Genova

    /**
     * container for entire settings page: 
     * create format for each row
     */
    settingsContainer: {
        flexDirection: 'column',
    },

    /**
     * container for setting section headers
     * (i.e. "Profile Settings")
     * Titles are large and left-aligned
     */
    settingsHeaderContainer: {
        alignContent: 'center',
        alignItems: 'left',
        flexDirection: 'row',
        padding: 5,
        marginTop: 30, // separate sections
        marginHorizontal: 10,
    },
    /** Text style for setting section titles */
    settingsHeaderText: {
        fontSize: 28,
    },


    /**
     * Profile row is larger than other settings
     * since it displays profile picture
     */
    profileRow: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOpacity: 0.15,
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 3
    },
    /** Profile image style on view profile button */
    profileImage: {
        borderWidth: 2,
        borderColor: "#20232a",
        width: 80,
        height: 80,
        borderRadius: 400 / 2,
        margin: 2
    },


    /**
     * All other rows are smaller than profile
     * and consistent
     */
    settingsRow: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5,
        margin: 10,
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOpacity: 0.15,
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 3
    },
    /** Text style on all buttons */
    settingsRowText: {
        fontSize: 24,
        alignContent: 'center',
        alignItems: 'flex-end',
        padding: 15,
    },

    /** Text style for log out (make it red) */
    logOutText: {
        fontSize: 24,
        alignContent: 'center',
        alignItems: 'flex-end',
        padding: 15,
        color: 'red'
    },

    /** Container to keep items together */
    rowGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    /** When icons are used with other items, add padding */
    iconPadding: {
        margin: 5
    },


    /** 
     * Modal styling for when user requests information
     * modal is not visible until selected
     */
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

});
