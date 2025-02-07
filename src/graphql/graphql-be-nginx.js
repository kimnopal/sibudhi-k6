import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlNginx: {
            executor: 'constant-vus',
            exec: 'graphqlNginxBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlNginxBE() {
    http.get('http://graphql.pastilulus.me/graphql?query=query+Reports{reports{id,name,email,status,service{name},serviceType{name},noHandphone,description}}')
}