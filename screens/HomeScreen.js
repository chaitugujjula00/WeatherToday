import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, Platform, StatusBar, ScrollView, ProgressBarAndroidBase } from "react-native";
import { theme } from "../themes";
import { CalendarDaysIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { useCallback, useEffect, useState } from "react";
import { debounce } from 'lodash'
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import { weatherImages } from "../constants";
import * as Progress from 'react-native-progress'
import { getData, storeData } from "../utils/asyncStorage";
export default function HomeScreen() {
    const [showSearch, toggleSearch ] = useState(false);
    const [locations, setLocations] = useState([]);
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true)
    const handleLocation = (loc) =>{
        console.log(loc)
        setLocations([])
        setLoading(true);
        fetchWeatherForecast({
            cityName: loc.name,
            days:'7'
        }).then(data=>{
            setWeather(data);
            setLoading(false);
            storeData('city', loc?.name)
            console.log('got forecast :',data)
        })
    }
    const handleSearch = value=>{
        // fetch locations
        fetchLocations({cityName: value}).then(data=>{
            console.log('got locations: ',data)
            setLocations(data);
        })
    }

    useEffect(()=>{
        fetchMyWeatherData();
    },[]);

    const fetchMyWeatherData = async() =>{
        let myCity = await getData('city');
        let cityName = 'Guntur';
        if(myCity) cityName = myCity;
        fetchWeatherForecast({
            cityName,
            days:'7'
        }).then((data)=>{
            setWeather(data);
            setLoading(false);
        })
    }
    const handleTextDebounce = useCallback(debounce(handleSearch, 1200),[])

    const {current, location} = weather;
    return(
        <View className=' flex flex-1 relative'>
            <Image blurRadius={50} source={require('../assets/images/bg.png')} className='absolute h-full w-full' />
                {loading ? (
                    <View className='flex-1 flex-row justify-center items-center'>
                        <Progress.CircleSnail thickness={10} size={140} color='#0bb3b2' />
                    </View>
                ):(
                    <SafeAreaView className='flex flex-1' style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20 : 0}} >

                {/* search location */}
                <View style={{height:'7%'}} className='mx-4 relative z-50'>
                    <View className='flex-row flex-1 justify-end items-center rounded-full'
                    style={{backgroundColor: showSearch ?theme.bgWhite(0.2):'transparent'}} >
                        {
                            showSearch ?(
                                <TextInput
                                onChangeText={handleTextDebounce}
                                placeholder="Search city" placeholderTextColor={'light gray'}
                        className='pl-6 h-10 py-1 w-[85%] text-base text-white'/>
                            ):null
                        }
                        <TouchableOpacity
                        onPress={()=>toggleSearch(!showSearch)}
                        style={{backgroundColor: theme.bgWhite(0.3)}}
                        className='rounded-full p-3 m-1'
                        >
                            <MagnifyingGlassIcon size='23' color='white' />
                        </TouchableOpacity>
                    </View>
                    {
                        locations!=[] && showSearch ? (
                            <View className='absolute w-full bg-gray-300 top-16 rounded-3xl'>
                                {
                                    locations.map((loc,index)=>{
                                        let showBorder = index+1 !=locations.length;
                                        let borderClass = showBorder ? 'border-b-2 border-b-gray-400':''
                                        return(<TouchableOpacity key={index} className={'flex-row items-center border-0 p-3 px-4 mb-1'+borderClass}
                                            onPress={()=>{handleLocation(loc);toggleSearch(!showSearch)}}
                                        >
                                            <MapPinIcon size='20' color='gray'/>
                                            <Text className='text-black text-lg ml-2'>{loc?.name}, {loc?.country}</Text>
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
                        {location?.name},
                        <Text className='text-lg font-semibold text-gray-300'>
                            {" "+location?.country}
                        </Text>
                    </Text>
                    {/* Weather image */}
                    <View className="flex-row justify-center">
                        <Image
                            source={weatherImages[current?.condition?.text]}
                            className='w-52 h-52'
                            />
                    </View>
                    {/* degree celcius */}
                    <View className='space-y-2'>
                        <Text className="text-center font-bold text-white text-6xl ml-5 pt-1">
                            {current?.temp_c}&#176;
                        </Text>
                        <Text className='text-center text-white text-xl tracking-widest'>
                            {current?.condition?.text}
                        </Text>
                    </View>
                    {/* other stats */}
                    <View className='flex-row justify-between mx-4'>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/wind.png')} className='h-6 w-6'/>
                            <Text className='text-white font-semibold text-base'>
                                {current?.wind_kph}km
                            </Text>
                        </View>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/drop.png')} className='h-6 w-6'/>
                            <Text className='text-white font-semibold text-base'>
                                {current?.humidity}%
                            </Text>
                        </View>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/sun.png')} className='h-6 w-6'/>
                            <Text className='text-white font-semibold text-base'>
                                {weather?.forecast?.forecastday[0]?.astro?.sunrise}
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
                            {weather?.forecast?.forecastday?.map((item, index)=>{
                                let date = new Date(item.date);
                                let options = {weekday:'long'};
                                let dayName = date.toLocaleDateString('en-US', options)
                                dayName = dayName.split(',')[0]
                                return(
                                    <View key={index} className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-2'
                                     style={{backgroundColor: theme.bgWhite(0.15)}}>
                                    <Image source={weatherImages[item?.day?.condition?.text]}
                                    className='h-9 w-9' />
                                    <Text className='text-white'>{dayName}</Text>
                                    <Text className='text-white text-lg font-semibold'>
                                        {item?.day?.avgtemp_c}&#176;
                                    </Text>
                                    {/* <Text>{item?.day?.condition?.text}</Text> */}
                            </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
                )}
        </View>
    )
}