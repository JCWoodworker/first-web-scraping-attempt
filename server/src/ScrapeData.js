import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs'

const url = "https://github.com/trending?since=weekly"

const scrapeData = async () => {
  try {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)

    const getEntireProject = $("*[class = 'Box-row']")
    const gitHubTrendingArray = []
    
    getEntireProject.each((idx, element) => {
      const project = { name: "", language: "", description: "", contributors: [] }

      const getProjectName = $("*[class = 'h3 lh-condensed']").get(idx)
      const getLanguage = $("*[itemprop = 'programmingLanguage']").get(idx)
      const getDescription = $("*[class = 'col-9 color-fg-muted my-1 pr-4']").get(idx)

      project.name = $(getProjectName).text().split('/')[1].trim()
      if (getLanguage) {
        project.language = $(getLanguage).text().trim()
      } else {
        project.language = "No Language Specified"
      }
      project.description = $(getDescription).text().trim()

      gitHubTrendingArray.push(project)
    })

    
    fs.writeFile("GitHubTrending.json", JSON.stringify(gitHubTrendingArray, null, 2), (err) => {
      if (err) {
        console.error(err)
        return
      }
    })
  
    
    gitHubTrendingArray.forEach(project => {
        console.log(`
        Project:  ${project.name}
        ---------------
        ** ${project.description}
        Primary Language: ${project.language}
        `)
      })
      console.log(` There are ${getEntireProject.length} repositories on the list.`)
      
    return gitHubTrendingArray

  } catch (err) {
    console.error(err)
  }
}

export default scrapeData