import Collection from './src/collection';
export declare class LSMongo {
    storage: any;
    database: any;
    primaryKey: any;
    sep: any;
    ID: any;
    constructor(opts: any);
    get(name: any, opts: any): Collection;
    collection(name: any, opts: any): Collection;
}
