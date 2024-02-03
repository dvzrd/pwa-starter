import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  cn
} from 'chad-ui'

import logo from 'assets/logo.svg'

const HeaderNavItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
))
HeaderNavItem.displayName = 'HeaderNavItem'

const Header = () => (
  <header className="flex flex-col bg-primary p-4">
    <NavigationMenu dir="ltr">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img src={logo} className="size-10" alt="logo" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      PWA Starter
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Built with Vite, React, TypeScript, TailwindCSS, Chad UI,
                      and more.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <HeaderNavItem href="/" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </HeaderNavItem>
              <HeaderNavItem href="/" title="Installation">
                How to install dependencies and structure your app.
              </HeaderNavItem>
              <HeaderNavItem href="/" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </HeaderNavItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <HeaderNavItem
                href="http://localhost:6006/?path=/docs/components-accordion--docs"
                title="Accordion"
              >
                A vertically stacked set of interactive headings that each
                reveal a section of content.
              </HeaderNavItem>
              <HeaderNavItem
                href="http://localhost:6006/?path=/docs/components-aspectratio--docs"
                title="Aspect Ratio"
              >
                Displays content within a desired ratio.
              </HeaderNavItem>
              <HeaderNavItem
                href="http://localhost:6006/?path=/docs/components-avatar--docs"
                title="Avatar"
              >
                An image element with a fallback for representing the user.
              </HeaderNavItem>
              <HeaderNavItem
                href="http://localhost:6006/?path=/docs/components-button--docs"
                title="Button"
              >
                Displays a button or a component that looks like a button.
              </HeaderNavItem>
              <HeaderNavItem
                href="http://localhost:6006/?path=/docs/components-card--docs"
                title="Card"
              >
                Displays a card with header, content, and footer.
              </HeaderNavItem>
              <HeaderNavItem
                href="http://localhost:6006/?path=/docs/components-carousel--docs"
                title="Carousel"
              >
                A carousel with motion and swipe built using Embla.
              </HeaderNavItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              href="https://github.com/dvzrd/pwa-starter/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Documentation
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
)

export default Header
