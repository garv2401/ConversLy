import React from "react";
import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
    const { userId } = await auth();

    if (!userId) redirect("/sign-in");

    const canCreateCompanion = await newCompanionPermissions();

    return (
        <main className="flex min-h-screen w-full items-center justify-center px-4 py-6">
            {canCreateCompanion ? (
                <article className="w-full max-w-xl rounded-lg border p-6 shadow-sm">
                    <h1 className="mb-4 text-center text-2xl font-semibold">
                        Companion Builder
                    </h1>
                    <div className="space-y-4">
                        <CompanionForm />
                    </div>
                </article>
            ) : (
                <article className="flex w-full max-w-md flex-col items-center rounded-lg border p-6 text-center shadow-sm">
                    <Image
                        src="/images/limit.svg"
                        alt="Companion limit reached"
                        width={280}
                        height={180}
                        className="mb-4"
                    />
                    <div className="cta-badge mb-2">Upgrade Your Plan</div>
                    <h1 className="text-xl font-semibold">You have Reached Your Limit</h1>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                        You have reached your companion limit. Upgrade to create more
                        companions and access premium features.
                    </p>
                    <Link
                        href="/subscription"
                        className="btn-primary w-full rounded-md py-2 text-sm font-medium"
                    >
                        Upgrade My Plan
                    </Link>
                </article>
            )}
        </main>
    );
};

export default NewCompanion;
