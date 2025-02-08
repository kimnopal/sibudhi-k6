import http from 'k6/http'

export const options = {
    scenarios: {
        restRoadRunner: {
            executor: 'constant-vus',
            exec: 'restRoadRunnerBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function restRoadRunnerBE() {
    http.get('http://rest.pastilulus.me/api/reports')
}