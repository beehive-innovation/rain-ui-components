export const DEFAULT_STEP = 0.01
export const MIN_PRICE = 0.000000000000000001

export type ValidationResult = string[]
export type ValidationFunction = (val?: any) => ValidationResult | Promise<ValidationResult>

export async function validateAll(fields: any): Promise<ValidationResult> {
  const errors: ValidationResult = []
  for (const [_, field] of Object.entries(fields)) {
    if (field?.validate) {
      const errors_ = await field.validate()
      errors.push(errors_ ?? [])
    }
  }
  return errors.flat()
}

export function hasErrors(validationResults: ValidationResult[]): boolean {
  return (validationResults ?? []).length > 0
}

// Ignore specific errors that will not hurt further use of the data.
export function hasErrorsExcept(validationResults: ValidationResult[], errors: string[]): boolean {
  return hasErrors((validationResults ?? []).filter((err) => !errors.includes(err.toString())))
}

export function required(value: any): ValidationResult {
  const errors = []
  if ((value ?? "")?.toString().trim().length <= 0) {
    errors.push(ErrorMessage.VALUE_NOT_EMPTY)
  }
  return errors
}

export function isGreaterThan(num: number = 0, min: number = 0): ValidationResult {
  const errors = []
  if (num <= min) {
    errors.push(VALUE_TOO_SMALL(min))
  }
  return errors
}

export function allStringsUnique(
  strings = [],
  errorMsg: ErrorMessage = ErrorMessage.DEFAULT
): ValidationResult {
  const errors: ValidationResult = []
  if (new Set(strings).size != strings.length) {
    errors.push(errorMsg)
  }
  return errors
}

export function duplicatedStringInList(
  str = "",
  arr = [],
  errorMsg: ErrorMessage = ErrorMessage.DEFAULT
): ValidationResult {
  const errors: ValidationResult = []
  const occurences = arr.reduce((previousVal, newVal) => (newVal === str ? previousVal + 1 : previousVal), 0)
  if (occurences > 1) {
    errors.push(errorMsg)
  }
  return errors
}

export function isObject(obj): boolean {
  return typeof obj == "object" && obj != null
}

export function isFile(file): boolean {
  return file instanceof File || false
}

export function nullOrEmpty(val): boolean {
  if (isFile(val)) {
    return val?.size <= 0
  } else if (isObject(val)) {
    // Will also cover Arrays
    return Object.keys(val)?.length <= 0
  } else {
    return val == null || val == undefined || (val ?? "")?.toString().trim() == ""
  }
}

export function notNullOrEmpty(val): boolean {
  return !nullOrEmpty(val)
}

export function allNullOrEmpty(...values): boolean {
  return values ? values.every(nullOrEmpty) : true
}

export function someNullOrEmpty(...values): boolean {
  return values ? values.some(nullOrEmpty) : true
}

export function startsWithValue(value, ...values): boolean {
  return values
    ? values.some((val) => {
        return val.toString().toLowerCase().startsWith(value.toLowerCase())
      })
    : false
}

export enum ErrorMessage {
  // ALL_ATTRIBUTES_REQUIRED = "Some attributes are empty, please provide a value.",
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
  TOKEN_ERC20_INVALID_DEMO = `This is not a valid ERC20 token in this network. The search is for demo purposes and returns results from Ethereum Mainnet, this error will not happen in production.`,
  TOKEN_ERC1155_INVALID = "This is not a valid ERC1155 token.",
  TOKEN_ERC1155_INVALID_DEMO = "This is not a valid ERC1155 token in this network. The search is for demo purposes and returns results from Ethereum Mainnet, this error will not happen in production.",
  TRANSACTION_CANCELLED = "Transaction was cancelled manually.",
  TYPE_REQUIRED = "Please select a type for the address.",
  VALUE_NOT_EMPTY = "This value is required and must not be empty."
}

export const IPFS_HASH_INVALID = (assetName: String) =>
  `The IPFS hash was invalid, please try to deploy the asset "${assetName}" again.`
export const VALUE_TOO_SMALL = (min: number) => `Please enter a value greater than ${min}.`
