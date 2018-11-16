import HashMap from "../utilities/hashMap";
test('HashMap ==>  add ==> case 1', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    let myAssumptions=true
    expect(myHashMap.add('mam',2)).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 2', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    let myAssumptions=false
    expect(myHashMap.add('nan',23)).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 3', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.containsKey('sri')
    let myAssumptions=true
    expect(actualVlaue).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 4', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.containsKey('khg')
    let myAssumptions=false
    expect(actualVlaue).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 5', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.upsert('dfsi',476)
    let myAssumptions=undefined
    expect(actualVlaue).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 6', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue= myHashMap.clear()
    let myAssumptions= undefined
    expect(actualVlaue).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 7', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.containsValue(1)
    let myAssumptions=true
    expect(actualVlaue).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 8', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.containsValue(4)
    let myAssumptions=false
    expect(actualVlaue).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 9', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.count()
    let myAssumptions=2
    expect(actualVlaue).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 10', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.getValue('nan')
    let myAssumptions=23
    expect(actualVlaue).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 11', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.getKeys()
    let myAssumptions=['nan','sri']
    expect(actualVlaue).toEqual(myAssumptions);
});
test('HashMap ==>  add ==> case 12', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.getValues()
    let myAssumptions=[23,1]
    expect(actualVlaue).toEqual(myAssumptions);
});
test('HashMap ==>  add ==> case 13', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.remove('nan')
    let myAssumptions=true
    expect(actualVlaue).toBe(myAssumptions);
    
});
test('HashMap ==>  add ==> case 14', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.remove('ndnfs')
    let myAssumptions=false
    expect(actualVlaue).toBe(myAssumptions);
    
});
test('HashMap ==>  add ==> case 15', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.update('nan',646)
    let myAssumptions=true
    expect(actualVlaue).toBe(myAssumptions);
    
});
test('HashMap ==>  add ==> case 16', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    let actualVlaue=myHashMap.update('dgfryd',24243)
    let myAssumptions=false
    expect(actualVlaue).toBe(myAssumptions);
    
});
test('HashMap ==>  add ==> case 17', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    myHashMap.update('sri',1234)
    let actualVlaue=myHashMap.getInternalObject();
    let myAssumptions={'nan':23,'sri':1234}
    expect(actualVlaue).toEqual(myAssumptions);
    
});

test('HashMap ==>  add ==> case 18', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    myHashMap.add('boss',2)
    let actualVlaue=myHashMap.getInternalObject()
    let myAssumptions={'boss':2,'nan':23,'sri':1}
    expect(actualVlaue).toEqual(myAssumptions);
    
});
test('HashMap ==>  add ==> case 19', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    myHashMap.clear()
    let actualVlaue= myHashMap.count()
    let myAssumptions=0
    expect(actualVlaue).toBe(myAssumptions);
});
test('HashMap ==>  add ==> case 20', () => {
    let myHashMap = new HashMap();
    myHashMap.add('nan',23)
    myHashMap.add('sri',1)
    myHashMap.remove('nan')
    let actualVlaue= myHashMap.count()
    let myAssumptions=1
    expect(actualVlaue).toBe(myAssumptions);
});

