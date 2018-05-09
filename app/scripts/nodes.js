'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETH: "ETH",
    ETC: "ETC",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'eth_mew': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'myetherapi.com',
        'lib': new nodes.customNode('https://api.myetherapi.com/eth', '')
    },
    'tou_touristcoin': {
        'name': 'TOU',
        'blockExplorerTX': 'https://explorer.touristcoin.net/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.touristcoin.net/addr/[[address]]',
        'type': nodes.nodeTypes.TOU,
        'eip155': true,
        'chainId': 666999,
        'tokenList': require('./tokens/touTokens.json'),
        'abiList': require('./abiDefinitions/touAbi.json'),
        'service': 'Tourist Coin',
        'lib': new nodes.customNode('https://node.touristcoin.net', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
