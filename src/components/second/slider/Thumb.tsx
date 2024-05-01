import Image from "next/image"

type PropType = {
    selected: boolean
    index: string
    onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
    const { selected, index, onClick } = props
    return (
        <div
            className={'embla-thumbs__slide'.concat(
                selected ? ' embla-thumbs__slide--selected' : ''
            )}
        >
        
                <div  onClick={onClick} className="relative w-8 h-8 embla-thumbs__slide__number">
                    <Image src={index} fill alt={index} />
                </div>
         
        </div>
    )
}