import http from 'k6/http'

export const options = {
    scenarios: {
        monolithApache: {
            executor: 'constant-vus',
            exec: 'monolithApacheTest',
            vus: 10,
            duration: '30s',
        },
    }
};

export function monolithApacheTest() {
    http.get('http://monolith.pastilulus.me/reports')
}