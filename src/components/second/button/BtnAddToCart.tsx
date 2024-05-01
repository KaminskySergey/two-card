import { Button } from "../ui/button";

interface IBtnAddToCart {}

export default function BtnAddToCart({}: IBtnAddToCart) {
    return <Button style={{borderRadius: '10px'}} variant="default" className="flex w-full items-center justify-center bg-black rounded hover:bg-black text-white h-full">Add to cart</Button>
}
