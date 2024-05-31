import React from 'react';
import apidashboard from '../assets/images/api_dashboard.png';
import iotdashboard from '../assets/images/iot_dashboard.png';
import Nheader from '../components/Nheader';

function Dashboard() {
    return (
        <React.Fragment>
            <Nheader />
            <div className="blogs__wraper bg-white-300 py-20 px-20">
    <div className="flex justify-between items-stretch">
        <div className="blogs bg-white mr-5 flex-1">
            <img src={apidashboard} alt="" className="w-full h-auto" style={{ height: "300px" }} />
            <div className="p-5">
                <h1 className="text-2xl font-bold text-blue-900 py-2">Dashboard With API</h1>
                <p className="bg-white text-sm text-black text-justify"> Displays data fetched from external sources via  Openmeteo API, providing users with visual insights. It employs user-friendly interfaces and real-time updates, facilitating data interpretation,through data visualization techniques.
                 The system stores data in an Excel sheet, which can be viewed by users to see how weather conditions have changed over time.
                
                </p>   
                <a href="/dash" className="py-2 px-3 mt-4 px-6 text-white bg-blue-500 inline-block rounded">Show</a>
            </div>
        </div>
        <div className="blogs bg-white mr-5 flex-1">
            <img src={iotdashboard} alt="" className="w-full h-auto" style={{ height: "300px" }} />
            <div className="p-5">
                <h1 className="text-2xl font-bold text-blue-900 py-2">Dashboard With IOT</h1>
                <p className="bg-white text-sm text-black text-justify"><p>Data is fetched from sensors (BMP-180,FC-22,ESP-8266) and displayed on the dashboard, allowing users to see current weather conditions including temperature, humidity, dew point, surface pressure,altitude and air quality index (AQI)
                facilitating data interpretation,through data visualization techniques.</p>
                 </p>
                 <a href="/login" className="py-2 px-3 mt-4 px-6 text-white bg-blue-500 inline-block rounded">Show</a>
            </div>
        </div>
    </div>
</div>

        </React.Fragment>
    );
}

export default Dashboard;
