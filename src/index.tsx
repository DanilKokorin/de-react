import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { hotels, Hotel } from './data/hotels'

const hotelsList: Hotel[] = hotels

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<App {...hotels} />)