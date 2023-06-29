import Link from "next/link";

export default function CustomButtonContact({children,classType}) {
    return <Link href="/contact" className='btn orange-btn'>{children}</Link> 
}