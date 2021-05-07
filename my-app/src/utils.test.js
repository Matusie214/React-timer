import {secondsToHourMinuteSecond} from './utils'

test("Wprowadzono 3600 => test czy wyswietlona zostanie godzina w formanie 01:00:00",()=>{
    expect(secondsToHourMinuteSecond(3600)).toBe("01:00:00")
})

test("Wprowadzono 0 => test czy wyswietlona zostanie godzina w formanie 00:00:00",()=>{
    expect(secondsToHourMinuteSecond(0)).toBe("00:00:00")
})

test("Wprowadzono 3601 => test czy wyswietlona zostanie godzina w formanie 01:00:01",()=>{
    expect(secondsToHourMinuteSecond(3601)).toBe("01:00:01")
})