import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of cryptocurrencies supported by
     * CoinStats.</hr>
     *
     */
    getCoins(metadata?: types.GetCoinsMetadataParam): Promise<FetchResponse<200, types.GetCoinsResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve detailed information about a specific
     * cryptocurrency based on its unique identifier.</hr>
     *
     */
    getCoinById(metadata: types.GetCoinByIdMetadataParam): Promise<FetchResponse<200, types.GetCoinByIdResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve chart data for a specific cryptocurrency
     * based on its unique identifier, specifying different time ranges.</hr>
     *
     */
    getCoinChartById(metadata: types.GetCoinChartByIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the historical average price for a specific
     * cryptocurrency based on its unique identifier and a specific date.</hr>
     *
     */
    getCoinAvgPrice(metadata: types.GetCoinAvgPriceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the historical price data for a specific
     * cryptocurrency on a particular exchange.</hr>
     *
     */
    getCoinExchangePrice(metadata: types.GetCoinExchangePriceMetadataParam): Promise<FetchResponse<200, types.GetCoinExchangePriceResponse200>>;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of supported exchanges</hr>
     *
     */
    getTickerExchanges(): Promise<FetchResponse<200, types.GetTickerExchangesResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of tickers for a specific
     * cryptocurrency across different exchanges.</hr>
     *
     */
    getTickerMarkets(metadata?: types.GetTickerMarketsMetadataParam): Promise<FetchResponse<200, types.GetTickerMarketsResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of supported blockchains by
     * CoinStats</hr>
     *
     */
    getBlockchains(): Promise<FetchResponse<200, types.GetBlockchainsResponse200>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the balance data for a provided wallet
     * address on a specific blockchain network</hr>
     *
     */
    getWalletBalance(metadata: types.GetWalletBalanceMetadataParam): Promise<FetchResponse<200, types.GetWalletBalanceResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the syncing status of the wallet with the
     * blockchain network</hr>
     *
     */
    getWalletSyncStatus(metadata: types.GetWalletSyncStatusMetadataParam): Promise<FetchResponse<200, types.GetWalletSyncStatusResponse200>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve transaction data for a specific wallet</hr>
     *
     */
    getWalletTransactions(metadata: types.GetWalletTransactionsMetadataParam): Promise<FetchResponse<200, types.GetWalletTransactionsResponse200>>;
    /**
     * <b> 8 credits per request </b>
     *             <hr>
     *         This endpoint initiates the syncing process to update transaction data for a
     * specific wallet. By making a PATCH request to this endpoint and providing the wallet
     * address as a parameter, you can trigger the syncing process and retrieve the latest
     * transaction data for the wallet.</hr>
     *
     */
    transactionsSync(metadata: types.TransactionsSyncMetadataParam): Promise<FetchResponse<200, types.TransactionsSyncResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of supported exchange portfolio
     * connections by CoinStats</hr>
     *
     */
    getExchanges(): Promise<FetchResponse<200, types.GetExchangesResponse200>>;
    /**
     * <b> 10 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the balance data for a provided by
     * Exchange</hr>
     *
     */
    getExchangeBalance(body: types.GetExchangeBalanceBodyParam): Promise<FetchResponse<200, types.GetExchangeBalanceResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve the syncing status of the exchange
     * portfolio</hr>
     *
     */
    getExchangeSyncStatus(metadata: types.GetExchangeSyncStatusMetadataParam): Promise<FetchResponse<200, types.GetExchangeSyncStatusResponse200>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve transaction data for a specific
     * exchange</hr>
     *
     */
    getExchangeTransactions(metadata: types.GetExchangeTransactionsMetadataParam): Promise<FetchResponse<200, types.GetExchangeTransactionsResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of fiat currencies supported by
     * CoinStats</hr>
     *
     */
    getFiatCurrencies(): Promise<FetchResponse<200, types.GetFiatCurrenciesResponse200>>;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of trending Non-Fungible Tokens
     * (NFTs) in the marketplace. Trending NFTs typically represent the most popular or highly
     * sought-after digital assets based on sales volume</hr>
     *
     */
    getTrendingNfts(metadata?: types.GetTrendingNftsMetadataParam): Promise<FetchResponse<200, types.GetTrendingNftsResponse200>>;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of NFT assets owned by a specific
     * wallet address.</hr>
     *
     */
    getNftsByWallet(metadata: types.GetNftsByWalletMetadataParam): Promise<FetchResponse<200, types.GetNftsByWalletResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve an NFT collection info with a specific
     * collection address.</hr>
     *
     */
    getNftCollectionByAddress(metadata: types.GetNftCollectionByAddressMetadataParam): Promise<FetchResponse<200, types.GetNftCollectionByAddressResponse200>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of NFT assets associated with a
     * specific NFT collection address.</hr>
     *
     */
    getNftCollectionAssetsByAddress(metadata: types.GetNftCollectionAssetsByAddressMetadataParam): Promise<FetchResponse<200, types.GetNftCollectionAssetsByAddressResponse200>>;
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve information about a specific NFT asset
     * based on the NFT collection address and token ID</hr>
     *
     */
    getNftCollectionAssetByTokenid(metadata: types.GetNftCollectionAssetByTokenidMetadataParam): Promise<FetchResponse<200, types.GetNftCollectionAssetByTokenidResponse200>>;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to get news sources.</hr>
     *
     */
    getNewsSources(): Promise<FetchResponse<200, types.GetNewsSourcesResponse200>>;
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         This endpoint allows you to get news articles with pagination</hr>
     *
     */
    getNews(metadata?: types.GetNewsMetadataParam): Promise<FetchResponse<200, types.GetNewsResponse200>>;
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         This endpoint allows you to get news articles based on a type.</hr>
     *
     */
    getNewsByType(metadata: types.GetNewsByTypeMetadataParam): Promise<FetchResponse<200, types.GetNewsByTypeResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to get news by id.</hr>
     *
     */
    getNewsById(metadata: types.GetNewsByIdMetadataParam): Promise<FetchResponse<200, types.GetNewsByIdResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         The endpoint allows you to retrieve global market data.</hr>
     *
     */
    getMarketCap(): Promise<FetchResponse<200, types.GetMarketCapResponse200>>;
    /**
     * <b> 150 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing changes in ETH balance, ERC20/ERC721/ERC1155 balances, NFT transfers, and
     * token allowance changes</hr>
     *
     */
    transactionPreview(metadata: types.TransactionPreviewMetadataParam): Promise<FetchResponse<200, types.TransactionPreviewResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing only ERC20 balance changes</hr>
     *
     */
    erc20BalancePreview(metadata: types.Erc20BalancePreviewMetadataParam): Promise<FetchResponse<200, types.Erc20BalancePreviewResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing only ETH balance changes</hr>
     *
     */
    ethereumBalancePreview(metadata: types.EthereumBalancePreviewMetadataParam): Promise<FetchResponse<200, types.EthereumBalancePreviewResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing only token allowance changes</hr>
     *
     */
    allowanceChange(metadata: types.AllowanceChangeMetadataParam): Promise<FetchResponse<200, types.AllowanceChangeResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         This endpoint preexecutes transaction and allows you to retrieve an object
     * containing only NFT transfers</hr>
     *
     */
    nftChange(metadata: types.NftChangeMetadataParam): Promise<FetchResponse<200, types.NftChangeResponse200>>;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of portfolio coins with P/L and
     * other data displayed on CoinStats web</hr>
     *
     */
    getPortfolioCoins(metadata: types.GetPortfolioCoinsMetadataParam): Promise<FetchResponse<200, types.GetPortfolioCoinsResponse200>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of portfolio Transactions</hr>
     *
     */
    getPortfolioTransactions(metadata: types.GetPortfolioTransactionsMetadataParam): Promise<FetchResponse<200, types.GetPortfolioTransactionsResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         This endpoint allows you to retrieve a list of fiat currencies supported by
     * CoinStats.</hr>
     *
     */
    getCurrencies(): Promise<FetchResponse<200, types.GetCurrenciesResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
