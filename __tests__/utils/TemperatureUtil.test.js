import { TemperatureVO } from '../../valueobjects/TemperatureVO';
import TemperatureUtil from '../../utils/TemperatureUtil';
 
describe("TemperatureUtil unit tests", () => {
    const { convert } = TemperatureUtil();
 
    test('Given Temperature 28C When convert Then 28C', () => {
      // GIVEN
      let input = new TemperatureVO(20, "CELSIUS");
      
 
      // WHEN
      let actualOutput = convert(input, "FAHRENHEIT");
 
      // THEN
      let expectedOutput = new TemperatureVO(68, "FAHRENHEIT");
      //expect(actualOutput).toStrictEqual(expectedOutput);
      expect(actualOutput.value).toBe(expectedOutput.value);
      expect(actualOutput.unit).toBe(expectedOutput.unit);
      
    });
});