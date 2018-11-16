import ScriptUtilities from "./../utilities/scriptUtils";
test('ScriptUtilities ==> IsNullOrEmpty ==> case 1', () => {
    let testedResult = ScriptUtilities.IsNullOrUndefined(null);
    let myAssumptions = true
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> IsNullOrEmpty ==> case 2', () => {
    let testedResult = ScriptUtilities.IsNullOrUndefined(undefined);
    let myAssumptions = true
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> IsNullOrEmpty ==> case 3', () => {
    let testedResult = ScriptUtilities.IsNullOrUndefined({});
    let myAssumptions = false
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> IsNullOrEmpty ==> case 4', () => {
    let testedResult = ScriptUtilities.IsNullOrUndefined({sdsgf:[]});
    let myAssumptions = false
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> IsMacMachine ==> case 5', () => {
    let testedResult = ScriptUtilities.IsMacMachine();
    let myAssumptions = false
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> getNumericValue ==> case 6', () => {
    let testedResult = ScriptUtilities.getNumericValue('name');
    let myAssumptions = NaN
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> getNumericValue ==> case 7', () => {
    let testedResult = ScriptUtilities.getNumericValue('123');
    let myAssumptions = 123
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> isValidMail ==> case 8', () => {
   let result = ScriptUtilities.validateMail('fakj@gmail.cmo')
    let myAssumptions = true
    expect(result).toBe(myAssumptions);
});
test('ScriptUtilities ==> isValidMail ==> case 9', () => {
    let result = ScriptUtilities.validateMail('fakj@gmail')
     let myAssumptions = false
     expect(result).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 10', () => {
    let result = ScriptUtilities.validateMail('.cmo')
     let myAssumptions = false
     expect(result).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 11', () => {
    let result = ScriptUtilities.validateMail('fak.cmo')
     let myAssumptions = false
     expect(result).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 12', () => {
    let result = ScriptUtilities.validateMail('fakj@')
     let myAssumptions = false
     expect(result).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 13', () => {
    let result = ScriptUtilities.validateMail('123123@gmailo.com')
     let myAssumptions = true
     expect(result).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 14', () => {
    let result = ScriptUtilities.validateMail('1231_.23@gmailo.com')
     let myAssumptions = true
     expect(result).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 15', () => {
    let result = ScriptUtilities.validateMail('JYHGJYG@gmailo.com')
     let myAssumptions = true
     expect(result).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 16', () => {
    let givenResult = ScriptUtilities.validMobileNumber('827428746')
     let myAssumptions = false
     expect(givenResult).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 17', () => {
    let givenResult = ScriptUtilities.validMobileNumber('8274287462')
     let myAssumptions = true
     expect(givenResult).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 18', () => {
    let givenResult = ScriptUtilities.validMobileNumber('8274287yr')
     let myAssumptions = false
     expect(givenResult).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 19', () => {
    let givenResult = ScriptUtilities.validMobileNumber('wskdfshjhb')
     let myAssumptions = false
     expect(givenResult).toBe(myAssumptions);
 });
 test('ScriptUtilities ==> isValidMail ==> case 20', () => {
    let givenResult = ScriptUtilities.validMobileNumber('82')
     let myAssumptions = false
     expect(givenResult).toBe(myAssumptions);
 });
