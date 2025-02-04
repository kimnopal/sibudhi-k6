import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlApache: {
            executor: 'constant-vus',
            exec: 'graphqlApacheFE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlApacheFE() {
    http.get('http://103.186.1.33/reports/graphql')
}