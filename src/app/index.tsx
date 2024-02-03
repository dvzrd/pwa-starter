import { Button } from 'chad-ui'

import Avatar from 'components/Avatar'
import Footer from 'components/Footer'
import Header from 'components/Header'
import logo from 'assets/logo.svg'

const randoms = [
  [1, 2],
  [3, 4, 5],
  [6, 7]
]

const App = () => (
  <div className="relative flex flex-col overflow-hidden bg-background">
    <Header />
    <main className="min-h-screen flex-1 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <header className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <div className="my-4">
            <Avatar size="large" src={logo} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            PWA Starter
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            A Progressive Web App Starter Template built with Vite, React,
            TypeScript, TailwindCSS, Chad UI, and more.
          </p>
        </div>
        <div>
          <div className="my-10">
            <Button asChild size="lg">
              <a href="vscode://">Start Building Now</a>
            </Button>
            <div
              aria-hidden="true"
              className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  {randoms.map((random, number) => (
                    <div
                      key={`random-${random[number]}`}
                      className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      {random.map((number) => (
                        <div
                          key={`random-${number}`}
                          className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                        >
                          <img
                            src={`https://picsum.photos/600?random=${number}`}
                            alt={`PWA Starter Hero Image ${number}`}
                            className="size-full bg-indigo-100 object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
    <Footer />
  </div>
)

export default App
