import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, MapPin, Loader2, Wind, Droplets } from 'lucide-react';

interface WeatherData {
    temp: number;
    windSpeed: number;
    humidity?: number; // OpenMeteo basic current_weather doesn't always have humidity in the simplest call, but we'll check
    conditionCode: number;
    city: string;
}

export const WeatherWidget = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation not supported');
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;

                    // 1. Get Weather
                    const weatherRes = await fetch(
                        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
                    );
                    const weatherData = await weatherRes.json();

                    // 2. Get City Name (Reverse Geocoding)
                    const geoRes = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                    );
                    const geoData = await geoRes.json();

                    setWeather({
                        temp: weatherData.current_weather.temperature,
                        windSpeed: weatherData.current_weather.windspeed,
                        conditionCode: weatherData.current_weather.weathercode,
                        city: geoData.city || geoData.locality || 'Unknown Location',
                    });
                    setLoading(false);
                } catch (err) {
                    console.error('Weather fetch error:', err);
                    setError('Failed to fetch weather');
                    setLoading(false);
                }
            },
            (err) => {
                console.error('Location generic error:', err);
                setError('Location access denied');
                setLoading(false);
            }
        );
    }, []);

    if (error) return null; // Hide if error to avoid clutter

    const getWeatherIcon = (code: number) => {
        if (code <= 3) return <Sun className="w-4 h-4 text-yellow-500" />;
        if (code <= 48) return <Cloud className="w-4 h-4 text-gray-400" />;
        return <CloudRain className="w-4 h-4 text-blue-400" />;
    };

    return (
        <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2 font-sans animate-in fade-in duration-700">
            {loading ? (
                <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-xs text-gray-400">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span>Locating...</span>
                </div>
            ) : weather ? (
                <>
                    <div className="bg-black/60 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-4 shadow-2xl transition-all hover:bg-black/80 group">
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 text-white font-bold text-lg leading-none">
                                {getWeatherIcon(weather.conditionCode)}
                                <span>{weather.temp}°C</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-gray-400 uppercase tracking-wider mt-1 group-hover:text-danube-blue transition-colors">
                                <MapPin className="w-3 h-3" />
                                {weather.city}
                            </div>
                        </div>

                        <div className="h-8 w-px bg-white/10 mx-1"></div>

                        <div className="flex flex-col gap-1 text-[10px] text-gray-500 font-mono">
                            <div className="flex items-center gap-1">
                                <Wind className="w-3 h-3" />
                                {weather.windSpeed} km/h
                            </div>
                            <div className="flex items-center gap-1 text-green-500">
                                <span className="online-dot w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                OPTIMAL
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};
