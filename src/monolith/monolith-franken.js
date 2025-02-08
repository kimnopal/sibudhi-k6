import http from 'k6/http'
export const options = {
    scenarios: {
        monolithFranken: {
            executor: 'constant-vus',
            exec: 'monolithFrankenTest',
            vus: 10,
            duration: '30s',
        }
    }
};

export function monolithFrankenTest() {
    http.get('http://monolith.pastilulus.me/reports')
}