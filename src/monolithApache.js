import { browser } from 'k6/browser'
import { check, sleep } from 'k6'
// import { faker } from '@faker-js/faker'
// import { faker } from "https://esm.sh/@faker-js/faker@v9.4.0"

const data = [
    {
        service_id: "1",
        service_type_id: []
    },
    {
        service_id: "2",
        service_type_id: ["1", "2", "3", "4", "5", "6"]
    },
    {
        service_id: "3",
        service_type_id: []
    },
]

const statusData = ['penggugat', 'tergugat']

export const options = {
    scenarios: {
        ui: {
            executor: 'constant-vus',
            vus: 1,
            duration: '10s',
            options: {
                browser: {
                    type: 'chromium',
                },
            },
        },
    },
    thresholds: {
        checks: ['rate==1.0'],
    },
};

export default async function () {
    const service = data[Math.floor(Math.random() * data.length)]
    const service_id = service.service_id
    const service_type_id = service.service_type_id.length > 0 ? service_id.service_type_id[Math.floor(Math.random() * service_id.service_type_id.length)] : ''
    const status = statusData[Math.floor(Math.random() * statusData.length)]

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:8000/reports')

    await page.locator('#tambah-data').click()

    await page.locator('#name').type("Naufal")
    await page.locator('#email').type("naufal@gmail.com")
    await page.locator('#no_handphone').type("081234567890")
    await page.locator('#service_id').selectOption(service_id)
    await page.locator('#service_type_id').selectOption(service_type_id)
    await page.locator('#status').selectOption(status)
    await page.locator('#description').type("lorem ipsum dolor sit amet")

    await page.locator('#submit').click()
    // sleep(1)
    // check(page, {
    //     'navigation successful': () => page.url() === 'http://localhost:8000'
    // });
}