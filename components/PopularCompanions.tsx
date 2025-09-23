"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CompanionCard from "./CompanionCard";
import { getSubjectColor } from "@/lib/utils";

export default function PopularCompanions({ companions }: { companions: Companion[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 320; // card width + gap
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full">
            {/* Left Button */}
            <button
                onClick={() => scroll("left")}
                className="absolute top-1/2 -translate-y-1/2 z-10
                   -left-3 sm:-left-6 md:-left-10
                   rounded-full bg-purple-600 p-2 text-white shadow-lg
                   hover:bg-purple-700 transition-colors"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Cards Section */}
            <section
                ref={scrollRef}
                className="home-section flex gap-4 px-6 py-7 overflow-hidden scroll-smooth rounded-4xl"
            >
                {companions.map((companion) => (
                    <div
                        key={companion.id}
                        className="w-64 h-80 sm:w-72 sm:h-96 flex-shrink-0
             transform transition-transform duration-500
             hover:rotate-y-6 hover:rotate-x-3 hover:scale-105
             hover:shadow-lg hover:shadow-purple-400
             rounded-4xl overflow-hidden"
                        style={{ perspective: "1000px" }}
                    >
                        <CompanionCard
                            {...companion}
                            color={getSubjectColor(companion.subject)}
                        />
                    </div>

                ))}
            </section>

            {/* Right Button */}
            <button
                onClick={() => scroll("right")}
                className="absolute top-1/2 -translate-y-1/2 z-10
                   -right-3 sm:-right-6 md:-right-10
                   rounded-full bg-purple-600 p-2 text-white shadow-lg
                   hover:bg-purple-700 transition-colors"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}
