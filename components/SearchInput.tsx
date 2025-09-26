'use client'
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });
                router.push(newUrl, { scroll: false });
            } else {
                if (pathname === '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });
                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, router, searchParams, pathname]);

    return (
        <div className="relative flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:border-blue-500 w-full max-w-md">
            <Image src="/icons/search.svg" alt="search" width={18} height={18} className="opacity-60" />
            <input
                type="text"
                value={searchQuery}
                className="outline-none w-full text-gray-800 placeholder-gray-400 text-sm"
                placeholder="Search companions..."
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
}

export default SearchInput;
