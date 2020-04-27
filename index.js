const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    { name: "products", url: "https://o229t.sse.codesandbox.io/" },
    { name: "users", url: "https://65ohu.sse.codesandbox.io/" }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
