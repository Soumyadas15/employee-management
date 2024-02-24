interface HeadingProps{
    title: string;
    subHeading: string;
}

export const Heading = ({
    title,
    subHeading,
}: HeadingProps) => {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div>
                <h1 className="text-neutral-400">{subHeading}</h1>
            </div>
        </div>
    )
}