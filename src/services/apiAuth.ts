import supabase, { supabaseUrl } from './supabase'

export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if (error) throw new Error(error.message)
    return data
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession() //wezmie dane z localstorage
    //sprawdzamy w protected rout
    if (!session.session) return null

    const { data, error } = await supabase.auth.getUser()
    if (error) throw new Error(error.message)
    return data?.user
}
export async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
}
export async function signUp({
    email,
    password,
    userName,
    street,
    zipCode,
    city,
    phone,
    orders,
    ordersHistory,
}) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                userName,
                street,
                zipCode,
                city,
                phone,
                orders,
                ordersHistory,
            },
        },
    })
    if (error) throw new Error(error.message)
    return data
}
export async function passwordRecovery(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw new Error(error.message)
}

export async function updateUser({
    userName = 'Anonim',
    street = 'brak ulicy',
    zipCode = 'brak kodu pocztowego',
    city = 'brak miejscowości',
    phone = 'brak numeru tel.',
    avatar = '/user2.jpg',
}) {
    // 1 Update password OR fullNAme,
    let updateData
    if (userName || street || zipCode || city || phone)
        updateData = {
            data: {
                userName: userName || 'Anonim',
                street: street || '',
                zipCode: zipCode || '',
                city: city || 'brak miejscowości',
                phone: phone || 'brak numeru tel.',
            },
        }

    const { data, error } = await supabase.auth.updateUser(updateData)
    if (error) throw new Error(error.message)

    const avatarFile = avatar[0]
    if (!avatarFile || avatarFile === '/') return data

    // 2 Upload the avatar
    const fileName = `avatar-${data.user.id}-${Math.random()}`

    const { error: storageError } = await supabase.storage
        .from('avatars')
        .upload(fileName, avatarFile)

    if (storageError) throw new Error(storageError.message)

    // 3 Update avatar in user
    const { error: error2 } = await supabase.auth.updateUser({
        data: {
            avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
        },
    })
    if (error2) throw new Error(error2.message)
    return updateUser
}
