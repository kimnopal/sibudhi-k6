import http from 'k6/http'
export const options = {
    scenarios: {
        monolithSwoole: {
            executor: 'constant-vus',
            exec: 'monolithSwooleTest',
            vus: 10,
            duration: '30s',
        }
    }
};

export function monolithSwooleTest() {
    http.get('http://monolith.pastilulus.me/reports')
}