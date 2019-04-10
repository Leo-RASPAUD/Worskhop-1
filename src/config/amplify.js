const REGION = 'ap-southeast-2';
const GRAPHQL_ENDPOINT = 'https://gephn3x5evbdhdyoxvcec4fktq.appsync-api.ap-southeast-2.amazonaws.com/graphql';

export default {
  Auth: {
    identityPoolId: 'ap-southeast-2:6949651a-b61b-471d-a88e-49875868d99d',
    region: REGION,
    userPoolId: 'ap-southeast-2_DJnO8T7ad',
    userPoolWebClientId: '4a644ldpdb1nt9b6rjb51nur3h',
  },
  aws_appsync_graphqlEndpoint: GRAPHQL_ENDPOINT,
  aws_appsync_region: REGION,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
};
