import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full py-5 text-center">
            <p>Power By <Link href={"/"} className="font-bold">Template</Link></p>
        </div>
    )
}