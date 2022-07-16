export declare const DEFAULT_STEP = 0.01;
export declare const MIN_PRICE = 1e-18;
export declare type ValidationResult = string[];
export declare type ValidationFunction = (val?: any) => ValidationResult | Promise<ValidationResult>;
export declare function validateAll(fields: any): Promise<ValidationResult>;
export declare function hasErrors(validationResults: ValidationResult[]): boolean;
export declare function hasErrorsExcept(validationResults: ValidationResult[], errors: string[]): boolean;
export declare function required(value: any): ValidationResult;
export declare function isGreaterThan(num?: number, min?: number): ValidationResult;
export declare function allStringsUnique(strings?: any[], errorMsg?: ErrorMessage): ValidationResult;
export declare function duplicatedStringInList(str?: string, arr?: any[], errorMsg?: ErrorMessage): ValidationResult;
export declare function isObject(obj: any): boolean;
export declare function isFile(file: any): boolean;
export declare function nullOrEmpty(val: any): boolean;
export declare function notNullOrEmpty(val: any): boolean;
export declare function allNullOrEmpty(...values: any[]): boolean;
export declare function someNullOrEmpty(...values: any[]): boolean;
export declare function startsWithValue(value: any, ...values: any[]): boolean;
export declare enum ErrorMessage {
    ATTRIBUTE_ALREADY_USED = "This attribute name is already being used, please try another one.",
    ADDITIONAL_DATA_ALREADY_USED = "This additional data name is already being used, please try another one.",
    ANIMATION_REQUIRED = "Please upload an animation.",
    ADDRESS_ALREADY_USED = "This address is already being used, please try another one.",
    CANNOT_SAVE_ASSET = "Cannot save this asset, please check all required fields.",
    CANNOT_DEPLOY_ASSET_UNKNOWN_ERR = "Cannot deploy this asset, please try again later.",
    CANNOT_SAVE_CLASSES = "Cannot save this class, please check all required fields and avoid duplicate attribute names.",
    CANNOT_UPLOAD_ANIMATION = "Cannot upload the animation, please try again.",
    CANNOT_UPLOAD_IMAGE = "Cannot upload the image, please try again.",
    CHECK_REQUIRED_VALUES = "Please check all required fields.",
    CLASS_DUPLICATE_ATTR_NAME = "Cannot save this class: Attributes must have unique names.",
    DEFAULT = "An error occured, please try again.",
    IMG_REQUIRED = "Please upload an image.",
    INSUFFICIENT_FUNDS = "You have insufficient funds for executing this transaction.",
    READ_ONLY = "This field is readonly and cannot be edited.",
    READ_ONLY_PICKER = "This field is readonly, please use the picker to choose a date.",
    REQUIRED_AT_LEAST_ONE_PRICE = "Please add at least 1 price.",
    TOKEN_INVALID = "Please provide a valid token address.",
    TOKEN_ERC20_INVALID = "This is not a valid ERC20 token.",
    TOKEN_ERC20_INVALID_DEMO = "This is not a valid ERC20 token in this network. The search is for demo purposes and returns results from Ethereum Mainnet, this error will not happen in production.",
    TOKEN_ERC1155_INVALID = "This is not a valid ERC1155 token.",
    TOKEN_ERC1155_INVALID_DEMO = "This is not a valid ERC1155 token in this network. The search is for demo purposes and returns results from Ethereum Mainnet, this error will not happen in production.",
    TRANSACTION_CANCELLED = "Transaction was cancelled manually.",
    TYPE_REQUIRED = "Please select a type for the address.",
    VALUE_NOT_EMPTY = "This value is required and must not be empty."
}
export declare const IPFS_HASH_INVALID: (assetName: String) => string;
export declare const VALUE_TOO_SMALL: (min: number) => string;
