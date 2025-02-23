// const path = require('path') // did not worked as it is ES module not commonJS
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Upload Test', () =>{
    it('Simple upload test', async () =>{
        //Open Url
        await browser.url('https://the-internet.herokuapp.com/upload')

        //Store test file path
        const filePath = path.join(__dirname, '../data/logotitle.png')

        //upload the test file
        const remoteFilePath = await browser.uploadFile(filePath)

        //set my file path value in the inout
        await $('#file-upload').setValue(remoteFilePath)
        await $('#file-submit').click()

        //assertion
        await expect($('h3')).toHaveText('File Uploaded!')
    })
    
})