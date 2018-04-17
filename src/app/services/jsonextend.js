
JSON.dateParser = function (key, value) {
    if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value)
    }
    return value
}

JSON.parseWithDate = function (json) {
    var parse = JSON._parseSaved ? JSON._parseSaved : JSON.parse;
    try {
        var res = parse(json, JSON.dateParser);
        return res;
    } catch (e) {
        throw new Error("JSON content could not be parsed");
    }
}

JSON.useDateParser = function (reset) {
    if (typeof reset != "undefined") {
        if (JSON._parseSaved) {
            JSON.parse = JSON._parseSaved;
            JSON._parseSaved = null;
        }
    } else {
        if (!JSON.parseSaved) {
            JSON._parseSaved = JSON.parse;
            JSON.parse = JSON.parseWithDate;
        }
    }
}

JSON.useDateParser()








