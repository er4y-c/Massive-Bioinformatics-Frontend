import { api } from './api'

export const variation_services = {
    get_variation: async (filters, ordering) => {
        const response = await api.post('/assignment/query',
        {
          filters,
          ordering,
        },
        )
        return response.data
    },
}
