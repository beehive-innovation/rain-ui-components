export const DEFAULT_STEP = 0.01;
export const MIN_PRICE = 0.000000000000000001;
export async function validateAll(fields) {
    const errors = [];
    for (const [_, field] of Object.entries(fields)) {
        if (field?.validate) {
            const errors_ = await field.validate();
            errors.push(errors_ ?? []);
        }
    }
    return errors.flat();
}
export function hasErrors(validationResults) {
    return (validationResults ?? []).length > 0;
}
// Ignore specific errors that will not hurt further use of the data.
export function hasErrorsExcept(validationResults, errors) {
    return hasErrors((validationResults ?? []).filter((err) => !errors.includes(err.toString())));
}
export function required(value) {
    const errors = [];
    if ((value ?? "")?.toString().trim().length <= 0) {
        errors.push(ErrorMessage.VALUE_NOT_EMPTY);
    }
    return errors;
}
export function isGreaterThan(num = 0, min = 0) {
    const errors = [];
    if (num <= min) {
        errors.push(VALUE_TOO_SMALL(min));
    }
    return errors;
}
export function allStringsUnique(strings = [], errorMsg = ErrorMessage.DEFAULT) {
    const errors = [];
    if (new Set(strings).size != strings.length) {
        errors.push(errorMsg);
    }
    return errors;
}
export function duplicatedStringInList(str = "", arr = [], errorMsg = ErrorMessage.DEFAULT) {
    const errors = [];
    const occurences = arr.reduce((previousVal, newVal) => (newVal === str ? previousVal + 1 : previousVal), 0);
    if (occurences > 1) {
        errors.push(errorMsg);
    }
    return errors;
}
export function isObject(obj) {
    return typeof obj == "object" && obj != null;
}
export function isFile(file) {
    return file instanceof File || false;
}
export function nullOrEmpty(val) {
    if (isFile(val)) {
        return val?.size <= 0;
    }
    else if (isObject(val)) {
        // Will also cover Arrays
        return Object.keys(val)?.length <= 0;
    }
    else {
        return val == null || val == undefined || (val ?? "")?.toString().trim() == "";
    }
}
export function notNullOrEmpty(val) {
    return !nullOrEmpty(val);
}
export function allNullOrEmpty(...values) {
    return values ? values.every(nullOrEmpty) : true;
}
export function someNullOrEmpty(...values) {
    return values ? values.some(nullOrEmpty) : true;
}
export function startsWithValue(value, ...values) {
    return values
        ? values.some((val) => {
            return val.toString().toLowerCase().startsWith(value.toLowerCase());
        })
        : false;
}
export var ErrorMessage;
(function (ErrorMessage) {
    // ALL_ATTRIBUTES_REQUIRED = "Some attributes are empty, please provide a value.",
    ErrorMessage["ATTRIBUTE_ALREADY_USED"] = "This attribute name is already being used, please try another one.";
    ErrorMessage["ADDITIONAL_DATA_ALREADY_USED"] = "This additional data name is already being used, please try another one.";
    ErrorMessage["ANIMATION_REQUIRED"] = "Please upload an animation.";
    ErrorMessage["ADDRESS_ALREADY_USED"] = "This address is already being used, please try another one.";
    ErrorMessage["CANNOT_SAVE_ASSET"] = "Cannot save this asset, please check all required fields.";
    ErrorMessage["CANNOT_DEPLOY_ASSET_UNKNOWN_ERR"] = "Cannot deploy this asset, please try again later.";
    ErrorMessage["CANNOT_SAVE_CLASSES"] = "Cannot save this class, please check all required fields and avoid duplicate attribute names.";
    ErrorMessage["CANNOT_UPLOAD_ANIMATION"] = "Cannot upload the animation, please try again.";
    ErrorMessage["CANNOT_UPLOAD_IMAGE"] = "Cannot upload the image, please try again.";
    ErrorMessage["CHECK_REQUIRED_VALUES"] = "Please check all required fields.";
    ErrorMessage["CLASS_DUPLICATE_ATTR_NAME"] = "Cannot save this class: Attributes must have unique names.";
    ErrorMessage["DEFAULT"] = "An error occured, please try again.";
    ErrorMessage["IMG_REQUIRED"] = "Please upload an image.";
    ErrorMessage["INSUFFICIENT_FUNDS"] = "You have insufficient funds for executing this transaction.";
    ErrorMessage["READ_ONLY"] = "This field is readonly and cannot be edited.";
    ErrorMessage["READ_ONLY_PICKER"] = "This field is readonly, please use the picker to choose a date.";
    ErrorMessage["REQUIRED_AT_LEAST_ONE_PRICE"] = "Please add at least 1 price.";
    ErrorMessage["TOKEN_INVALID"] = "Please provide a valid token address.";
    ErrorMessage["TOKEN_ERC20_INVALID"] = "This is not a valid ERC20 token.";
    ErrorMessage["TOKEN_ERC20_INVALID_DEMO"] = "This is not a valid ERC20 token in this network. The search is for demo purposes and returns results from Ethereum Mainnet, this error will not happen in production.";
    ErrorMessage["TOKEN_ERC1155_INVALID"] = "This is not a valid ERC1155 token.";
    ErrorMessage["TOKEN_ERC1155_INVALID_DEMO"] = "This is not a valid ERC1155 token in this network. The search is for demo purposes and returns results from Ethereum Mainnet, this error will not happen in production.";
    ErrorMessage["TRANSACTION_CANCELLED"] = "Transaction was cancelled manually.";
    ErrorMessage["TYPE_REQUIRED"] = "Please select a type for the address.";
    ErrorMessage["VALUE_NOT_EMPTY"] = "This value is required and must not be empty.";
})(ErrorMessage || (ErrorMessage = {}));
export const IPFS_HASH_INVALID = (assetName) => `The IPFS hash was invalid, please try to deploy the asset "${assetName}" again.`;
export const VALUE_TOO_SMALL = (min) => `Please enter a value greater than ${min}.`;
