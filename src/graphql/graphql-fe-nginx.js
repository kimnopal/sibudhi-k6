import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlNginx: {
            executor: 'constant-vus',
            exec: 'graphqlNginxFE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlNginxFE() {
    http.get('http://103.186.1.33/reports/graphql')
}