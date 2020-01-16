import { useEffect } from 'react';

const useWillUnmount = (f: any) => useEffect(() => () => f && f(), []);

export default useWillUnmount;
