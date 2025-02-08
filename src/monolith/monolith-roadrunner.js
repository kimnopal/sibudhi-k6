import http from 'k6/http'
export const options = {
    scenarios: {
        monolithRoadRunner: {
            executor: 'constant-vus',
            exec: 'monolithRoadRunnerTest',
            vus: 10,
            duration: '30s',
        }
    }
};

export function monolithRoadRunnerTest() {
    http.get('http://monolith.pastilulus.me/reports')
}