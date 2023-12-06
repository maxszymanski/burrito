import supabase from './supabase'

export async function getMenu() {
	const { data, error } = await supabase.from('menu').select('*')
	if (error) {
		console.error(error)
		throw new Error('Settings could not be loaded')
	}
	return data
}
