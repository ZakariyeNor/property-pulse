import React from 'react';
import Image from 'next/image';


const PropertyHeaderImage = ({ image }) => {
  return (
  <>
    {/* <!-- Property Header Image --> */}
    <section>
      <div classNameName="container-xl m-auto">
        <div classNameName="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            alt=""
            classNameName="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
    </section>
  </>
  )
}

export default PropertyHeaderImage