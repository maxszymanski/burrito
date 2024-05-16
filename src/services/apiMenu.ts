import supabase from './supabase'

export async function getMenu() {
    const { data, error } = await supabase.from('menu').select('*')
    if (error) {
        console.error(error)
        throw new Error('Dane nie mogą zostać załadowane')
    }
    return data
}
