'use strict';

import  React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SPINNER_SIZE = 80;
const NAVI_HEIGHT = 60;
const MENU_HEIGHT = 60;

const pickerStyle = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9',
        height: 50,
        alignItems: 'center',
    },
    sectionHeaderText: {
        fontSize: 13,
        color: '#424242',
        marginLeft: 5,

    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9',
    },
    menusView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    menusViewTideYes: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    menuText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 15,
    },

    webView: {
        position:'absolute',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 2
    },

    rowListText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 13,
    },

    rowTemperatureView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        width: 35
    },

    localListrowText: {
        fontSize: 15,
        fontWeight: "100",
        color: 'black',
    },

    modalContainer: {
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        flex: 1
    },

    outerInfoContainer: {
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
    },

    innerInfoModal: {
        backgroundColor:'white',
        width:SCREEN_WIDTH*.9,
        borderRadius: 2,
        padding:10

    },

    closeIcon: {
        right: 10,
        top: 5,
        position: 'absolute'
    },

    circleIcon: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        position: 'absolute'
    },
    headerViewStyle: {
        height: 25,
        width: SCREEN_WIDTH,
    },
    rowViewStyle: {
        height: 50,
        width: SCREEN_WIDTH,
    },

    heartView: {
        borderRadius: 100,
        width: 40, height: 40,
        borderWidth: 1,
        marginRight: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerDistrictText: {
        color: 'white',
        fontSize: 30,
        paddingTop: 0
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    sunInfo: {
        borderRadius: 20,
        width: 90,
        height: 30,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },

    spinner: {
        position: 'absolute',
        left: (SCREEN_WIDTH - SPINNER_SIZE) / 2,
        top: (SCREEN_HEIGHT - SPINNER_SIZE) / 2 + 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    navigator: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        width: SCREEN_WIDTH,
        height: NAVI_HEIGHT,
        zIndex: 1000,
    },
    offlineView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 70,
        backgroundColor: '#E7E7E7',
    },
    listViewrow: {
        backgroundColor: '#F6F6F6',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9',

    },
    listViewrowDistrict: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        alignItems: 'center',
        flex: 2
    },
    listViewrowCamShop: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,

    },
    iconBorder: {
        borderRadius: 100,
        width: 35, height: 35,
        borderWidth: 1,
        borderColor: '#94000F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    webView404: {
        position:'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(48,48,48)',
        width: SCREEN_WIDTH,
        height:SCREEN_HEIGHT/2,
        left:0,
        zIndex:1
    },
    spaceIcon: {
        width: 30
    },

    directionMarginBottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18
    },
    directionMarginTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1
    },
    navigatorMenu: {
        position: 'absolute',
        top: NAVI_HEIGHT + 2,
        width: SCREEN_WIDTH,
        height: MENU_HEIGHT,
        zIndex: 1000
    },
    bestDirection: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 30,
    },
    localSectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(48,48,48,1)',
        height:25,
        marginTop:0,

    },
    localSectionHeaderText: {
        fontSize: 15,
        color: 'white',
        marginLeft: 10
    }
});

module.exports = pickerStyle;