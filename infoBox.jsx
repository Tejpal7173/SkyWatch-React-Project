import { Info } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

// Replace these with your actual image URLs
const RAIN_URL = "data:image/jpeg;base64,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";
const HOT_URL = "data:image/jpeg;base64,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";
const COLD_URL ="data:image/jpeg;base64,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";


export default function InfoBox({ city, temp, humidity, tempMin, tempMax, feelsLike, weather }) {
   
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={humidity > 80 ? RAIN_URL : temp > 15 ? HOT_URL : COLD_URL}
                       
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {city} {humidity > 80 ? <ThunderstormIcon /> : temp > 15 ? <WbSunnyIcon /> : <SevereColdIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {temp}&deg;C</p>
                            <p>Humidity = {humidity}%</p>
                            <p>Min Temp = {tempMin}&deg;C</p>
                            <p>Max Temp = {tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{weather}</i> and feels like = {feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}




