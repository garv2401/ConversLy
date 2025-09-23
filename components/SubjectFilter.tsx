'use client'
import React, { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { subjects } from "@/constants";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SubjectFilter = () => {
  const [currentSubject, setCurrentSubject] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (currentSubject !== 'all') {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: currentSubject,
      });
      router.push(newUrl, { scroll: false });
    } else {
      if (pathname === '/companions') {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["subject"],
        });
        router.push(newUrl, { scroll: false });
      }
    }
  }, [currentSubject, searchParams, pathname, router]);

  return (
      <div className="w-full max-w-xs">
        <Select onValueChange={(val) => setCurrentSubject(val)}>
          <SelectTrigger
              className="input w-full border border-gray-300 rounded-lg bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm hover:shadow-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          >
            <SelectValue placeholder="Select subject" />
          </SelectTrigger>
          <SelectContent className="bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto">
            <SelectItem value="all" className="capitalize text-gray-700 hover:bg-blue-100">
              All subjects
            </SelectItem>
            {subjects?.map((sub) => (
                <SelectItem
                    value={sub}
                    key={sub}
                    className="capitalize text-gray-700 hover:bg-blue-100"
                >
                  {sub}
                </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
  );
}

export default SubjectFilter;
