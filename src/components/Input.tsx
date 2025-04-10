"use client"

import { useSession } from 'next-auth/react';

export default function Input() {
    const { data: session } = useSession();

    if (!session) return null;
    return (
        <div>Input</div>
    )
}