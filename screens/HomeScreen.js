import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, Platform, StatusBar, ScrollView } from "react-native";
import { theme } from "../themes";
import { CalendarDaysIcon, MagnifyingGlassIcon, MapPinIcon} from 'react-native-heroicons/outline'
import { useState } from "react";
export default function HomeScreen() {
    const [showSearch, toggleSearch ] = useState(false);
    const [locations, setLocations] = ([1,2,3]);

    const handleLocation = (loc) =>{
        console.log(loc)
    }
    return(
        <View className=' flex flex-1 relative'>
            <Image blurRadius={50} source={require('../assets/images/bg.png')} className='absolute h-full w-full' />
            <SafeAreaView className='flex flex-1' style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20 : 0}} >

                {/* search location */}
                <View style={{height:'7%'}} className='mx-4 relative z-50'>
                    <View className='flex-row justify-end items-center rounded-full' 
                    style={{backgroundColor: showSearch ?theme.bgWhite(0.2):'transparent'}} >
                        {
                            showSearch ?(
                                <TextInput placeholder="Search city" placeholderTextColor={'light gray'}
                        className='pl-6 h-10 text-base text-white'/>
                            ):null
                        }
                        <TouchableOpacity
                        style={{backgroundColor: theme.bgWhite(0.3)}}
                        className='rounded-full p-3 m-1'
                        >
                            <MagnifyingGlassIcon size='23' color='white' />
                        </TouchableOpacity>
                    </View>
                    {
                        locations.length>0 && showSearch ? (
                            <View className='absolute w-full bg-gray-300 top-16 rounded-3xl'>
                                {
                                    locations.map((loc,index)=>{
                                        let showBorder = index+1 !=locations.length;
                                        let borderClass = showBorder ? 'border-b-2 border-b-gray-400':''
                                        return(<TouchableOpacity key={index} className={borderClass+'flex-row items-center border-0 p-3 px-4 mb-1'}
                                            onPress={()=>handleLocation(loc)}
                                        >
                                            <MapPinIcon size='20' color='gray'/>
                                            <Text className='text-black text-lg ml-2'>London, United kingdom</Text>
                                        </TouchableOpacity>)
                                    })
                                }
                            </View>
                        ) : null
                    }
                </View>


                {/* forecast section */}
                <View className="mx-4 flex justify-around flex-1 mb-2">
                    {/* location */}
                    <Text className='text-white text-center text-2xl font-bold'>
                        London,
                        <Text className='text-lg font-semibold text-gray-300'>
                            United kingdom
                        </Text>
                    </Text>
                    {/* Weather image */}
                    <View className="flex-row justify-center">
                        <Image
                            source={require('../assets/images/partlycloudy.png')}
                            className='w-52 h-52'
                            />
                    </View>
                    {/* degree celcius */}
                    <View className='space-y-2'>
                        <Text className="text-center font-bold text-white text-6xl ml-5 pt-1">
                            23&#176;
                        </Text>
                        <Text className='text-center text-white text-xl tracking-widest'>
                            Partly Cloudy
                        </Text>
                    </View>
                    {/* other stats */}
                    <View className='flex-row justify-between mx-4'>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/wind.png')} className='h-6 w-6'/>
                            <Text className='text-white font-semibold text-base'>
                                22km
                            </Text>
                        </View>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/drop.png')} className='h-6 w-6'/>
                            <Text className='text-white font-semibold text-base'>
                                23%
                            </Text>
                        </View>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/sun.png')} className='h-6 w-6'/>
                            <Text className='text-white font-semibold text-base'>
                                6:05 AM
                            </Text>
                        </View>
                    </View>
                    {/* forecast for next days */}
                    <View className='mb-2 space-y-3'>
                        <View className='flex-row items-center mx-5 space-x-2' >
                            <CalendarDaysIcon size='22' color='white'/>
                            <Text className='text-white text-base'>Daily forecast</Text>
                        </View>
                        <ScrollView horizontal contentContainerStyle={{paddingHorizontal:0}}
                        showsHorizontalScrollIndicator={false}
                        >
                            <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-2'
                            style={{backgroundColor: theme.bgWhite(0.15)}}>
                                <Image source={require('../assets/images/heavyrain.png')}
                                className='h-8 w-8' />
                                <Text className='text-white'> Monday</Text>
                                <Text className='text-white text-lg font-semibold'>
                                    13&#176;
                                </Text>
                            </View>

                            <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-2'
                            style={{backgroundColor: theme.bgWhite(0.15)}}>
                                <Image source={require('../assets/images/heavyrain.png')}
                                className='h-8 w-8' />
                                <Text className='text-white'> Monday</Text>
                                <Text className='text-white text-lg font-semibold'>
                                    13&#176;
                                </Text>
                            </View>
                            <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-2'
                            style={{backgroundColor: theme.bgWhite(0.15)}}>
                                <Image source={require('../assets/images/heavyrain.png')}
                                className='h-8 w-8' />
                                <Text className='text-white'> Monday</Text>
                                <Text className='text-white text-lg font-semibold'>
                                    13&#176;
                                </Text>
                            </View>
                            <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-2'
                            style={{backgroundColor: theme.bgWhite(0.15)}}>
                                <Image source={require('../assets/images/heavyrain.png')}
                                className='h-8 w-8' />
                                <Text className='text-white'> Monday</Text>
                                <Text className='text-white text-lg font-semibold'>
                                    13&#176;
                                </Text>
                            </View>
                            <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-2'
                            style={{backgroundColor: theme.bgWhite(0.15)}}>
                                <Image source={require('../assets/images/heavyrain.png')}
                                className='h-8 w-8' />
                                <Text className='text-white'> Monday</Text>
                                <Text className='text-white text-lg font-semibold'>
                                    13&#176;
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}