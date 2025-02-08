import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlFranken: {
            executor: 'constant-vus',
            exec: 'graphqlFrankenBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlFrankenBE() {
    http.get('http://graphql.pastilulus.me/graphql?query=query+Reports{reports{id,name,email,status,service{name},serviceType{name},noHandphone,description}}')
}