/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MARSjsG5CML
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { SVGProps } from "react"


export default function Projects() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid gap-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 flex justify-center">Web Development Skillset</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card rounded-lg p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <CodepenIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">React</h3>
                </div>
                <p className="text-muted-foreground">
                  Proficient in building modern, responsive web applications using React.js, including state management,
                  hooks, and component-based architecture.
                </p>
                <Progress value={90} className="h-3 rounded-full" />
              </div>
              <div className="bg-card rounded-lg p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <CodepenIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Next.js</h3>
                </div>
                <p className="text-muted-foreground">
                  Experienced in building server-rendered React applications with Next.js, leveraging features like
                  file-based routing, API routes, and static site generation.
                </p>
                <Progress value={85} className="h-3 rounded-full" />
              </div>
              <div className="bg-card rounded-lg p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <WindIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Tailwind CSS</h3>
                </div>
                <p className="text-muted-foreground">
                  Proficient in using Tailwind CSS, a utility-first CSS framework, to create responsive and visually
                  appealing user interfaces.
                </p>
                <Progress value={95} className="h-3 rounded-full" />
              </div>
              <div className="bg-card rounded-lg p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <TypeIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">TypeScript</h3>
                </div>
                <p className="text-muted-foreground">
                  Experienced in using TypeScript, a statically typed superset of JavaScript, to write more robust and
                  maintainable code.
                </p>
                <Progress value={80} className="h-3 rounded-full" />
              </div>
              <div className="bg-card rounded-lg p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <CodepenIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Node.js</h3>
                </div>
                <p className="text-muted-foreground">
                  Proficient in building server-side applications using Node.js, including creating APIs, handling HTTP
                  requests, and managing databases.
                </p>
                <Progress value={75} className="h-3 rounded-full" />
              </div>
              <div className="bg-card rounded-lg p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <DatabaseIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">MongoDB</h3>
                </div>
                <p className="text-muted-foreground">
                  Experienced in working with MongoDB, a NoSQL database, to store and manage application data, including
                  implementing CRUD operations and data modeling.
                </p>
                <Progress value={70} className="h-3 rounded-full" />
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-6 flex justify-center">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <WebhookIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <CardTitle>Personal Website</CardTitle>
                    <CardDescription>
                      A modern, responsive portfolio website built with Next.js and Tailwind CSS.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <CalendarIcon className="w-4 h-4" />
                      <span>August 2024</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <GithubIcon className="w-4 h-4" />
                      <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                        View on GitHub
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <AppWindowIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <CardTitle>Discord Auto Reactions Bot</CardTitle>
                    <CardDescription>
                      A full fledged discord bot made using python used to add Auto-Reactions to messages.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <CalendarIcon className="w-4 h-4" />
                      <span>September 2023</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <GithubIcon className="w-4 h-4" />
                      <Link href="https://github.com/awhvish/wastebot-v2" className="hover:underline underline-offset-4" prefetch={false}>
                        View on GitHub
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <ShoppingCartIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <CardTitle>Snake Game</CardTitle>
                    <CardDescription>
                      A copy of the Nokia keypad game we used to play as kids, made using C.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <CalendarIcon className="w-4 h-4" />
                      <span>June 2024</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <GithubIcon className="w-4 h-4" />
                      <Link href="https://github.com/awhvish/snake-game" className="hover:underline underline-offset-4" prefetch={false}>
                        View on GitHub
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function AppWindowIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  )
}


function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}




function CodepenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function TypeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function WebhookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  )
}


function WindIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}