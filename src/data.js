import { Images } from "./Images/Images";
import { StyleSheet, View } from 'react-native';

import Card from '../components/Card'; // Assuming Card.js is in the same directory

export const products =[
    {
        name:"ford mustang shelby gt500",
        price:"127,89$",
        info:"the motor is a supercharged 5.2-liter V-8 that summons 760 horsepower and 625 pound-feet of torque. That prodigious power twists the rear wheels through a clairvoyant seven-speed dual-clutch automatic transmission ",
        image:Images.mustang(),
    },
    {
        name:"bmw m5 cs",
        price:"142,000$",
        info:"Under the carbon bonnet, everything points to motor racing: With 467 kW (635 hp) and 750 Nm of torque, the M TwinPower Turbo 8-cylinder petrol engine accelerates the vehicle from 0 to 100 km/h in 3.0 seconds. Thanks to two TwinScroll turbochargers, High-Precision Injection and Valvetronic fully variable valve control, the 4.4-litre engine delivers energetic thrust even from low rpms, direct responsiveness and tremendous power.",
        image:Images.b1(),
    },
    {
        name:"bmw m4 comptiton",
        price:"114247.52$",
        info: "High-Performance M TwinPower Turbo inline-6-cylinder Max. output: 390 kW (530 hp) 0 to 100 km/h in 3.5 seconds 8-speed M Steptronic transmission with DrivelogicM xDrive four-wheel drive with Active M differential",
        image:Images.b2(),
    },
    {
        name:"porsche 911 gt3",
        price:"100000$",
        info: "386kw/525cp 3,2 0-100 297km/h",
        image:Images.p(),
    },
    
]