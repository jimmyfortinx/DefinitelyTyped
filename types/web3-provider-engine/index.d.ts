import { JSONRPCRequestPayload, JSONRPCResponsePayload, Provider } from "ethereum-protocol";
interface Web3ProviderEngineOptions {
    pollingInterval?: number | undefined;
    blockTracker?: any;
    blockTrackerProvider?: any;
}
declare class Web3ProviderEngine implements Provider {
    constructor(options?: Web3ProviderEngineOptions);
    on(event: string, handler: () => void): void;
    send(payload: JSONRPCRequestPayload): void;
    sendAsync(
        payload: JSONRPCRequestPayload,
        callback: (
            error: null | Error,
            response: JSONRPCResponsePayload,
        ) => void,
    ): void;
    addProvider(provider: any): void;
    // start block polling
    start(callback?: () => void): void;
    // stop block polling
    stop(): void;
}
export = Web3ProviderEngine;

// declare module "web3-provider-engine/subproviders/nonce-tracker";
// declare module "web3-provider-engine/subproviders/hooked-wallet";
// declare module "web3-provider-engine/subproviders/filters";
