import { cn } from 'chad-ui'

export interface IFooter {
  className?: string
}

const Footer = ({ className }: IFooter) => (
  <footer className={cn('flex bg-secondary p-4 md:p-6 xl:p-8', className)}>
    <div className="container">
      <a
        className="text-sm text-gray-500 underline transition-colors duration-200 hover:text-accent-foreground focus:text-accent-foreground"
        href="https://github.com/dvzrd/pwa-starter/"
        target="_blank"
        rel="noreferrer noopener"
      >
        PWA Starter Github
      </a>
    </div>
  </footer>
)

export default Footer
