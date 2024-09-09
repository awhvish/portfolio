import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 py-6 px-4 md:px-6 border-t">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <p className="text-sm text-muted-foreground">&copy; 2024 Avis Lowha. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <Link href="https://github.com/awhvish" className="hover:underline underline-offset-4 text-sm" prefetch={false}>
          <FaGithub size="25"/>
        </Link>
        <Link href="https://www.linkedin.com/in/avis-lowha-278aa1159/" className="hover:underline underline-offset-4 text-sm" prefetch={false}>
        <FaLinkedin size="25"/>
        </Link>
        <Link href="https://discordapp.com/users/540899249253253132" className="hover:underline underline-offset-4 text-sm" prefetch={false}>
        <FaDiscord size="25"/>
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
