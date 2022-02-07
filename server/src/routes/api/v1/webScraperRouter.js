import express from 'express'
import scrapeData from '../../../ScrapeData.js'

const webScraperRouter = new express.Router()

webScraperRouter.get('/', async (req, res) => {
  const projects = await scrapeData()
  console.log(projects)
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ projects })
})

export default webScraperRouter