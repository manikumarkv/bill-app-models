import StringUtils from './stringUtils'
export default class ScriptUtilities {
  /**
   * Checks object is null or undefined.
   * @param obj Object for which we need to check
   */
  public static IsNullOrUndefined(obj: object | null | undefined): boolean {
    return obj === null || obj === undefined;
  }

  /**
   * Returns true if machine is a mac machine.
   */
  public static IsMacMachine(): boolean {
    return navigator.platform.indexOf('Mac') !== -1;
  }

  /**
   * Returns a  numeric value
   * @param value value of attribute
   */
  public static getNumericValue(value: string, radix: number = 10): number | null {
    if (!StringUtils.IsNullOrEmpty(value)) {
      return parseInt(value, radix);
    }
    return null;
  }
  public static validateMail(email: string): boolean {
    var re = /[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
    return re.test(email)

  }
  public static validMobileNumber(value: string): boolean {
    var number = /[0-9]{10}$/;
    return number.test(value)
  }
  // public static HasStringAtFirst(value:string):boolean{

  // }
}

