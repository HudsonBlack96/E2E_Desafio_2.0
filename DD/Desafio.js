import { Builder, By, Key } from "selenium-webdriver"
import { should } from "chai";
should();

async function AdicionarTarefa() {
    //Abrir o navegador
    let driver = await new Builder().forBrowser("firefox").build();

    //Navegar até o site
    await driver.get('http://www.automationpractice.pl/index.php')

    //Clicar no Sign in do Site
    await driver.findElement(By.xpath("/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a")).click()
    //logar na Sua conta
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[1]/input")).sendKeys("hudson89.silva@gmail.com")
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[2]/input")).sendKeys("black1234")
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/p[2]/button/span")).click()
    //Assertion 1
    let URL = await driver.getCurrentUrl()
    if (URL.includes("http://www.automationpractice.pl/index.php?controller=my-account")) {
        console.log('Url Correta 👍.')
        //Find the t-shirt white 
        await driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[1]/a")).click()
        //wait 
        await driver.sleep(1000)
        //selection 'S'
        await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div[1]/div[2]/div[1]/form/div/div[2]/ul/li[1]/div/span/input")).click()
        //wait
        await driver.sleep(2000)
        // selection 'white'
        await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div[1]/div[2]/div[1]/form/div/div[4]/ul/li[2]/input[1]")).click()
        //wait
        await driver.sleep(3000)
        //Selection the clothing
        await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]/div/div[2]/div[2]/a/span")).click()
        await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]/div/div[2]/div[2]/a/span")).click()
        //wait
        await driver.sleep(3000)
        //selection the Collor
        await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[4]/form/div/div[2]/div/fieldset[2]/div/ul/li[1]/a")).click()
        //Assertion 2
        let Stock = await driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div/div/div/div[3]/p[4]/span')).getText()
        if (Stock.includes("In stock")) {
            console.log('Deu Certo 1👍')
            //selection in 'Add to cart'
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[4]/form/div/div[3]/div[1]/p/button/span")).click()
            //wait
            await driver.sleep(2500)
            //click in proceed to checkout
            await driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/div[4]/a/span")).click()
            //click in proceed to checkout again
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/p[2]/a[1]/span")).click()
            //click in proceed to checkout again
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/form/p/button/span")).click()
            //click in I agree to the terms...
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/form/div/p[2]/div/span/input")).click()
            //wait
            await driver.sleep(1000)
            //click in proceed to checkout again
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/form/p/button/span")).click()
            //click in pay bay bank wire
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[3]/div[1]/div/p/a")).click()
            //click in i confirm my order
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/form/p/button/span")).click()
            //wait
            await driver.sleep(2000)
            //assertion 3
            let confirmation = await driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div/p[1]')).getText()
            if (confirmation.includes("Your order on My Shop is complete.")) {
                console.log('Deu Certo 2👍.')
                await driver.sleep(2000)
                await driver.quit();
            }
            else {
                console.log('Deu mistake')
                await driver.quit();
            }
        } else {
            console.log('não deu Certo')
            await driver.quit();
        }
    } else {
        console.log('Deu mistake')
        await driver.quit();
    }
}
AdicionarTarefa() 