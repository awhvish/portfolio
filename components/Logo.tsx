import Link from "next/link";

function CodeIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  
const Logo = () => {
  return (
    <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
    <CodeIcon className="w-6 h-6" />
    <span>Portfolio</span>
  </Link>
  )
}

export default Logo
