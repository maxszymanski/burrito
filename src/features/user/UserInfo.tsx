function UserInfo({ children }) {
    return (
        <div className="text-sm small:text-base text-left py-3 border-b border-yellow-500 px-8 my-3 space-y-1 rounded-3xl text-[rgb(255,255,255,0.8)]">
            {children}
        </div>
    )
}

export default UserInfo
