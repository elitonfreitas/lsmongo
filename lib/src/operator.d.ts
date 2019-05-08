declare class Operator {
    static $eq(val: any, tar: any): boolean;
    static $gt(val: any, tar: any): boolean;
    static $gte(val: any, tar: any): boolean;
    static $in(val: any, tar: any): boolean;
    static $lt(val: any, tar: any): boolean;
    static $lte(val: any, tar: any): boolean;
    static $ne(val: any, tar: any): boolean;
    static $nin(val: any, tar: any): boolean;
    static _checkExist(op: any): boolean;
}
export default Operator;
