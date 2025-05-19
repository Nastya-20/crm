import React from 'react';
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-start pt-[120px] pl-[140px]  pb-[120px] bg-[#030014] w-[1720px] h-[960xp]">
      <div className="flex-col items-start w-[947px] h-[720px]">
      <p className="bg-[#373641] rounded-full  w-[165px] h-[80px] pt-[9px] pl-[30px] pb-[16px] pr-[30px] text-[40px] text-white font-medium ">2025</p>
      <h1 className="text-[140px] text-[#fff] font-bold mt-[160px] mb-[16px] leading-[100%]">CRM</h1>
      <p className="text-5xl text-[rgb(163,163,173)] font-medium mb-[160px]">for interships</p>
      <button className="bg-[#5b86a1] rounded-full w-[323px] h-[93px] pt-[6px] pl-[30px] pb-[16px] pr-[30px] text-[50px] text-white font-medium tracking-wide">Intership</button>
      </div>
      <Image width={700} height={340} border-17 src="/images/Website placeholder.png" alt="website" />
    </main>
  );
}
