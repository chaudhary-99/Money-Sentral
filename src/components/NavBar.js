// // import React, { useState, useRef } from 'react';
// // import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Animated, Easing } from 'react-native';
// // import { useNavigation } from '@react-navigation/native'; // Import useNavigation
// // // import logo1 from 'Logoimg.png';

// // const NavBar = () => {
// //     const [isMenuVisible, setMenuVisible] = useState(false);
// //     const animatedHeight = useRef(new Animated.Value(60)).current; // Initialize animated value
// //     const navigation = useNavigation(); // Use the navigation hook

// //     const toggleMenu = () => {
// //         const menuHeight = 470; // You can adjust this value or calculate it dynamically based on content
// //         const closedHeight = 60;

// //         setMenuVisible(!isMenuVisible);

// //         Animated.timing(animatedHeight, {
// //             toValue: isMenuVisible ? closedHeight : menuHeight,
// //             duration: 500,
// //             easing: Easing.inOut(Easing.ease),
// //             useNativeDriver: false,
// //         }).start();
// //     };

// //     return (
// //         <Animated.View style={[styles.header, { height: animatedHeight }]}>
// //             <View style={styles.navContent}>
// //             <Image source={{ uri: 'https://i.ibb.co/cFNpfWg/Logoimg.png' }} style={styles.logo} />

// //                 <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerButton}>                                                                                  
// //                     <Text style={styles.hamburgerText}>&#9776;</Text>
// //                 </TouchableOpacity>
// //             </View>

// //             {isMenuVisible && (
// //                 <ScrollView style={styles.menu}>
// //                     <TouchableOpacity style={styles.menuItem}>
// //                         <Text style={styles.menuItemText}>How it Works</Text>
// //                     </TouchableOpacity>
// //                     <TouchableOpacity style={styles.menuItem}>
// //                         <Text style={styles.menuItemText}>Savings Calculator</Text>
// //                     </TouchableOpacity>
// //                     <TouchableOpacity style={styles.menuItem}>
// //                         <Text style={styles.menuItemText}>Banks</Text>
// //                     </TouchableOpacity>
// //                     <TouchableOpacity
// //                         style={styles.menuItem}
// //                         onPress={() => navigation.navigate('SignUpScreen')} // Navigate to SignUpScreen
// //                     >
// //                         <Text style={styles.menuItemText}>Sign Up</Text>
// //                     </TouchableOpacity>
// //                     <TouchableOpacity
// //                         style={styles.menuItem}
// //                         onPress={() => navigation.navigate('SignInScreen')} // Navigate to SignInScreen
// //                     >
// //                         <Text style={styles.menuItemText}>Login</Text>
// //                     </TouchableOpacity>
// //                     <Text style={styles.menuFooter}>App Version 1.0</Text>
// //                 </ScrollView>
// //             )}
// //         </Animated.View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     header: {
// //         backgroundColor: '#094268',
// //         overflow: 'hidden',
// //         elevation: 5,
// //         zIndex: 10,
// //         width: '100%',
// //         paddingHorizontal: 15,
// //     },
// //     navContent: {
// //         flexDirection: 'row',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //     },
// //     logo: {
// //         width: 150,
// //         height: 70,
// //         resizeMode: 'contain',
        
// //     },
// //     hamburgerButton: {
// //         padding: 10,
// //         // backgroundColor: '#36d0a4',
// //         borderRadius: 25,
// //         elevation: 5,
// //         height:60,
// //         width:40,
// //     },
// //     hamburgerText: {
// //         fontSize: 30,
// //         color: '#fff',
// //     },
// //     menu: {
// //         backgroundColor: '#094268',
// //         paddingTop: 20,
// //     },
// //     menuItem: {
// //         paddingVertical: 15,
// //         paddingHorizontal: 20,
// //         borderBottomWidth: 1,
// //         borderBottomColor: '#ccc',
// //         backgroundColor: '#f5f5f5',
// //         marginBottom: 5,
// //         borderRadius: 5,
// //         marginHorizontal: 10,
// //     },
// //     menuItemText: {
// //         fontSize: 18,
// //         color: '#094268',
// //     },
// //     menuFooter: {
// //         marginTop: 20,
// //         textAlign: 'center',
// //         fontSize: 16,
// //         color: '#888',
// //         paddingVertical: 10,
// //     },
// // });

// // export default NavBar;

// import React, { useState, useRef } from 'react';
// import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; 

// const NavBar = () => {
//     const [isMenuVisible, setMenuVisible] = useState(false);
//     const animatedHeight = useRef(new Animated.Value(60)).current;
//     const navigation = useNavigation();

//     const toggleMenu = () => {
//         const menuHeight = Dimensions.get('window').height; // Full screen height
//         const closedHeight = 60;

//         setMenuVisible(!isMenuVisible);

//         Animated.timing(animatedHeight, {
//             toValue: isMenuVisible ? closedHeight : menuHeight,
//             duration: 500,
//             easing: Easing.inOut(Easing.ease),
//             useNativeDriver: false,
//         }).start();
//     };

//     return (
//         <Animated.View style={[styles.header, { height: animatedHeight }]}>
//             <View style={styles.navContent}>
//                 <Image source={{ uri: 'https://i.ibb.co/cFNpfWg/Logoimg.png' }} style={styles.logo} />
//                 <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerButton}>
//                     <Text style={styles.hamburgerText}>&#9776;</Text>
//                 </TouchableOpacity>
//             </View>

