import { MouseEventHandler } from "react";

export  interface Custombuttonprops{
    title:string;
    containerStyle?:string;
    btntype:"button" | "submit";
    textStyle?:string;
    rightIcon?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps{
    manufacturer:string,
    setManufacturer:(manufacturer:string)=>void;
}

export interface CarProps{
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}
export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
  
  export interface HomeProps {
    searchParams: FilterProps;
  }
  
export interface Options{
    title:string;
    value:string;
}
export interface Customfilterprops{
    title:string;
    options:Options[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }