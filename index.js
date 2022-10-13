function receivesAFunction(callbackFunction) {
    return callbackFunction();
}

function returnsANamedFunction() {
    const namedFunction = () => (`This function is named.`);
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return () => (`This function is not named.`);
}