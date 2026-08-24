const puppeteer = require('puppeteer-core');

(async () => {
  try {
    console.log("Launching Edge...");
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      headless: 'new'
    });
    
    const page = await browser.newPage();
    console.log("Navigating to http://localhost:8000...");
    await page.goto('http://localhost:8000', {waitUntil: 'networkidle0'});
    
    console.log("Generating PDF...");
    await page.pdf({ 
        path: 'ZeelKundariya_Resume.pdf', 
        format: 'A4', 
        printBackground: true,
        pageRanges: '1',
        margin: { top: '5mm', right: '5mm', bottom: '5mm', left: '5mm' }
    });
    
    await browser.close();
    console.log("PDF generated successfully: ZeelKundariya_Resume.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
})();
