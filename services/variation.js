import { api } from './api'

export const variation_services = {
    get_variation: async (page, pageSize, filters, ordering) => {
        const response = await api.post(`/assignment/query?page=${page}&pageSize=${pageSize}`,
        {
          filters,
          ordering,
        },
        )
        return response.data
    },
}
