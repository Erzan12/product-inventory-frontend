import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export const useCart = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await api.get('http://localhost:3001/api/orders/my-cart');
            return res.data;
        }
    })
}