'use client';

import HotelSideNav from '@/components/SideNavHotel';
import { ApiHost } from '@/constants/url_consts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Eatofy: React.FC = () => {

  const [isLoading, setLoading]:any = useState(false);
  const [Sections, setSections]: any = useState([]);
  const [Tables, setTables]: any = useState([]);
  const route = useRouter();
  const hotel_id = sessionStorage.getItem('hotel_id');

  const fetchSections = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${ApiHost}/api/hotel/sections/management/fetch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'hotel_id': hotel_id }),
      });

      const data = await response.json();
      if (data.returncode === 200) {
        console.log("Sections", data);
        setSections(data.output);
      } else {
        console.log("Failed to fetch sections");
      }

    } catch (e: any) {
      throw console.error(e);
    } finally{
      setLoading(false);
    }
  }

  const fetchTables = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${ApiHost}/api/hotel/tables/management/fetch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'hotel_id': hotel_id }),
      });

      const data = await response.json();
      if (data.returncode === 200) {
        console.log("Tables", data);
        setTables(data.output);
      } else {
        console.log("Failed to fetch Tables");
      }

    } catch (e: any) {
      throw console.error(e);
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSections();
    fetchTables();
  }, []);

  return (
    <>
      <HotelSideNav />
      {
        isLoading
          ?
          <div aria-label="Loading..." role="status" className="flex justify-center items-center w-full h-screen">
            <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
              <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="24"></line>
              <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="24"></line>
              <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="24"></line>
              <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
            </svg>
            <span className="text-4xl font-medium text-gray-500">Loading...</span>
          </div>
          :
          <div className="ml-[70px]">
            <div className="w-full p-4 h-full bg-white">
              <div className="flex justify-center items-center mb-4">
                <div className="text-3xl text-black font-bold">
                  RESTAURANT
                  <span className='mx-2'>
                    🏨
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center my-8 p-4">
                <div className='flex items-center gap-8'>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-[30px]">TakeAway</button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-[30px]">Delivery</button>
                  <button className="bg-gradient-to-r from-gray-800 to-red-500 text-white px-4 py-2 rounded-[30px]">Zomato</button>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-[30px]">Swiggy</button>
                  <Link
                    href="/hotels/table_reservation"
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >Book table</Link>
                </div>
                <div className='inline-flex gap-4'>
                  <div>
                    <span className="bg-red-500 w-3 h-3 block border border-black"></span>
                    <span>Booked</span>
                  </div>
                  <div>
                    <span className="bg-green-500 w-3 h-3 block border border-black"></span>
                    <span>Payment</span>
                  </div>
                  <div>
                    <span className="bg-gray-500 w-3 h-3 block border border-black"></span>
                    <span>Reservation</span>
                  </div>
                </div>
              </div>

              <div>
                {
                  Sections.map((sections: any) => (
                    <div
                      key={sections.id}
                      className="my-4"
                    >
                      <span className="bg-red-200 text-black px-4 py-2 rounded-lg">{sections.SectionName}</span>
                      <div className="grid grid-cols-6 ml-5 gap-4 my-8">
                        {
                          Tables.filter((tables: any) => tables.SectionId === sections.id)
                            .map((table: any) => (
                              <div
                                key={table.id}
                                onClick={
                                  () => {
                                    sessionStorage.setItem('table_id', table.id);
                                    sessionStorage.setItem('section_id', sections.id)
                                    route.push('/hotels/menu');
                                  }
                                }
                                className={`w-full h-40 inline-flex flex-col justify-center items-center p-4 rounded-lg border ${table.Status === 'Booked' ? 'border-red-500' : 'border-black'}`}
                              >
                                <div>{table.TableName}</div>
                                <span className='block'>{table.PersonsOccupiable}</span>
                              </div>
                            ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default Eatofy;
