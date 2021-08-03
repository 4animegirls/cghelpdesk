export class HttpError extends Error {
    constructor(networkObj) {
        const { UserMessage } = networkObj;
        super(UserMessage);
        this.networkObj = networkObj;
    }
}; 