import { Button } from "@/components/ui/button"
import { Instagram, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import BandMembers from "./components/band-members"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block pl-4">Shake Judy</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#band" className="transition-colors hover:text-foreground/80">
                Band
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6">
        <section id="about" className="py-8 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Shake Judy
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Bringing high-energy pop and hard rock covers to Southwest London. From classic anthems to modern
                hits, we deliver an electrifying live music experience that gets the crowd moving.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="https://www.instagram.com/shake.judy?igsh=MWsyd3Q5aWhjcG9ocg%3D%3D&utm_source=qr"
                target="_blank"
              >
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="mailto:ericsavoie119+shakejudy@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="band" className="py-8 md:py-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Meet the Band
            </h2>
            <BandMembers />
          </div>
        </section>

        <section id="contact" className="py-8 md:py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Shake Judy. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

