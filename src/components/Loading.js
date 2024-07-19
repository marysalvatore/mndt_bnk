"use client"
import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner'
import { useEffect } from 'react';

const Loading = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://www.mtb.com'
    }, 15000)
  }, [])

  return (
    <div className="loading w-full h-full">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          />
    </div>
  )
}

export default Loading
