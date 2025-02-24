// const path = require('path') // did not worked as it is ES module not commonJS
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("Upload Test", () => {
  it("Simple upload test", async () => {
    //Open Url
    await browser.url("https://the-internet.herokuapp.com/upload");

    //Store test file path
    const filePath = path.join(__dirname, "../data/logotitle.png");

    //upload the test file
    const remoteFilePath = await browser.uploadFile(filePath);

    //set my file path value in the inout
    await $("#file-upload").setValue(remoteFilePath);
    await $("#file-submit").click();

    //assertion
    await expect($("h3")).toHaveText("File Uploaded!");
  });

  it("Upload in a hidden input", async () => {
    //open url
    await browser.url("/cart");

    //store filepath
    const filePath = path.join(__dirname, "../data/logotitle.png");

    //upload test file
    const remoteFilePath = await browser.uploadFile(filePath);

    //remove hidden class
    await browser.execute("document.querySelector('#upfile_1').className = ''");

    //set my file path value in the inout
    await $("#upfile_1").setValue(remoteFilePath);
    await $("#upload_1").click();

    //assertion
    await expect($("#wfu_messageblock_header_1_label_1")).toHaveText([expect.stringContaining("uploaded successfully")]);
  });
});
