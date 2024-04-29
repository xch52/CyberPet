import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState, useEffect } from 'react';


export default function SellCard({ image, title, petclass, description, price, states, deadline, alt }) {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(deadline));
        }, 1000);

        return () => clearInterval(interval);
    }, [deadline]);

    function calculateTimeLeft(endTime) {
        const difference = endTime * 1000 - new Date().getTime(); // 将时间戳转换为毫秒并计算差值
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            return { timeOut: true }; // 如果差值小于等于0，返回一个标志表示时间已经超时
        }

        return timeLeft;
    }

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt={alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center',  justifyContent: 'space-between' }}>
                        <Typography variant="h6" color="text.secondary" component="div">
                            {petclass}
                        </Typography>
                        {timeLeft.timeOut ? ( // 检查是否超时
                            <Typography variant="subtitle2" color="error" style={{ marginLeft: '0.5rem' }}>
                                Time Out
                            </Typography>
                        ) : (
                            <Typography variant="subtitle2" color="green" style={{ marginLeft: '0.5rem' }}>
                                {` Deadline: ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
                            </Typography>
                        )}
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography variant="h6" color="text.secondary" sx={{ flexGrow: 1, color: 'rgba(255, 0, 0, 0.6)' }}>
                    {price}
                </Typography>
                <Button
                    size="large"
                    color="primary"
                    sx={{
                        border: '2px solid', // 设置边框的大小和样式
                        borderColor: 'primary.main', // 边框颜色，使用主题中的颜色
                        padding: '8px 30px', // 增加按钮的内边距来使按钮变大
                        fontSize: '1rem', // 可以调整字体大小来进一步改变按钮的大小感
                    }}
                >
                    Bid
                </Button>
            </CardActions>
        </Card>

    );
}