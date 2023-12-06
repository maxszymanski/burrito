import { useQuery } from '@tanstack/react-query'
import { getMenu } from '../../services/apiMenu'

export function useMenu() {
	const {
		isLoading,
		error,
		data: menu,
	} = useQuery({
		queryKey: ['menu'],
		queryFn: getMenu,
	})
	return { isLoading, error, menu }
}
