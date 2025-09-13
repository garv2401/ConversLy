'use client'
import React, {useEffect, useState} from 'react';
import {Select,SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {subjects} from "@/constants";
import {formUrlQuery,removeKeysFromUrlQuery} from "@jsmastery/utils";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const SubjectFilter = () => {
  const [currentSubject,setCurrentSubject]=useState("");
  const searchParams=useSearchParams();
  const router=useRouter();
  const pathname=usePathname();

  useEffect(()=>{

    if(currentSubject!=='all'){
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: currentSubject,
      });
      router.push(newUrl,{scroll:false})
    }else{
      if(pathname==='/companions'){
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["subject"],
        });
        router.push(newUrl, { scroll: false });
      }
    }
  },[currentSubject,searchParams,pathname,router])


  return (
    <div>
      <Select onValueChange={(val)=>setCurrentSubject(val)}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject"/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {
          subjects?.map((sub)=>{
            return(
                <SelectItem value={sub} key={sub} className="capitalize">
                  {sub}
                </SelectItem>
            )
          })
        }
      </SelectContent>
    </Select>
    </div>
  );
}

export default SubjectFilter;
