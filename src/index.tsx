import { createRoot } from 'react-dom/client'

import 'styles/main.css'
import App from 'app'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
