declare class MockStorage {
    length: any;
    constructor();
    key(): void;
    setItem(): void;
    getItem(): void;
    removeItem(): void;
}
export default MockStorage;
