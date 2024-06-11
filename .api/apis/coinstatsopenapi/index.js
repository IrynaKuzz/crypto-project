"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'coinstatsopenapi/1.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of cryptocurrencies supported by
     * CoinStats.</hr>
     *
     */
    SDK.prototype.getCoins = function (metadata) {
        return this.core.fetch('/coins', 'get', metadata);
    };
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve detailed information about a specific
     * cryptocurrency based on its unique identifier.</hr>
     *
     */
    SDK.prototype.getCoinById = function (metadata) {
        return this.core.fetch('/coins/{coinId}', 'get', metadata);
    };
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve chart data for a specific cryptocurrency
     * based on its unique identifier, specifying different time ranges.</hr>
     *
     */
    SDK.prototype.getCoinChartById = function (metadata) {
        return this.core.fetch('/coins/{coinId}/charts', 'get', metadata);
    };
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the historical average price for a specific
     * cryptocurrency based on its unique identifier and a specific date.</hr>
     *
     */
    SDK.prototype.getCoinAvgPrice = function (metadata) {
        return this.core.fetch('/coins/price/avg', 'get', metadata);
    };
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the historical price data for a specific
     * cryptocurrency on a particular exchange.</hr>
     *
     */
    SDK.prototype.getCoinExchangePrice = function (metadata) {
        return this.core.fetch('/coins/price/exchange', 'get', metadata);
    };
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of supported exchanges</hr>
     *
     */
    SDK.prototype.getTickerExchanges = function () {
        return this.core.fetch('/tickers/exchanges', 'get');
    };
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of tickers for a specific
     * cryptocurrency across different exchanges.</hr>
     *
     */
    SDK.prototype.getTickerMarkets = function (metadata) {
        return this.core.fetch('/tickers/markets', 'get', metadata);
    };
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of supported blockchains by
     * CoinStats</hr>
     *
     */
    SDK.prototype.getBlockchains = function () {
        return this.core.fetch('/wallet/blockchains', 'get');
    };
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the balance data for a provided wallet
     * address on a specific blockchain network</hr>
     *
     */
    SDK.prototype.getWalletBalance = function (metadata) {
        return this.core.fetch('/wallet/balance', 'get', metadata);
    };
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the syncing status of the wallet with the
     * blockchain network</hr>
     *
     */
    SDK.prototype.getWalletSyncStatus = function (metadata) {
        return this.core.fetch('/wallet/status', 'get', metadata);
    };
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve transaction data for a specific wallet</hr>
     *
     */
    SDK.prototype.getWalletTransactions = function (metadata) {
        return this.core.fetch('/wallet/transactions', 'get', metadata);
    };
    /**
     * <b> 8 credits per request </b>
     *             <hr>
     *         This endpoint initiates the syncing process to update transaction data for a
     * specific wallet. By making a PATCH request to this endpoint and providing the wallet
     * address as a parameter, you can trigger the syncing process and retrieve the latest
     * transaction data for the wallet.</hr>
     *
     */
    SDK.prototype.transactionsSync = function (metadata) {
        return this.core.fetch('/wallet/transactions', 'patch', metadata);
    };
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of supported exchange portfolio
     * connections by CoinStats</hr>
     *
     */
    SDK.prototype.getExchanges = function () {
        return this.core.fetch('/exchange/support', 'get');
    };
    /**
     * <b> 10 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the balance data for a provided by
     * Exchange</hr>
     *
     */
    SDK.prototype.getExchangeBalance = function (body) {
        return this.core.fetch('/exchange/balance', 'post', body);
    };
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the syncing status of the exchange
     * portfolio</hr>
     *
     */
    SDK.prototype.getExchangeSyncStatus = function (metadata) {
        return this.core.fetch('/exchange/status', 'get', metadata);
    };
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve transaction data for a specific
     * exchange</hr>
     *
     */
    SDK.prototype.getExchangeTransactions = function (metadata) {
        return this.core.fetch('/exchange/transactions', 'get', metadata);
    };
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of fiat currencies supported by
     * CoinStats</hr>
     *
     */
    SDK.prototype.getFiatCurrencies = function () {
        return this.core.fetch('/fiats', 'get');
    };
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of trending Non-Fungible Tokens
     * (NFTs) in the marketplace. Trending NFTs typically represent the most popular or highly
     * sought-after digital assets based on sales volume</hr>
     *
     */
    SDK.prototype.getTrendingNfts = function (metadata) {
        return this.core.fetch('/nft/trending', 'get', metadata);
    };
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of NFT assets owned by a specific
     * wallet address.</hr>
     *
     */
    SDK.prototype.getNftsByWallet = function (metadata) {
        return this.core.fetch('/nft/wallet/{address}/assets', 'get', metadata);
    };
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve an NFT collection info with a specific
     * collection address.</hr>
     *
     */
    SDK.prototype.getNftCollectionByAddress = function (metadata) {
        return this.core.fetch('/nft/collection/{collectionAddress}', 'get', metadata);
    };
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of NFT assets associated with a
     * specific NFT collection address.</hr>
     *
     */
    SDK.prototype.getNftCollectionAssetsByAddress = function (metadata) {
        return this.core.fetch('/nft/{collectionAddress}/assets', 'get', metadata);
    };
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve information about a specific NFT asset
     * based on the NFT collection address and token ID</hr>
     *
     */
    SDK.prototype.getNftCollectionAssetByTokenid = function (metadata) {
        return this.core.fetch('/nft/{collectionAddress}/asset/{tokenId}', 'get', metadata);
    };
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to get news sources.</hr>
     *
     */
    SDK.prototype.getNewsSources = function () {
        return this.core.fetch('/news/sources', 'get');
    };
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         This endpoint allows you to get news articles with pagination</hr>
     *
     */
    SDK.prototype.getNews = function (metadata) {
        return this.core.fetch('/news', 'get', metadata);
    };
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         This endpoint allows you to get news articles based on a type.</hr>
     *
     */
    SDK.prototype.getNewsByType = function (metadata) {
        return this.core.fetch('/news/type/{type}', 'get', metadata);
    };
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to get news by id.</hr>
     *
     */
    SDK.prototype.getNewsById = function (metadata) {
        return this.core.fetch('/news/{id}', 'get', metadata);
    };
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         The endpoint allows you to retrieve global market data.</hr>
     *
     */
    SDK.prototype.getMarketCap = function () {
        return this.core.fetch('/markets', 'get');
    };
    /**
     * <b> 150 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing changes in ETH balance, ERC20/ERC721/ERC1155 balances, NFT transfers, and
     * token allowance changes</hr>
     *
     */
    SDK.prototype.transactionPreview = function (metadata) {
        return this.core.fetch('/transaction/preview', 'get', metadata);
    };
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing only ERC20 balance changes</hr>
     *
     */
    SDK.prototype.erc20BalancePreview = function (metadata) {
        return this.core.fetch('/transaction/preview/erc20Change', 'get', metadata);
    };
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing only ETH balance changes</hr>
     *
     */
    SDK.prototype.ethereumBalancePreview = function (metadata) {
        return this.core.fetch('/transaction/preview/ethChange', 'get', metadata);
    };
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing only token allowance changes</hr>
     *
     */
    SDK.prototype.allowanceChange = function (metadata) {
        return this.core.fetch('/transaction/preview/allowanceChange', 'get', metadata);
    };
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing only NFT transfers</hr>
     *
     */
    SDK.prototype.nftChange = function (metadata) {
        return this.core.fetch('/transaction/preview/nftChange', 'get', metadata);
    };
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of portfolio coins with P/L and
     * other data displayed on CoinStats web</hr>
     *
     */
    SDK.prototype.getPortfolioCoins = function (metadata) {
        return this.core.fetch('/portfolio/coins', 'get', metadata);
    };
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of portfolio Transactions</hr>
     *
     */
    SDK.prototype.getPortfolioTransactions = function (metadata) {
        return this.core.fetch('/portfolio/transactions', 'get', metadata);
    };
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of fiat currencies supported by
     * CoinStats.</hr>
     *
     */
    SDK.prototype.getCurrencies = function () {
        return this.core.fetch('/currencies', 'get');
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
