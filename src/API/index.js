const baseUrl = "https://api.weatherapi.com/v1/current.json?key=debe1bf52c364badb0555814240912"

export const getWeatherDataforCity = async ( city ) =>{
        const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
        return await response.json();
};

export const getWeatherDataforCurrentLocation = async ( lat, lon ) =>{
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
}