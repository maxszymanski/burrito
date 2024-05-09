import supabase from './supabase'

export async function getOrder(id) {
    const { data, error } = await supabase
        .from('bookings')
        .select('*, cabins(*), guests(*)')
        .eq('id', id)
        .single()

    if (error) {
        console.error(error)
        throw new Error('Nie znaleziono zamówienia')
    }

    return data
}
