import { PiGithubLogo, PiLinkedinLogo, PiEnvelopeSimple } from 'react-icons/pi'
import { footer, site } from '../../data/portfolio'

const iconMap = {
  github: PiGithubLogo,
  linkedin: PiLinkedinLogo,
  email: PiEnvelopeSimple,
}

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <p className="text-sm text-text-muted">
          {footer.text} · {site.year}
        </p>

        <div className="flex items-center gap-5">
          {footer.social.map((item) => {
            const Icon = iconMap[item.type]
            return (
              <a
                key={item.type}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-text-muted transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
