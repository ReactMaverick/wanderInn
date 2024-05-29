import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';

const useNavigationHistory = () => {
    const router = useRouter();
    const history = useRef([]);

    useEffect(() => {
        const handleRouteChange = (url) => {
            history.current.push(url);
        };

        const unsubscribe = router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            unsubscribe();
        };
    }, [router]);

    const getPreviousRoute = () => {
        if (history.current.length > 1) {
            return history.current[history.current.length - 2];
        }
        return null;
    };

    const goBack = () => {
        if (history.current.length > 1) {
            history.current.pop(); // Remove current route
            const previousRoute = history.current.pop(); // Get previous route
            router.push(previousRoute);
        } else {
            // No previous route, fallback to home or any other default route
            router.push('/home');
        }
    };

    return { getPreviousRoute, goBack };
};

export default useNavigationHistory;