//             {isMenuVisible && (
//                 <ScrollView style={styles.menu}>
//                     <TouchableOpacity style={styles.menuItem}>
//                         <Text style={styles.menuItemText}>How it Works</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.menuItem}>
//                         <Text style={styles.menuItemText}>Savings Calculator</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.menuItem}>
//                         <Text style={styles.menuItemText}>Banks</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={styles.menuItem}
//                         onPress={() => navigation.navigate('SignUpScreen')}
//                     >
//                         <Text style={styles.menuItemText}>Sign Up</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={styles.menuItem}
//                         onPress={() => navigation.navigate('SignInScreen')}
//                     >
//                         <Text style={styles.menuItemText}>Login</Text>
//                     </TouchableOpacity>
//                     <Text style={styles.menuFooter}>App Version 1.0</Text>
//                 </ScrollView>
//             )}
//         </Animated.View>
//     );
// };

// const styles = StyleSheet.create({
//     header: {
//         position: 'absolute', // Make it absolute to cover other screens
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 100, // High z-index to ensure it's on top of other content
//         backgroundColor: '#094268',
//         overflow: 'hidden',
//         elevation: 5,
//         paddingHorizontal: 15,
//         width: '100%',
//     },
//     navContent: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     logo: {
//         width: 150,
//         height: 70,
//         resizeMode: 'contain',
//     },
//     hamburgerButton: {
//         padding: 10,
//         borderRadius: 25,
//         elevation: 5,
//         height: 60,
//         width: 40,
//     },
//     hamburgerText: {
//         fontSize: 30,
//         color: '#fff',
//     },
//     menu: {
//         backgroundColor: '#094268',
//         paddingTop: 20,
//         width: '100%',
//         height: '100%', // Cover the full screen
//         position: 'absolute', // Ensure it overlays all content
//         top: 0,
//         left: 0,
//         zIndex: 100, // High z-index for menu content
//     },
//     menuItem: {
//         paddingVertical: 15,
//         paddingHorizontal: 20,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         backgroundColor: '#f5f5f5',
//         marginBottom: 5,
//         borderRadius: 5,
//         marginHorizontal: 10,
//     },
//     menuItemText: {
//         fontSize: 18,
//         color: '#094268',
//     },
//     menuFooter: {
//         marginTop: 20,
//         textAlign: 'center',
//         fontSize: 16,
//         color: '#888',
//         paddingVertical: 10,
//     },
// });

// export default NavBar;

import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const NavBar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const animatedHeight = useRef(new Animated.Value(60)).current;
    const navigation = useNavigation();

    const toggleMenu = () => {
        const menuHeight = Dimensions.get('window').height; // Full screen height
        const closedHeight = 60;

        setMenuVisible(!isMenuVisible);

        Animated.timing(animatedHeight, {
            toValue: isMenuVisible ? closedHeight : menuHeight,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start();
    };

    const closeMenu = () => {
        setMenuVisible(false);
        Animated.timing(animatedHeight, {
            toValue: 60, // Back to the original header height
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start();
    };

    return (
        <Animated.View style={[styles.header, { height: animatedHeight }]}>
            <View style={styles.navContent}>
                <Image source={{ uri: 'C:\Users\param\OneDrive\Desktop\MoneySentral\MoneySentral\src\components\Logoimg.png' }} style={styles.logo} />

                {!isMenuVisible && (
                    <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerButton}>
                        <Text style={styles.hamburgerText}>&#9776;</Text>
                    </TouchableOpacity>
                )}

                {isMenuVisible && (
                    <TouchableOpacity onPress={closeMenu} style={styles.crossButton}>
                        <Text style={styles.crossText}>✕</Text>
                    </TouchableOpacity>
                )}
            </View>

            {isMenuVisible && (
                <View style={styles.menu}>
                    <ScrollView contentContainerStyle={styles.menuContent}>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text style={styles.menuItemText}>How it Works</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text style={styles.menuItemText}>Savings Calculator</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.menuItem}
                            onPress={() => navigation.navigate('SignUpScreen')}
                        >
                            <Text style={styles.menuItemText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.menuItem}
                            onPress={() => navigation.navigate('SignInScreen')}
                        >
                            <Text style={styles.menuItemText}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.menuFooter}>App Version 1.0</Text>
                    </ScrollView>
                </View>
            )}
        </Animated.View>
    );
};
const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#094268', // Navbar background
        overflow: 'hidden',
        elevation: 5,
        paddingHorizontal: 15,
        paddingTop: 15, // Adjust padding for more space at the top
        paddingBottom: 20, // Adjust padding for the bottom
        width: '100%',
        borderBottomLeftRadius: 40, // Left curve
        borderBottomRightRadius: 40, // Right curve
    },
    navContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 120, // Adjusted width for a more comfortable size
        height: 50,  // Adjusted height for proper fit
        resizeMode: 'contain',
        marginLeft: 10, // Added margin to the left for better spacing
    },
    hamburgerButton: {
       
        paddingBottom:20,
        borderRadius: 25,
        elevation: 5,
        height: 60,
        width: 40,
        justifyContent: 'center', // Align the icon vertically
        marginRight: 10, // Add margin to the right to avoid overlap
    },
    hamburgerText: {
        fontSize: 30,
        color: '#fff',
    },
    crossButton: {
        position: 'absolute',
        top: 15, // Adjusted padding from the top for better placement
        right: 15, // Adjusted padding from the right for better placement
        paddingRight:20,
        borderRadius: 25,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 101,
    },
    crossText: {
        fontSize: 30,
        color: '#fff',
    },
    menu: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%', 
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        justifyContent: 'center',
    },
    menuContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: 60,
    },
    menuItem: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 5,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    menuItemText: {
        fontSize: 18,
        color: '#094268',
        textAlign: 'center',
    },
    menuFooter: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        paddingVertical: 10,
    },
});


export default NavBar;
