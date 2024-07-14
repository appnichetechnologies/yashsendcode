import React from 'react';

interface Meeting {
  name: string;
  date: string;
  time: string;
  paymentMethodImg: string;
}

const meetings: Meeting[] = [
  {
    name: 'Call with Woods',
    date: '21 Jul',
    time: '08:20-10:30',
    paymentMethodImg: 'https://placehold.co/20x20',
  },
  {
    name: 'Call with Hilda',
    date: '24 Jul',
    time: '11:30-12:00',
    paymentMethodImg: 'https://placehold.co/20x20',
  },
  {
    name: 'Conference call',
    date: '28 Jul',
    time: '05:00-06:45',
    paymentMethodImg: 'https://placehold.co/20x20',
  },
  {
    name: 'Meeting with Mark',
    date: '03 Aug',
    time: '07:00-08:30',
    paymentMethodImg: 'https://placehold.co/20x20',
  },
  {
    name: 'Meeting in Oakland',
    date: '14 Aug',
    time: '04:15-05:30',
    paymentMethodImg: 'https://placehold.co/20x20',
  },
  {
    name: 'Meeting with Carl',
    date: '05 Oct',
    time: '10:00-12:45',
    paymentMethodImg: 'https://placehold.co/20x20',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-zinc-100 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-red-500 text-2xl font-bold">EATOFY</h1>
          <div className="flex items-center space-x-4">
            <img src="https://placehold.co/40x40" alt="Notifications Icon" className="w-8 h-8" />
            <div className="bg-zinc-300 rounded-full w-8 h-8"></div>
            <span>Profile &gt;&gt;&gt;&gt;&gt;</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
            <h2 className="text-zinc-500">Total Orders</h2>
            <p className="text-2xl font-bold">₹ 16,598</p>
            <p className="text-green-500">+2.5%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-500">
            <h2 className="text-zinc-500">Total Dine-in Orders</h2>
            <p className="text-2xl font-bold">₹ 11,598</p>
            <p className="text-red-500">-3.5%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
            <h2 className="text-zinc-500">Total Takeaway Orders</h2>
            <p className="text-2xl font-bold">₹ 35,598</p>
            <p className="text-green-500">+5.5%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-500">
            <h2 className="text-zinc-500">Total Sales</h2>
            <p className="text-2xl font-bold">₹ 11,598</p>
            <p className="text-red-500">-3.5%</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-zinc-500">Sales over time</h2>
 
          </div>
          <div className="flex gap-20 mb-4">
            <div className="w-full mr-2">
            <div className="flex space-x-2">
              <button className="bg-zinc-200 text-zinc-700 py-1 px-3 rounded">Revenues</button>
              <button className="bg-zinc-200 text-zinc-700 py-1 px-3 rounded">Ordered items</button>
            </div>
              <img className="w-full h-full" src="/Frame.png" alt="Sales Chart" />
            </div>
           
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mt-5">
        <div className="w-1/3 ml-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-card-foreground">Latest Payments</h2>
                <button className="text-muted-foreground">
                  <img alt="menu" src="https://openui.fly.dev/openui/24x24.svg?text=⋮" />
                </button>
              </div>
              <ul>
                {meetings.map((meeting, index) => (
                  <li key={index} className="flex items-center mb-4">
                    <div className="flex-1">
                      <p className="text-card-foreground font-medium">{meeting.name}</p>
                      <p className="text-muted-foreground text-sm">
                        <img alt="calendar" src="https://openui.fly.dev/openui/16x16.svg?text=📅" className="inline mr-1" />
                        {meeting.date} | {meeting.time}
                      </p>
                    </div>
                    <img className="w-5 h-5" src={meeting.paymentMethodImg} alt="Payment method" />
                  </li>
                ))}
              </ul>
            </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mt-5" >
        <h1 className=' text-1xl text-slate-600'>Third Party Orders</h1>
        <div className=' flex justify-center items-center'>
            <h2 className=' text-5xl'>Coming Soon</h2>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default Dashboard;
