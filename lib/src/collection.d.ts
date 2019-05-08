declare class Collection {
    name: any;
    storage: any;
    path: any;
    primaryKey: any;
    ID: any;
    cache: any;
    cacheable: any;
    constructor(db: any, name: any, opts: any);
    _initCache(): void;
    _filter(filter: any, opts: any): any;
    insert(data: any, opts: any): any;
    find(query: any, opts: any): any;
    findOne(query: any, opts?: any): any;
    remove(query: any, opts?: any): any;
    update(query: any, values: any, opts: any): any;
    drop(): boolean;
}
export default Collection;
