import supabase from './supabase'

export async function getOrders(userId) {
    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('UserId', userId)

    if (error) {
        console.error(error)
        throw new Error('Dane nie mogą zostać załadowane')
    }
    return data
}

export async function getOrder(id) {
    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        console.error(error)
        throw new Error('Nie znaleziono zamówienia')
    }
    return data
}

export async function createOrder(newOrder) {
    const { data, error } = await supabase
        .from('orders')
        .insert([newOrder])
        .select('*')

    if (error) {
        console.error(error)
        throw new Error('Wystąpił problem podczas składania zamówienia')
    }

    return data
}
export async function updateStatus(status) {
    const { data, error } = await supabase
        .from('orders')
        .update({ status: status })
        .eq('id', 981586)
        .select('*')

    if (error) {
        throw new Error('Wystąpił problem podczas aktualizacji zamówienia')
    }
    return data
}
