import http from 'k6/http'

export const options = {
    scenarios: {
        restApache: {
            executor: 'constant-vus',
            exec: 'restApacheFE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function restApacheFE() {
    http.get('http://frontend.pastilulus.me/reports/rest')
}