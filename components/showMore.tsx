"use client";
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/router'
import React from 'react'
import Custombutton from './Custombutton'
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, isNext }:ShowMoreProps) => {
    const router = useRouter();
  
    const handleNavigation = () => {
      // Calculate the new limit based on the page number and navigation type
      const newLimit = (pageNumber + 1) * 10;
  
      // Update the "limit" search parameter in the URL with the new value
      const newPathname = updateSearchParams("limit", `${newLimit}`);
      
      router.push(newPathname);
    };
  
    return (
      <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
          <Custombutton
            btntype="button"
            title="Show More"
            containerStyle="bg-primary-blue rounded-full text-white"
            handleClick={handleNavigation}
          />
        )}
      </div>
    );
  };
  
  export default ShowMore;