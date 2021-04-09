/*
Ожидаем true или false.
1. Число:
- целое число;
2. Формирует набор правильных входящих данных:
2008 -> true
2003 -> false
2000 -> true
1900 -> false

Проброс ошибки
Ничего не ввел -> "Аргумент не передан"
2008.4 -> "Число должно быть целым"
"2008", boolean, "2000 год", null -> "Аргумент может иметь тип только Number"
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear Function", ()=> {
    // beforeAll(()=> console.log("Функция, которая срабатывает перед тестами"));
    // beforeEach(()=> console.log("Функция срабатывает перед каждым тестом"));
    // afterEach(()=> console.log("Функция срабатывает после каждого теста"));
    // afterAll(()=> console.log("Функция, которая после тестов"));

    test("2008 - leap year", ()=> {
        expect(isLeapYear(2008)).toBe(true)
    });

    test("2003 - not leap year", ()=> {
        expect(isLeapYear(2003)).toBe(false)
    });

    test("2000 - leap year", ()=> {
        expect(isLeapYear(2000)).toBe(true)
    });

    test("1900 - not leap year", ()=> {
        const result = isLeapYear(1900)
        expect(result).toBe(false)
    });

    test("No argument given", ()=> {
        expect(() => isLeapYear()).toThrow("Аргумент не передан")
    });

    test("Argument given - '2008'", ()=> {
        expect(() => isLeapYear('2008')).toThrow("Аргумент может иметь тип только Number")
    });

    test("Argument given - '2000 год'", ()=> {
        expect(() => isLeapYear('2000 год')).toThrow("Аргумент может иметь тип только Number")
    });

    test("Argument given - boolean", ()=> {
        expect(() => isLeapYear(true)).toThrow("Аргумент может иметь тип только Number")
    });

    test("Argument given - null", ()=> {
        expect(() => isLeapYear(null)).toThrow("Аргумент может иметь тип только Number")
    });

    test("Argument given - 2000.4", ()=> {
        expect(() => isLeapYear(2000.4)).toThrow("Число должно быть целым")
    });
});