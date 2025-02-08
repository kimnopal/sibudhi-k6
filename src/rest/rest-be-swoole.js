import http from 'k6/http'

export const options = {
    scenarios: {
        restSwoole: {
            executor: 'constant-vus',
            exec: 'restSwooleBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function restSwooleBE() {
    http.get('http://rest.pastilulus.me/api/reports')
}