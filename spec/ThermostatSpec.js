describe("Thermostat", function () {
    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    describe("Thermostat Temperature", function () {
        it("thermostat starts at 20 degrees", function () {
            expect(thermostat.currentTemp).toEqual(20);
        });

        it("calling the increaseTemp method increases the current temp by 1 degree", function () {
            thermostat.increaseTemp();
            expect(thermostat.currentTemp).toEqual(21);
        });

        it("calling the decreaseTemp method decreases the current temp by 1 degree", function () {
            thermostat.decreaseTemp();
            expect(thermostat.currentTemp).toEqual(19);
        });

        it("minimum temperature is 10 degrees", function () {
            expect(thermostat.minimumTemp).toEqual(10);
        });

        it("temperature cant go below 10 degrees", function () {
            thermostat.currentTemp = 10;
            thermostat.decreaseTemp();
            expect(thermostat.currentTemp).toEqual(10);
        });

        it("power saving mode is set to true", function () {
            expect(thermostat.powerSavingMode).toEqual(true);
        });

        it("if power saving mode is on, the maximum temperature is 25 degrees", function () {
            thermostat.currentTemp = 25;
            thermostat.increaseTemp();
            expect(thermostat.currentTemp).toEqual(25);
        });

        it("if power saving mode is off, the maximum temperature is 32 degrees", function () {
            thermostat.currentTemp = 32;
            thermostat.powerSavingMode = false;
            thermostat.increaseTemp();
            expect(thermostat.currentTemp).toEqual(32);
        });

        it("re-set button re-sets temperature to 20 and the power saving mode to on", function () {
            thermostat.currentTemp = 666;
            thermostat.powerSavingMode = false;
            thermostat.reset();
            expect(thermostat.currentTemp).toEqual(20);
            expect(thermostat.powerSavingMode).toEqual(true);
        });

        it("if temperature is above 25 and power saving mode button is pressed, temp is reduced to 25", function () {
            thermostat.currentTemp = 30;
            thermostat.powerSavingMode = false;
            thermostat.togglePowerSavingMode();
            expect(thermostat.currentTemp).toEqual(25);
        });

        it("if temperature is below 25 and power saving mode button is pressed, temp not changed", function () {
            thermostat.currentTemp = 21;
            thermostat.togglePowerSavingMode();
            expect(thermostat.currentTemp).toEqual(21);
        });

        it("if temperature is below 18 its green", function () {
            thermostat.currentTemp = 17;
            expect(thermostat.getColor()).toEqual("green");
        });

        it("if temperature is between 18-24 its yellow", function () {
            thermostat.currentTemp = 21;
            expect(thermostat.getColor()).toEqual("yellow");
        });

        it("if temperature is above 25 its red", function () {
            thermostat.currentTemp = 27;
            expect(thermostat.getColor()).toEqual("red");
        });

    });
});
