import http from 'k6/http'

export const options = {
    scenarios: {
        restFranken: {
            executor: 'constant-vus',
            exec: 'restFrankenBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function restFrankenBE() {
    http.get('http://rest.pastilulus.me/api/reports')
}