import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full py-5 text-center">
            <p>Power By <Link href={"https://github.com/Dalepp888/portfolio-json/"} target='_blank' className="font-bold">Template</Link></p>
        </div>
    )
}