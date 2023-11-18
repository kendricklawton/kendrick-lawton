'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the home page immediately
        router.push('/'); // Replace '/' with your home page route
    }, [router]);

    // This component will redirect immediately upon rendering
    return null;
}