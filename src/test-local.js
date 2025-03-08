import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlSwoole: {
            executor: 'constant-vus',
            exec: 'graphqlSwooleBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlSwooleBE() {
    http.get('http://localhost')
}