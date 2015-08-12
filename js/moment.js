'use strict';

(function() {

function getAllZones() {
    return _moment.tz.zones();
}

function convertTimestampToHumanForm(timestamp, tzIdentifier, formatStr) {
    var e;
    if (tzIdentifier == null) {
        tzIdentifier = DEFAULT_TIMEZONE_IDENTIFIER;
    }
    if (formatStr == null) {
        formatStr = 'YYYY/MM/DD HH:mm';
    }
    if ( ! _.isNumber(timestamp)) {
        return timestamp;
    }
    ensureZoneIdentifierIsValid(tzIdentifier);
    try {
        return _moment.unix(timestamp).tz(tzIdentifier).format(formatStr);
    } catch (_error) {
        e = _error;
        return "" + timestamp;
    }
}

function convertDateStringToUTCTimestamp(dateStr, tzIdentifier) {
    if (tzIdentifier == null) {
        tzIdentifier = DEFAULT_TIMEZONE_IDENTIFIER;
    }
    ensureZoneIdentifierIsValid(tzIdentifier);
    return parseInt(_moment.tz(dateStr, tzIdentifier).unix());
}

function convertDateStringToFullLocaleString(dateStr) {
    return _moment(dateStr).local().format('Do MMMM, YYYY');
}

})();
