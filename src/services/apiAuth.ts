import supabase from './supabase'

export async function Login({ email, password }) {
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
export async function signOut(userId) {
    console.log(userId)
    const { data, error } = await supabase.auth.admin.deleteUser(userId)
    if (error) throw new Error(error.message)
    return data
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
            },
        },
    })
    if (error) throw new Error(error.message)
    return data
}
export async function updateUser({ userName, street, zipCode, city, phone }) {
    // 1 Update password OR fullNAme,
    let updateData

    if (userName || street || zipCode || city || phone)
        updateData = { data: { userName, street, zipCode, city, phone } }

    const { data, error } = await supabase.auth.updateUser(updateData)

    if (error) throw new Error(error.message)
    // if (!avatar) return data

    // // 2 Upload the avatar
    // const fileName = `avatar-${data.user.id}-${Math.random()}`

    // const { error: storageError } = await supabase.storage
    //     .from('avatars')
    //     .upload(fileName, avatar)

    // if (storageError) throw new Error(storageError.message)

    // // 3 Update avatar in user
    // const { error: error2, data: updatedAvatar } =
    //     await supabase.auth.updateUser({
    //         data: {
    //             avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    //         },
    //     })
    return updateUser
}
