"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import Image from "next/image"
export function Footer() {
  const { t } = useI18n()

  const footerLinks = {
    [t("product")]: [
      { label: t("features"), href: "#features" },
      { label: t("security"), href: "#security" },
      { label: t("pricing"), href: "#pricing" },
      { label: "Integrations", href: "#" },
    ],
    [t("company")]: [
      { label: t("about"), href: "/about" },
      { label: t("blog"), href: "/blog" },
      { label: t("careers"), href: "/careers" },
      { label: t("press"), href: "#" },
    ],
    [t("resources")]: [
      { label: t("documentation"), href: "/documentation" },
      { label: t("helpCenter"), href: "#" },
      { label: t("apiReference"), href: "#" },
      { label: t("status"), href: "#" },
    ],
    [t("legal")]: [
      { label: t("privacy"), href: "/privacy" },
      { label: t("terms"), href: "/terms" },
      { label: t("security"), href: "#security" },
      { label: t("cookies"), href: "#" },
    ],
  }

  return (
    <footer className="py-16 lg:py-20 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
    <Image
      src="/fundi.png"
      alt="Fundi Logo"
      width={32}    // correspond à w-8 (8*4=32px)
      height={32}   // correspond à h-8
      className="object-cover"
    />
  </div>
  <span className="font-semibold text-xl text-foreground tracking-tight">Fvundi</span>
</Link>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footerDesc")}</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fvundi. {t("allRightsReserved")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
