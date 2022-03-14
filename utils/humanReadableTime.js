const humanReadableTime = (seconds, locale) => {
  const hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  const minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);

  let readableTime = "";

  if (hours > 0) {
    const hoursText = hours === 1 ? "hour" : "hours";
    readableTime += `${hours} ${locale === "pl" ? "godz." : hoursText} `;
  }

  if (minutes > 0) {
    const minutesText = minutes === 1 ? "min" : "mins";
    readableTime += `${minutes} ${locale === "pl" ? "min" : minutesText}`;
  }

  return readableTime;
};

export default humanReadableTime;
