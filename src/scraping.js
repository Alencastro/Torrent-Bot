import puppeteer from 'puppeteer'
import fs from 'fs' 

const viaTorrent = {
    url: ['https://viatorrents.com/filmes/', 'https://viatorrents.com/filmes/2/', 'https://viatorrents.com/filmes/3/',
    'https://viatorrents.com/desenhos/', 'https://viatorrents.com/desenhos/2/', 'https://viatorrents.com/desenhos/3/',
    'https://viatorrents.com/series/',
    'https://viatorrents.com/series/', 'https://viatorrents.com/series/2/', 'https://viatorrents.com/series/3/',
    'https://viatorrents.com/series/'],
    
    imgUrlScrape: async (actualUrl, jsonFileName)=>{
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage()
        await page.setViewport({width: 1200, height: 1000})
        await page.goto(viaTorrent.url[actualUrl], { waitUntil: 'networkidle2'})
    
        let imgObj = await page.evaluate(() => {
            let imgUrl = []
            for (let c = 0; c < 20; c++) {
                imgUrl.push(document.getElementsByClassName('capa_larga align-middle')[c].querySelector('img').src)
            }
         
            return{
                imgUrl,   
            }
    
        })
        let imgList = imgObj.imgUrl

            fs.writeFile(jsonFileName, JSON.stringify(imgList, null, 2), err => {
            if(err) throw new Error('samething went wrong')
    
            console.log('well done')
            })

        await browser.close()
    },
    
    linkScrape: async (actualUrl, jsonFileName)=>{
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage()
        await page.setViewport({width: 1200, height: 1000})
        await page.goto(viaTorrent.url[actualUrl], { waitUntil: 'networkidle2'})
    
        let linkObj = await page.evaluate(() => {
            let liknk = []
            for (let c = 0; c < 20; c++) {
                liknk.push(document.getElementsByClassName('capa_larga align-middle')[c].querySelector('a').href)
            }
            return{
                liknk,   
            }
    
        })
        
        let linkList = linkObj.liknk
    
        fs.writeFile(jsonFileName, JSON.stringify(linkList, null, 2), err => {
            if(err) throw new Error('samething went wrong')
    
            console.log('well done')
        })

        await browser.close()
    },

}

const comandoTorrent = {
    url: ['https://comandotorrentshd.net/category/biografia/'],
    imgUrlScrape: async (actualUrl, jsonFileName)=>{
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage()
        await page.setViewport({width: 1200, height: 1000})
        await page.goto(comandoTorrent.url[actualUrl], { waitUntil: 'networkidle2'})
    
        let imgObj = await page.evaluate(() => {
            let imgUrl = []
            for (let c = 0; c < 10; c++) {
                imgUrl.push(document.getElementsByClassName('entry-content cf')[c].querySelector('img').src)
            }
         
            return{
                imgUrl,   
            }
    
        })
        let imgList = imgObj.imgUrl

            fs.writeFile(jsonFileName, JSON.stringify(imgList, null, 2), err => {
            if(err) throw new Error('samething went wrong')
    
            console.log('well done')
            })

        await browser.close()
    },
    linkScrape: async (actualUrl, jsonFileName)=>{
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage()
        await page.setViewport({width: 1200, height: 1000})
        await page.goto(comandoTorrent.url[actualUrl], { waitUntil: 'networkidle2'})
    
        let linkObj = await page.evaluate(() => {
            let liknk = []
            for (let c = 0; c < 10; c++) {
                liknk.push(document.getElementsByClassName('more-link')[c].href)
            }
            return{
                liknk,   
            }
    
        })
        
        let linkList = linkObj.liknk
    
        fs.writeFile(jsonFileName, JSON.stringify(linkList, null, 2), err => {
            if(err) throw new Error('samething went wrong')
    
            console.log('well done')
        })

        await browser.close()
    },
}

const call = () =>{
    // viaTorrent.imgUrlScrape(0, 'json/viaTorrentFilmsImg.json')
    // viaTorrent.imgUrlScrape(1, 'json/viaTorrentFilmsImg1.json')
    // viaTorrent.imgUrlScrape(2, 'json/viaTorrentFilmsImg2.json')

    // viaTorrent.linkScrape(0, 'json/viaTorrentFilmsLink.json')
    // viaTorrent.linkScrape(1, 'json/viaTorrentFilmsLink1.json')
    // viaTorrent.linkScrape(2, 'json/viaTorrentFilmsLink2.json')


    // viaTorrent.imgUrlScrape(3, 'json/viaTorrentDesenhosImg.json')
    // viaTorrent.imgUrlScrape(4, 'json/viaTorrentDesenhosImg1.json')
    // viaTorrent.imgUrlScrape(5, 'json/viaTorrentDesenhosImg2.json')

    // viaTorrent.linkScrape(3, 'json/viaTorrentDesenhosLink.json')
    // viaTorrent.linkScrape(4, 'json/viaTorrentDesenhosLink1.json')
    // viaTorrent.linkScrape(5, 'json/viaTorrentDesenhosLink2.json')
    
    
    // viaTorrent.imgUrlScrape(6, 'json/viaTorrentSeriesImg.json')
    // viaTorrent.imgUrlScrape(7, 'json/viaTorrentSeriesImg1.json')
    // viaTorrent.imgUrlScrape(8, 'json/viaTorrentSeriesImg2.json')

    // viaTorrent.linkScrape(6, 'json/viaTorrentSeriesLink.json')
    // viaTorrent.linkScrape(7, 'json/viaTorrentSeriesLink1.json')
    // viaTorrent.linkScrape(8, 'json/viaTorrentSeriesLink2.json')


    //comandoTorrent.imgUrlScrape(0, 'json/comandoTorrentBiografiasImg.json')
    comandoTorrent.linkScrape(0, 'json/comandoTorrentBiografiasLink.json')
    //baixarFilms.imgUrlScrape()
}

call()