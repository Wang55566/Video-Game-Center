import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'
import useData from './useData';

export interface Genre {
  id: number,
  name: string,
  image_background: string
}


// const useGenres = () => useQuery({
//   queryKey: ['genres'],
//   queryFn: () =>
//     apiClient
//       .get<Genre[]>('/genres')
//       .then(res => res.data)
// })

const useGenres = () => useData<Genre>('/genres');

export default useGenres
