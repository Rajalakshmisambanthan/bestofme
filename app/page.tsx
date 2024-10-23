"use client"

import {Tabs, Tab} from "@nextui-org/react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[#D9E8D9]">
      <div>
      <Image
        src="/images/Union.png"
        width={49}
        height={43}
        alt="Picture of the author"
      />
      </div>
      <Tabs variant="underlined" aria-label="Tabs variants">
          <Tab  title="Photos"/>
          <Tab  title="Music"/>
          <Tab  title="Videos"/>
        </Tabs>
        <div>
        <Image
          src="/images/Vector.png"
          width={48}
          height={48}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
