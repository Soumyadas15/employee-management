export const Avatar = () => {
    return (
        <div className="
                w-10
                h-10 
                overflow-hidden 
                flex 
                items-center 
                justify-center 
                rounded-full
        ">
            <img
                src={'/avatar.jpg'}
                className="rounded-full"
                width={64}
                
            />
        </div>
    )
}