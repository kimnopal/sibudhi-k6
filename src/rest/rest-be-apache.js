import http from 'k6/http'

export const options = {
    scenarios: {
        restApache: {
            executor: 'constant-vus',
            exec: 'restApacheBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function restApacheBE() {
    http.get('http://rest.pastilulus.me/api/reports')
}