import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, Platform, StatusBar } from "react-native";
import { theme } from "../themes";
import { MagnifyingGlassIcon, MapPinIcon} from 'react-native-heroicons/outline'
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
            </SafeAreaView>
        </View>
    )
}